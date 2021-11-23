const Filemenu = ({data}) => {
    return (
        <div className="w-3 fixed bg-color-900" style={{top:30}}>
            {console.log(data.children)}
            {data.children.map((e)=>
            <div className="w-full h-1 clickable">{e.title}</div>
            )}
        </div>
    )
}

export default Filemenu
