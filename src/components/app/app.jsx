import React from 'react';
import filmsList from '../filmsList/filmsList';

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const App = () =>{
  return (
    <filmsList films = {films} />
  );
};

export default App;
