import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import HomePage from './pages/HomePage';
import Skills from './pages/Skills';
import TopBar from './helpers/TopBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <div className="main-pad">
            <Route path='/' component={HomePage} exact />
            <Route path='/:id' component={HomePage} exact />
            <Route path='/skills' component={Skills} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
