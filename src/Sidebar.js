// eslint-disable-next-line
import React from 'react'
import './Sidebar.css'
import SideOption from './SideOption';

import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

function Sidebar() {
    return (
        <div
        className="sidebar">
            <div
            className="sidebar__items">
            <div className="menu">
                <SideOption
                Icon = {InboxIcon} text={'Inbox'}/>
                
                <SideOption
                Icon = {StarBorderIcon} text={'Today'}/>
                <SideOption
                Icon = {ListAltOutlinedIcon} text={'Upcoming'}/>
                <SideOption
                Icon = {DeleteOutlinedIcon} text={'Trash'}/>
            </div>
                    <h5 className="divider">PROJECTS</h5>
            
            <div>
                
            <SideOption
                Icon = {MenuOutlinedIcon} text={'EverDo'}/>
                <SideOption
                Icon = {MenuOutlinedIcon} text={'Gemshark'}/>
                <SideOption
                Icon = {MenuOutlinedIcon} text={'Rubicon'}/>
            </div>
                    <h5 className="divider">PERSONAL</h5>

            
            <div>
                
            <SideOption
                Icon = {MenuOutlinedIcon} text={'Shopping'}/>
                <SideOption
                Icon = {MenuOutlinedIcon} text={'Health'}/>
                <SideOption
                Icon = {MenuOutlinedIcon} text={'sidetext'}/>
            </div>
                    <h5 className="divider">LEARNING</h5>

            
            <div>
                
            <SideOption
                Icon = {MenuOutlinedIcon} text={'Electron'}/>
                <SideOption
                Icon = {MenuOutlinedIcon} text={'Flexbox'}/>

            </div>
            <div className="btn">
            <Fab color="primary" aria-label="add" className="">
          <AddIcon />
        </Fab></div>
</div>
        </div>
    )
}

export default Sidebar
