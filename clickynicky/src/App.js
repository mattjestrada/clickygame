import React, { Component } from 'react';
import GameContainer from "./components/GameContainer";

 class App extends Component {
  render() {
    return (
      <div>
        <GameContainer />
      </div>
    );
  }
 }
 // extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Clicky Game Nick Style</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
