import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Edit = () => {

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        work: "",
        address: "",
        descreption: ""
    });

    function setdata(e) {
        // console.log(e.target.value);

        setInputValue((previousValue) => {
            return {
                ...previousValue,
                [e.target.name]: e.target.value
            }
        })
    };

    const {id} = useParams("");
    console.log(id);

    const getdata = async () => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            alert("Problem in getting data");
            console.log("error");
        } else {
            setInputValue(data);
            console.log("Got individual User Data");
        }
    };

    useEffect(() => {
      getdata();
    }, []);



    const updateUser = async (e) => {
        e.preventDefault();

        const { name, email, age, phone, work, address, descreption } = inputValue;

        const res2 = await fetch(`http://localhost:8003/updateuserdata/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                name, email,age, phone,work,address,descreption
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            alert("Data Updated");
        }
    };




    return (
        <>
            <div className='container register__container text-primary bg-dark'>
            <h1>Edit Page</h1>
                <form className='text-white'>
                    <div className='row'>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Name :</label>
                            <input type="text" value={inputValue.name} onChange={setdata} name='name' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Email :</label>
                            <input type="email" value={inputValue.email} onChange={setdata} name='email' className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Age :</label>
                            <input type="number" value={inputValue.age} onChange={setdata} name='age' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Phone number :</label>
                            <input type="number" value={inputValue.phone} onChange={setdata} name='phone' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Work</label>
                            <input type="text" value={inputValue.work} onChange={setdata} name='work' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label className="form-label">Address</label>
                            <input type="text" value={inputValue.address} onChange={setdata} name='address' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea name='descreption' value={inputValue.descreption} onChange={setdata} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={updateUser} id='form_btn' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Edit