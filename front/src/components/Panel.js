import React, { useState } from 'react';
import PropTypes from 'prop-types';

class Panel extends React.Component {

    // constructor(props) {
    //     super(props);
       
    // }

   render(){
    return (
         <div style={ { border : '1px solid black', width: this.props.width,height: this.props.height}}> 
              {this.props.children}
         </div>
    )
   }

  //
}

Panel.propTypes = {
    width: PropTypes.number.isRequired,    
    height: PropTypes.number.isRequired  
};
// const panelStyle = {
   
   
//   };
export default Panel;

