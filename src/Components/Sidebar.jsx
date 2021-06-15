import React from 'react'
import "./sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SidebarRow from './SidebarRow';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Sidebar() {
    return (
        <div className="sidebar__container">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={ExploreIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow  Icon={ThumbUpIcon} title="Like Videos"/>
            <hr />
            <SidebarRow  Icon={MoreHorizIcon} title="Show More"/>
        </div>
    )
}

export default Sidebar
