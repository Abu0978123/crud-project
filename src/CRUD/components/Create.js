import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Create() {
  const Navigate = useNavigate();
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  //the following API is used for posting new data in the json server
  async function postData(e){
    e.preventDefault();
    await axios.post('http://localhost:3300/students',{
      Fname,
      Lname
    }).then(()=>{
      Navigate('/read')
    })
  }
  return (
    <div>
      <div className="formm shadow">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter First Name"
              aria-describedby="emailHelp"
              onChange={((e)=>{setFname(e.target.value)})}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your confidential data with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter your Last Name
            </label>
            <input
              placeholder=" Enter your Last Name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={((e)=>{setLname(e.target.value)})}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
              onClick={((e)=> postData(e)) }
          >
            Submit
          </button>
          <Link to={"/read"}>
            <button
              type="submit"
              style={{ marginLeft: "9px" }}
              className="btn btn-secondary"
            >
              Go to Table
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
