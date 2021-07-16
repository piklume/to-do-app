import './App.css';

import ToDoItemList from './components/to-do-item-list/to-do-item-list.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>To-Do App</h3>
        <ToDoItemList />
      </header>
    </div>
  );
}

export default App;
