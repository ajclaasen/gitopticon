import RepositoriesList from './RepositoriesList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <RepositoriesList query="hello world" />
      </header>
    </div>
  );
}

export default App;
