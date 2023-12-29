import React from 'react';

export const Filter = ({ onChange, value }) => {
  return <input type="text" name="filter" onChange={onChange} value={value} />;
};
