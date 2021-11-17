import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActionLink from './components/Actionlink/ActionLink';

function App(): JSX.Element {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/about"></Route>
    //     <Route path="/" element
    <ActionLink url={''} text={'SEE ON IMDB'}></ActionLink>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
