import './App.css';

function App() {
  fetch('http://localhost:3000/api/v1/players')
  .then(res => res.json())
  .then(data => console.log(data))
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
