import Dircomponent from "./Dircomponent"

const Folder = ({folder,fold,onClic}) => {
    return (
        <div className="w-full flex flex-col bg-color-900 h-min-1">
            
            <div className="overflow-elli w-full h-1 bg-color-800 clickable" onClick={()=>onClic(folder.map((folds)=> folds.id === fold.id ? { ...folds, isOpen : !folds.isOpen} : folds))}>
                {fold.nem}
            </div>
            <div className="overflow-elli w-full overflow-auto">
            <ul>
            { fold.isOpen ? fold.content.map((e) =>
            <li className="w-full bg-color-900">
                <Dircomponent data={e}/>
            </li>
            )
            : ""}
            </ul>
            </div>
        </div>
        
    )
}

export default Folder
