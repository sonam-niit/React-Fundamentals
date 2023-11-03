import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Hello from './components/Hello';
import Variable from './components/Variable';
import Header from './components/header';
import List from './components/useCase/list';

function App() {
  return (
    <div className='App'>
      <h1>React Application</h1>
      <List />
      {/* <Hello name="sonam soni" message="Welcome" />
      <Hello name="Ajit Kumar" message="goog Evening" /> */}
      {/* <List /> */}
    </div>
  );
}

export default App;
