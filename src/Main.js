import React, {useState} from 'react'
import './Main.css'
import { Tab } from '@material-ui/core'
import CustomizedTabs from './Tab_m'
import './Main.css'
import Task from './Task'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';


function Main() {
    const [count, setCount]=useState([[1,0],[2,5],[3,0],[4,0]])
    var act=0

    return ( 
        <div>
            <div className="head">
                <h2>Design</h2>
            </div>
            <CustomizedTabs/>

        <div className="myApp">
        {count.map(c=>((c[1]==0)? act=act : act=act+1))}
        <Navbar number={act}/>
        
        <Button variant="contained" color="primary"> Reset </Button>

        <br/>

        {count.map(c=>(<Task num={c[1]}/>))}
       
        </div>



        </div>
    )
}





export default Main
