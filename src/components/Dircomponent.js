import { useState } from "react"
import Icon from "./Icon"
const Dircomponent = ({data,indent}) => {
    const [isOpened,setIsOpened]=useState(false)
    const setit = () => setIsOpened(!isOpened)
    const icono = data.children ? 'warning':'info'
    const coloro = data.children ? '#ffffff':'#0000ff'

    
    return (
        <div className="w-full">
               
            <button className="w-full h-1 bg-color-900 clickable dirtext zeropads"  onClick={setit}><span style={{paddingLeft:indent}}><Icon icon={icono} color={coloro}/>{data.title}</span></button>
            {data.children && isOpened ?
            <div className="w-full flex flex-row">
            <div style={{backgroundColor:'#444444',width:1, zIndex:200,position:'relative',left:indent+15}}>
            </div>
         <div className="w-full">
            {data.children.map(
                (child)=>{
                    return <Dircomponent data={child} indent={indent+20}/>

                }
            )}
            </div>
            </div>

            : ''}
 
        </div>
    )
}

export default Dircomponent
