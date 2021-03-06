import { useState } from "react"
import { useDispatch } from "react-redux"
import { changetheme } from "../actions"

const Menuitem = ({data,left,themechange}) => {
    const [isHovered,setIsHovered] = useState(false)
    const hovering = () => setIsHovered(true)
    const unhovering = () => setIsHovered(false)
    const dispatch = useDispatch()
    const themo = (e) => {

        if (data.themer){
            dispatch(e)
        }

    }
    return (
        <div className="w-min-3 flex flex-row h-1-5" style={{marginLeft:left,top:0,marginTop:0}} onMouseOver={hovering} onMouseLeave={unhovering} onClick={()=>themo(changetheme(data.title))}>
            <div className="w-3 bg-color-900 shadow">
            <div className="w-3 h-full bg-color-900 clickable">

                <span style={{paddingLeft:20, marginTop:20}}>{data.title}</span>
            </div>
            </div>
            
            
            {data.children&&isHovered ? <div className="w-min-3 h-content"> {data.children.map((e)=>
            <Menuitem data={e} left={0} themechange={themechange} /> 
            )}</div>: ""}
            
        </div>
    )
}

export default Menuitem
