import React from 'react';

const GridCell = (props) => {
  return (
    <div className="gridCell" onClick={(event) => changeColor(event)}>
    </div>
  );
}


function changeColor(event) {
  if (event.target.style.backgroundColor !== 'blue') {
    event.target.style.backgroundColor = 'blue'
  } else {
    event.target.style.backgroundColor = 'red'
  }
}


export default GridCell;
