import React, { useState, useEffect } from 'react';
import { IconButton, Badge, Grid } from '@material-ui/core';
import { useTask, Form } from '../newtask/useTask';
import Controls  from '../../Components/controls/Controls';
import * as ServicesTask from '../../servises/ServisesTask';


const initialValues = {
    id: 0,
    image: "",
    title: "",
    description: "",
    priorityId: "",
}
function Task() {
    const { values,
           useValues,
        handleInputChange, } = useTask(initialValues);

    return (
        <Form>
            <Grid container>
                <Grid item sx={6}>
                    <h4>Newtask</h4>
                </Grid>
                <Grid item sx={6}>
                    <button type="button" class="btn btn-dark btn-primary btnstyle"
                    > newtask</button>
                    <Grid item sx={12}>


                        <i class="bi bi-x-square"></i>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1"
                                class="form-label">title</label>
                            <Controls.Input>
                                type="name"
                                class="form-control"
                                id="exampleFormControlControls.1"
                                placeholder="Task title (160 characters)"
                                name="title"
                                value={values.title}
                                onChange={handleInputChange} </Controls.Input>

                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1"
                                class="form-label">desription</label>
                            <Controls.Input>
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Task description(240 characters)"
                                rows="3"
                                name="description"
                                value={values.description}
                                onChange={handleInputChange}
                            </Controls.Input>
                        </div>


                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1"
                                class="form-label ">priority</label>
                            <div className="input-group">
                                <Controls.Select
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    // label="priority"
                                    name="priorityId"
                                    value={values.priorityId}
                                    onChange="handleInputChange"
                                    options={ServicesTask.getPriorityOption()}>
                                    </Controls.Select> 
                            </div>
                        </div>
                        <button type="button" className="btntwo btn btn-dark btn-primary">Create task</button>

                    </Grid>
                </Grid>
                <hr />
            </Grid>
        </Form>
    )
}

export default Task;

