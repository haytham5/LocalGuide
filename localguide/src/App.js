import './App.css';
import LocalGuide from './Components/localguide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {LocalGuide()}
      </header>
    </div>
  );
}

export default App;
