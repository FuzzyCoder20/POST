import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Icon } from '@material-ui/core';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
function Header({photoURL}) {
    return (
        <div className="header">
           <div className="header__logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/post-v2.appspot.com/o/Screenshot%202022-01-05%20180239.png?alt=media&token=91aaf53f-a156-43b5-bfd2-074f9e09bb48"/>
                <span>POST</span>
           </div>

           <div className="header__search">
               <Icon>
                   <SearchIcon/>
               </Icon>
                <input type="text" placeholder="Search your files"/>
               <Icon>
                   <FormatAlignCenterIcon/>
               </Icon>
           </div>

           <div class="header__icons">
               <span>
                <Icon>
                    <HelpOutlineIcon/>
                </Icon>
                <Icon>
                    <SettingsIcon/>
                </Icon>
                </span>
                <Icon>
                    <AppsIcon/>
                </Icon>
                <Avatar src={photoURL}/>
           </div>
        </div>
    )
}

export default Header
