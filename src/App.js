import React, { Component, useState, useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import useGet from './useGet';

const App = React.memo(props => {
  const data = useGet('https://api.github.com/users/andersontr15');
  console.log(data, 'DATA');
  return Object.values(data).length ? (
    <div>
      Data here:
      <code>{JSON.stringify(data)}</code>
    </div>
  ) : (
    'LOADING'
  );
});

export default App;
