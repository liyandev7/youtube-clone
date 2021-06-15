import React from 'react'
import "./sidebarRow.css"
function SidebarRow({Icon,title,selected}) {
    return (
        <div className={`row__container ${selected ? 'active' : ''}`}>
            <Icon className="icon__sidebar"/>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default SidebarRow
