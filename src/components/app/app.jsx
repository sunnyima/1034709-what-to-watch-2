import React from 'react';
import FilmsList from '../filmsList/filmsList';

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const App = () =>{
  return (
    <FilmsList films = {films} />
  );
};

export default App;
