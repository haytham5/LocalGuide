import './App.css';
import localguide from './localguide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {localguide()}
      </header>
    </div>
  );
}

export default App;
