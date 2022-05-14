import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const path = "http://localhost:8003/"

const Home = () => {
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [availableUsersData, setAvailableUsersData] = useState([]);
    console.log(availableUsersData);

    const getdata = async (e) => {

        const res = await fetch(`${path}getdata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        // const data = await res;
        // console.log(data);

        if (res.status === 422 || !data) {
            alert("Problem in getting data");
            console.log("error");
        } else {
            setAvailableUsersData(data);
            console.log("Got User Data");
        }
    };

    useEffect(() => {
        getdata();
    }, [])

    // -----------------------------------------------------


    const deleteuser = async (id) => {

        const res2 = await fetch(`${path}deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            alert("error");
        } else {
            alert("Data Deleted");
            getdata();
        }
    }

    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2">
                        <NavLink to="/register">
                            <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Add Data</button>
                        </NavLink>
                    </div>

                    <table className="table table-dark ">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">USERNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">JOB</th>
                                <th scope="col">NUMBER</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {availableUsersData.map( (user, id) => {
                                return(
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.work}</td>
                                            <td>{user.phone}</td>
                                            <td className='d-flex justify-content-around'>
                                            <NavLink to={`view/${user._id}`}>
                                                <button type="button" className="btn btn-success"><i className="fa-solid fa-eye"></i></button>
                                            </NavLink>
                                            <NavLink to={`edit/${user._id}`}>
                                                <button type="button" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
                                            </NavLink>
                                                <button type="button" onClick={() => deleteuser(user._id)} className="btn btn-danger"><i className="fa-solid fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Home