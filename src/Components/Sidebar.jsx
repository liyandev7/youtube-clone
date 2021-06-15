import React from 'react'
import "./sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
function Sidebar() {
    return (
        <div className="sidebar__container">
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={ExploreIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        </div>
    )
}

export default Sidebar
