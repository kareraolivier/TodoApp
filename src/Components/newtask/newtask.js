import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './newtask.css';


const newTask = (props) => {
      
    return (props.trigger) ? (<div className="task-popup" id="taskPopup">
    <div className="card input container ">
        <h4>Newtask</h4>
        <i class="bi bi-x-square"></i>
        <div class="mb-3">
            <label for="exampleFormControlInput1"
             class="form-label">title</label>
            <input type="email" class="form-control"
                id="exampleFormControlInput1"
                placeholder="Task title (160 characters)" />

        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1"
                class="form-label">desription</label>
            <textarea class="form-control"
                id="exampleFormControlTextarea1"
                rows="3" placeholder="Task description(240 characters)"></textarea>
                </div>

                
            <div class="mb-3">
               <label for="exampleFormControlTextarea1"
                class="form-label ">priority</label>
                <div className="input-group">
                <select class="custom-select form-control" id="inputGroupSelect02">
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                </div>
            </div>
            <button type="button" class="btntwo btn btn-dark btn-primary">Create task</button>
        { props.children }
            </div>
    </div>
    ) : "";
}
export default newTask