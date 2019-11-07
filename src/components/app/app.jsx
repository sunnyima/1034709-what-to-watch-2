import React from 'react';
import FilmsList from '../films-list/films-list';

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const App = () =>{
  return (
    <FilmsList films = {films} />
  );
};

export default App;
