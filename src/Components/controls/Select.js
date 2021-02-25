import React from 'react'
import { MenuItem, Select as MuiSelect, InputLabel, FormControl } from '@material-ui/core';

export default function Select(props) {

    const { name, value, onChange, label, options } = props;
    return (
        <FormControl
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
                }
            </MuiSelect>
        </FormControl>
    )
}
