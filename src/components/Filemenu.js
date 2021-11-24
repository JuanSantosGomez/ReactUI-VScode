import Menuitem from "./Menuitem"

const Filemenu = ({data}) => {
    return (
        <div className="w-min-3 fixed" style={{top:30}}>
            {data.children.map((e)=>
            <Menuitem data={e} left={0} />
            )}
        </div>
    )
}

export default Filemenu
