import { useState } from "react"

const Dircomponent = ({data}) => {
    const [isOpened,setIsOpened]=useState(false)
    const setit = () => setIsOpened(!isOpened)
    return (
        <li className="w-full">
            
            <p className="w-full h-1 bg-color-900 clickable zeropads" onClick={setit}>{data.title}</p>
            {data.children && isOpened ?
            <ul>
            {data.children.map(
                (child)=>{
                    return <Dircomponent data={child}/>

                }
            )}
            </ul>
            : ''}
            
        </li>
    )
}

export default Dircomponent
