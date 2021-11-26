import Dircomponent from "./Dircomponent"

const Folder = ({folder,fold,onClic}) => {
    return (
        <div className="borderize w-full flex flex-col bg-color-900 h-min-1 ">
            
            <div className={`overflow-elli overflow-hidden w-full z-500 h-1 bg-color-900 menutext bold ${fold.isOpen ? "shadow-2":""}`} onClick={()=>onClic(folder.map((folds)=> folds.id === fold.id ? { ...folds, isOpen : !folds.isOpen} : folds))}>
                {fold.nem}
            </div>
            <div className="overflow-elli w-full overflow-auto">
            
            { fold.isOpen ? fold.content.map((e) =>
            <div className="w-full bg-color-900">
                <Dircomponent data={e} indent={20}/>
            </div>
            )
            : ""}
            
            </div>
        </div>
        
    )
}

export default Folder
