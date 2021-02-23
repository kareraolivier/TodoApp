import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css';
import Photo from './logo/logo.png';
import NewTask from './newtask/newtask';


const Todo = () => {
        
const [buttonPopup, setButtonPopup]= useState(false);
    return (


        <div class="container input-group todo" >
           
            <div class="top">
                <img src={Photo} alt="..."></img>

                <div className='search'>
                    <input type="search" class="form-control rounded " placeholder="Search" />
                    <button type="button" class="btnone btn btn-dark btn-primary">search</button>
                </div>
                <button type="button" class="btn btn-dark btn-primary btnstyle"
                    onClick ={() => setButtonPopup(true)}  > newtask</button>
            </div>

            <div className="middle">
                <div className="row">

                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">0</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">0</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">0</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">0</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>
                    <div class="card" > 
                        <div class="card-body">
                            <h5 class="card-title">0</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        </div>
                    </div>

                </div>
            </div>
            <div class="bottom">
                <h4>NOTHING HERE</h4>
                <p>Just like your crush's reply</p>




                <button type="button" class="btn btn-dark btn-primary"
                   onClick ={() => setButtonPopup(true)} >START WITH A NEWTASK</button>
                   <NewTask trigger={buttonPopup}/>
            </div>

        </div>
    )

};

export default Todo;