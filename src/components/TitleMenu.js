import React from 'react'

const TitleMenu = () => {
    return (
        <div className="h-full flex-shrink flex flex-row overflow-hidden">  
            <div className="h-full clickable"><p className="buttontext">File</p></div>
            <div className="h-full clickable"><p className="buttontext">Edit</p></div>
            <div className="h-full clickable"><p className="buttontext">Selection</p></div>
            <div className="h-full clickable"><p className="buttontext">View</p></div>
            <div className="h-full clickable"><p className="buttontext">Go</p></div>
            <div className="h-full clickable"><p className="buttontext">Run</p></div>

        </div>
    )
}

export default TitleMenu
