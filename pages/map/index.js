import React from 'react';

const MyComponent = () => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  return (
    <div>
      <h1>User List</h1>
      {data.map((text) => {

      })}
    </div>
  );
};

export default MyComponent;
