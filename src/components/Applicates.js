import Bas from './Bas';
import Abst from './Abst';
import React from 'react';
const Components = {
  bas:Bas,
  abs:Abst
}

const Applicates = ({sami}) => {
    
        return React.createElement(Components[sami], {
          
        });
  
}

export default Applicates