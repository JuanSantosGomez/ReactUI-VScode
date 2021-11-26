import { useState } from "react"
import Icon from "./Icon"
import { useDispatch } from "react-redux"
import { switchapp } from "../actions"

const Dircomponent = ({data,indent}) => {
    const [isOpened,setIsOpened]=useState(false)
    const setit = () => {if (data.app){
        themo(switchapp(data.app))};setIsOpened(!isOpened);}
    const icono = data.children ? 'warning':'info'
    const coloro = data.children ? '#ffffff':'#0000ff'
    const dispatch = useDispatch()
    const themo = (e) => {

        
            dispatch(e)
        

    }
    
    return (
        <div className="w-full overflow-hidden overflow-elli">
               
            <button className="w-full h-1 bg-color-900 clickable dirtext overflow-hidden overflow-elli zeropads"  onClick={setit}><span style={{overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis", padding:2,paddingLeft:indent}}><Icon icon={icono} color={coloro}/>{data.title}</span></button>
            {data.children && isOpened ?
            <div className="w-full flex flex-row">
            <div style={{width:1, zIndex:200,position:'relative',left:indent+15}} className="bg-text-001">
            </div>
         <div className="flex-grow overflow-hidden overflow-elli">
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
