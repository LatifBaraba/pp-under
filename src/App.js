import logo from './logo.svg';
import under from './assets/images/undraw_under_construction_46pa.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={under} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h3>This Site is Under Construction</h3>
        <span>Copyright © Pemuda Peduli. All rights reserved 2021</span>
      </header>
    </div>
  );
}

export default App;
