import React from 'react'
import "./sidebarRow.css"
function SidebarRow({Icon,title}) {
    return (
        <div className="row__container">
            <Icon className="icon__sidebar"/>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default SidebarRow
