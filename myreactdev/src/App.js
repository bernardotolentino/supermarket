import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import View from "./components/View.js";
import Edit from "./components/Edit.js";
import Manager from "./components/Manager.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="header">
      <h1>Supermercado CREDFRANCO </h1>
      <BrowserRouter>
        <Switch>
          <Route>
            <Route exact path="/" component={ Login } />
            <Route  path="/manager" element={<Manager/>}/>
             <Route  path="/view/:id" element={<View/>}/>
             <Route  path="/edit/:id" element={<Edit/>}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}
export default App;
