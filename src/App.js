import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const renderScreen = (type) => {
    switch (type) {
      case 'login':
        return <Login onFormSwitch={toggleForm} />;
      case 'dashboard':
        return <Dashboard onFormSwitch={toggleForm} />; 
      default:
        return <Register onFormSwitch={toggleForm} />;
    }
  }

  return (
    <div className="App">
      {renderScreen(currentForm)}
    </div>
  );
}

export default App;
