import Menuitem from "./Menuitem"

const Filemenu = ({data,themechange}) => {
    return (
        <div className="w-min-3 fixed" style={{top:30}}>
            {data.children.map((e)=>
            <Menuitem data={e} left={0} themechange={themechange} />
            )}
        </div>
    )
}

export default Filemenu
