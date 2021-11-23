import React from 'react'
import Filemenubutton from './Filemenubutton'

const TitleMenu = ({data,setMenus}) => {
    return (
        <div className="h-full flex-shrink flex flex-row overflow-hidden">  
            
            {data.map((e)=> <Filemenubutton key={e.id} ee = {e} />)}

        </div>
    )
}

export default TitleMenu
