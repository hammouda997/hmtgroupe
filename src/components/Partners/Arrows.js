import React from 'react';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nav-arrow left-arrow" onClick={onClick}>
      &#8249;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nav-arrow right-arrow" onClick={onClick}>
      &#8250;
    </button>
  );
};

export { PrevArrow, NextArrow };
