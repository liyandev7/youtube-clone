import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <span><MenuSharpIcon/></span>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"}/>
            </div>
            <div className="header__search">
                <input type="text" placeholder="Search"/>
                <div className="header__search__icon">
                    <SearchSharpIcon/>
                </div>
               
            </div>
       

            <div className="header__notification">
                <div className="option">   <VideoCallSharpIcon/></div>
                <div className="option">    <ViewModuleSharpIcon/></div>
                <div className="option"> <NotificationsSharpIcon/></div>
                <div className="option">                <Avatar alt="AliRazavi" src="https://yt3.ggpht.com/yti/ANoDKi60IrrO0cH9yKnGCt2aRYOMDIPlFT5QdeYEOBdz=s88-c-k-c0x00ffffff-no-rj-mo" />
</div>
            </div>
        </div>
    )
}

export default Header
