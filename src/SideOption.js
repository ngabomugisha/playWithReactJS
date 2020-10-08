import './SideOption.css'
import React, { useState } from 'react';



function SideOption({Icon, text}) {
    return (
        <div className="side__line">
            <Icon style={{ fontSize: 15 }}/><span>{text}</span>
        </div>
    )
}

export default SideOption
