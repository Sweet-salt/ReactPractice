import logo from './logo.svg';
import './App.css';
import ContorlledComponent from './components/ControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent';

import Example from './components/example'
import Example1 from './components/example1';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Example />
        <Example1 />
      </header>
    </div>
  );
}

export default App;
