import React from 'react';
import PropTypes from 'prop-types';



const TextInput = ({ name, onChange, placeholder, value, error }) => {
   
    return (
         <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} invalid={error}/>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,    
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.bool
};

export default TextInput;