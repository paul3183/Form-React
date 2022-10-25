import React from 'react';

const Form = ({handleSubmit, text, handleInput}) => {
  return (
    <div>
      <h1>{text ? `Welcome ${text}` : `Enter your name:`}</h1>
      <input className='input' onChange={handleInput} type="text" placeholder='Enter your name'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;