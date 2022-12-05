import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Read() {
  const navigate = useNavigate();
  const [Dataa, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  //using get method to fetch data from json server
  async function getData() {
    try {
      const Dataa = await axios.get("http://localhost:3300/students/");
      setData(Dataa.data);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following function for delete data through APIs
  async function handleDelete(id) {
    await axios
      .delete(`http://localhost:3300/students/${id}`)
      .then(()=>{
        getData();
      })
      
  }
  return (
    <div className="container customTable">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Dataa && Dataa.length > 0 ? (
            Dataa.map((items, i) => (
              <tr key={items.id}>
                <th scope="row">{items.id}</th>
                <td>{items.Fname}</td>
                <td>{items.Lname}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(items.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${items.id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data founded</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
