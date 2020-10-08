import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

export default function Task(props) {
    const[num, setNum]=useState(props.num)
    let opt = false
    if(num==0)
    {
        
    return (
        <div>
            <div>
    <span>{"Zero"}</span>
    <Button variant="contained" color="" onClick={() => {setNum(num + 1)}}>+</Button>
    <Button variant="contained" disabled>-</Button>
    <Button variant="contained" color="secondary">Delete</Button>
            </div>
        </div>
    )
    }
    else{
           
    return (
        <div>
            <div>
    <span>{num}</span>
    <Button variant="contained" color="" onClick={() => {setNum(num + 1)}}>+</Button>
    <Button variant="contained" color="" onClick={() => {setNum(num - 1)}}>-</Button>
    <Button variant="contained" color="secondary">Delete</Button>
            </div>
        </div>
    )
    }
}
