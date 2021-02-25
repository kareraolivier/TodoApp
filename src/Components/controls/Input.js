import React from 'react'

export default function input(props) {

    const {name, value, onChange} = props;

    return (
                  <input      
                    type="name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Task title (160 characters)"
                    rows="3" 
                    name={name}
                    value={value}
                    onChange={onChange}
                    />
    )
}
