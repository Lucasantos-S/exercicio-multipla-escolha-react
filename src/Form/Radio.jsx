import React from "react";

function Radio({ pergunta, options, id, onChange, value, active }) {
if(active === false) return null
  return (
    <fieldset style={{padding:'2rem' , margin:'1rem'}}>
      <legend style={{fontWeight:'bold'}} >{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            checked={value === option}
            value={option}
            id={id}
            onChange={onChange}
          ></input>
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
