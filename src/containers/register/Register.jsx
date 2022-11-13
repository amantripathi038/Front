import React, { useState, useEffect } from 'react';
import './register.css'
import axios from 'axios'
import swal from 'sweetalert';

function Register() {

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [dob, setDOB] = useState("")
    const [otp, setOTP] = useState("")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)
            console.log("Latitude is :", longitude);
            console.log("Longitude is :", latitude);
        });
    })

    async function handleSubmit(e) {
        e.preventDefault()
        if (otp.length === 6) {
            const config = { headers: { "Content-Type": "application/json" } };
            try {
                const { data } = await axios.post(
                    "https://cryptic-badlands-86252.herokuapp.com/registerWorker",
                    { contact, otp },
                    config
                );
                console.log(data)
                swal({
                    title: "Good job!",
                    text: "Registered Successfully!",
                    icon: "success",
                    button: "OK",
                });
            } catch (err) {
                alert(err.response.data)
            }
        } else alert("OTP must have 6 digits.")
    }

    async function handleOTP(e) {
        e.preventDefault()
        console.log(name, contact, password, dob, latitude, longitude)
        const d = new Date();
        let year = parseInt(d.getFullYear());
        if (latitude === 0) alert("Location is not enabled. Please allow location access and refresh the page.")
        else if (name.length < 2) alert("Enter Name.")
        else if (contact.length !== 10) alert("Contact must have 10 digits.")
        else if (password.length < 8) alert("Password length must be >=8.")
        else if (dob.length < 10) alert("Enter Birth Date.")
        else if ((year - parseInt(dob.substring(0, 4))) < 17) alert("Age is too less.")
        else {
            const config = { headers: { "Content-Type": "application/json" } };
            const { data, status } = await axios.post(
                "https://cryptic-badlands-86252.herokuapp.com/registerWorker/verify",
                { name, contact, password, latitude, longitude, dob },
                config
            );
            if (status === 200) {
                const x = document.getElementById('otp')
                const y = document.getElementById('submitbutton')
                const a1 = document.getElementById('name')
                const a2 = document.getElementById('contact')
                const a3 = document.getElementById('password')
                const a4 = document.getElementById('dob')
                a1.setAttribute("disabled", "disabled")
                a2.setAttribute("disabled", "disabled")
                a3.setAttribute("disabled", "disabled")
                a4.setAttribute("disabled", "disabled")
                x.style.visibility = "visible"
                y.style.visibility = "visible"
                console.log(data)
            }
            else alert("Something went wrong.")
        }
    }

    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            </div>

            <div className="gpt3__header-image mybox">

                <form>
                    <div className="form-group row m-2 mt-4">
                        <label htmlFor="name" className='col-sm-5'><h5 className='text-white'>Name</h5></label>
                        <div className='col-sm-7'>
                            <input type="name" className='form-control' id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="contact" className='col-sm-5'><h5 className='text-white'>Contact</h5></label>
                        <div className='col-sm-7'>
                            <input type="number" className="form-control" id="contact" value={contact} onChange={e => setContact(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="password" className='col-sm-5'><h5 className='text-white'>Password</h5></label>
                        <div className='col-sm-7'>
                            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="dob" className='col-sm-5'><h5 className='text-white'>Birth Date</h5></label>
                        <div className='col-sm-7'>
                            <input type="date" className="form-control" id="dob" value={dob} onChange={e => setDOB(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="location" className='col-sm-5'><h5 className='text-white'>Location</h5></label>
                        <div className='col-sm-7'>
                            <input type="location" className="form-control" id="location" value={latitude + " ," + longitude} disabled />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <button className='btn btn-primary btn-md col-sm-5' onClick={handleOTP}>Send OTP</button>
                        <div className='col-sm-7'>
                            <input type="number" className='form-control' id="otp" maxLength="6" style={{ visibility: "hidden" }}
                                value={otp} onChange={e => setOTP(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row m-4" >
                        <button id="submitbutton" className='btn btn-primary btn-lg col-sm-5 mx-auto' style={{ "background-color": "green", visibility: "hidden" }} onClick={handleSubmit}>Register</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Register