import React from 'react';
import SessionSettingsForm from './components/SessionSettingsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <SessionSettingsForm />
      </main>
    </div>
  );
}

export default App;

