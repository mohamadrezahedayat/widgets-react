import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  // initialize state
  const [open, setopen] = useState(false);

  // initialize refrence to root element of component
  const ref = useRef();

  // use effect hook that runs only once to set body event listener
  useEffect(() => {
    // click event to body element
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      } else {
        setopen(false);
      }
    };

    // add event listener to body
    document.body.addEventListener('click', onBodyClick);

    return () => {
      // remove event listener to prevent error
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  // render dynamic content method
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  // main method to populate component contents
  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => {
            setopen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
