import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailStyle.css";



const Detail = () => {

    const {id} = useParams("");
    console.log(id);

    const [foundUser, setFoundUser] = useState([]);

    const getdata = async () => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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
            setFoundUser(data);
            console.log("Got individual User Data");
        }
    };

    useEffect(() => {
      getdata();
    }, [])
    

    return (
        <>
        
            <div style={{height: "100vh"}} className="text-light container mt-3 detail__Contianer">
                <h2>Welcome {foundUser.name}</h2>
                <div class="card text-left h-75">
                    <div class="card-body">
                        <div className="row ">
                            {/* <div class=" header__Container">
                                    <button type="button" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-alt"></i></button>
                            </div> */}
                            <div className="col-md-12 col-sm-12 col-lg-3">
                                <p class="card-text"><strong className='text-info'>Name : </strong>{foundUser.name}</p>
                                <p class="card-text"><strong className='text-info'>Age : </strong>{foundUser.age}</p>
                                <p class="card-text"><strong className='text-info'>Email : </strong>{foundUser.email}</p>
                                <p class="card-text"><strong className='text-info'>Description ⤵ </strong></p>
                                <p class="card-text">{foundUser.descreption}</p>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-3">
                                <p class="card-text"><strong className='text-info'>Phone : </strong>{foundUser.phone}</p>
                                <p class="card-text"><strong className='text-info'>Location : </strong></p>
                                <p class="card-text"><strong className='text-info'>Occupation : </strong>{foundUser.work}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        India
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail