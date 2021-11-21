import React from 'react'




function Hresizer({setterminalHeight,initialSize,initialPos,toggler,settoggler,setInitialSize,setInitialPos}) {

    const initial = (e) => {
        let mainpanel = document.getElementById('botresized');
        
        
        setInitialPos(e.clientY);
        setInitialSize(mainpanel.offsetHeight);
        
        
    }

    const resize = (e) => {
        settoggler(!toggler);
        setterminalHeight(`${parseInt(initialSize) - parseInt(e.clientY-initialPos)}px`);
   
        
    }
    const release = (e) => {
        setterminalHeight(`${parseInt(initialSize) - parseInt(e.clientY-initialPos)}px`);
    }

    return (
        <div draggable='true'
        onDragStart={initial}
        onDrag={resize}
        onDragEnd={release}
        
        className="clickable w-full h-0 bg-color-800"
        >
            
        </div>
    )
}

export default Hresizer
