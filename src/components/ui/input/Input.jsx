import React from 'react';

const Input = (props) => {
    const { handleChange } = props;

    return (
        <div className='containerInput'>
            <input className='form-control' placeholder="Buscar" onChange={handleChange}></input>
        </div>
    );
};

export default Input;