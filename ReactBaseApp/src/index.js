import React from 'react';
import ReactDOM from 'react-dom';

//Create new component
//some HTML
const App = () => {
return <div>Hi!</div>;  //JSX

}


//Take component HTML into dom
ReactDOM.render(<App />, document.querySelector('.container'));