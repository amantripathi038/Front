import React from 'react';
import './register.css'

function Register() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            </div>

            <div className="gpt3__header-image mybox">


                <form>
                    <div className="form-group row m-2">
                        <label htmlFor="name" className='col-sm-4'><h5 className='text-white'>Name</h5></label>
                        <div className='col-sm-8'>
                            <input type="name" className='form-control' id="name" />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="contact" className='col-sm-4'><h5 className='text-white'>Contact</h5></label>
                        <div className='col-sm-8'>
                            <input type="contact" className="form-control" id="contact"/>
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="password" className='col-sm-4'><h5 className='text-white'>Password</h5></label>
                        <div className='col-sm-8'>
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <div className="form-group row m-2" >
                        <label htmlFor="dob" className='col-sm-4'><h5 className='text-white'>Birth Date</h5></label>
                        <div className='col-sm-8'>
                            <input type="date" className="form-control" id="dob"/>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Register