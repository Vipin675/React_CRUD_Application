import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // //////////////////////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    work: "",
    address: "",
    descreption: "",
  });

  function setdata(e) {
    // console.log(e.target.value);
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        [e.target.name]: e.target.value,
      };
    });
  }

  const addInputData = async (e) => {
    e.preventDefault();

    const { name, email, age, phone, work, address, descreption } = inputValue;

    const res = await fetch("http://localhost:8003/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        phone,
        work,
        address,
        descreption,
      }),
    });

    // const data = await res.json();
    const data = await res;
    console.log(data);

    if (
      res.status === 422 ||
      !data ||
      !name ||
      !email ||
      !age ||
      !phone ||
      !work ||
      !address ||
      !descreption
    ) {
      alert("Unfilled area or user already exists");
      console.log("error");
    } else {
      alert("Data Added to the DB succefully");
      console.log("Data Added");
      navigate("/");
    }
  };

  // ////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="container register__container bg-dark">
        <form className="text-white" action="/register" method="post">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Name :</label>
              <input
                type="text"
                value={inputValue.name}
                onChange={setdata}
                name="name"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Email :</label>
              <input
                type="email"
                value={inputValue.email}
                onChange={setdata}
                name="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Age :</label>
              <input
                type="number"
                value={inputValue.age}
                onChange={setdata}
                name="age"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Phone number :</label>
              <input
                type="number"
                value={inputValue.phone}
                onChange={setdata}
                name="phone"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Work</label>
              <input
                type="text"
                value={inputValue.work}
                onChange={setdata}
                name="work"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                value={inputValue.address}
                onChange={setdata}
                name="address"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                name="descreption"
                value={inputValue.descreption}
                onChange={setdata}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            onClick={addInputData}
            id="form_btn"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
