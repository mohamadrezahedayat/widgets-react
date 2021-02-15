import React, { useState } from 'react';

export default function Accordion({ items }) {
  // initialze state
  const [activeIndex, setActiveIndex] = useState(null);

  // click handler to store active index
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  // populate html elements
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
}
