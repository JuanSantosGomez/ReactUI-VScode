import React from 'react'

function Vresizer({setsidepanelWidth,initialSize,initialPos,unreleased,setInitialSize,setInitialPos,setunreleased}) {

    const initial = (e) => {
      
        let resizable = document.getElementById('sideresized');
        
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
        
    }
    
    const resize = (e) => {
    
        let resizable = document.getElementById('sideresized');
       
        if(unreleased){
            
            if ((parseInt(`${parseInt(initialSize) + parseInt(e.clientX - initialPos)}`)>170)){
                resizable.style.display = 'flex';
                setsidepanelWidth(`${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`);
            }
            
            if ( parseInt(`${parseInt(initialSize) + parseInt(e.clientX - initialPos)}`) < 100){
                resizable.style.display = 'none';
            }
        }  

   

    
    }
    
    const release = (e) => {
        let resizable = document.getElementById('sideresized');
        if ( parseInt(`${parseInt(initialSize) + parseInt(e.clientX - initialPos)}`) < 100){
            setsidepanelWidth(`${0}px`);
        }
        resizable.style.display = 'flex';
        setunreleased(true);
    
        
    }



    return (
        <div draggable='true'
        onDragStart={initial}
        onDrag={resize}
        onDragEnd={release}
        className="clickable h-max-full w-0 bg-color-900"
        >
    
        </div>
    )
}

export default Vresizer
