import React from 'react'

const TitleMenu = () => {
    return (
        <div className="h-full flex-shrink flex flex-row overflow-hidden">  
            <div className="h-full clickable">File</div>
            <div className="h-full clickable">Edit</div>
            <div className="h-full clickable">Selection</div>
            <div className="h-full clickable">View</div>
            <div className="h-full clickable">Go</div>
            <div className="h-full clickable">Run</div>

        </div>
    )
}

export default TitleMenu
