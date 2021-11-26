import React from 'react'




function Hresizer({setterminalHeight,initialSize,initialPos,toggler,setToggler,setInitialSize,setInitialPos}) {

    const initial = (e) => {
        let mainpanel = document.getElementById('botresized');
        
        
        setInitialPos(e.clientY);
        setInitialSize(mainpanel.offsetHeight);
        
        
    }

    const resize = (e) => {
        setToggler(!toggler);
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
        
        className="cickable w-full h-0 bg-color-800 curserrow"
        >
            
        </div>
    )
}

export default Hresizer
