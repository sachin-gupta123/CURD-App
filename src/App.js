import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentsList from "./components/students.component";
import EditList from "./components/edit-students.component";
import CreateList from "./components/create-students.component";

class App extends Component{
  render(){
    return (
      <Router>
          <div >
          <nav >
             <div>
              <ul>
                <li>
                  <Link to="/">Students</Link>
                </li>
                <li >
                  <Link to="/create">Create List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
            <Route path="/" exact component={StudentsList} />
            <Route path="/edit/:id" component={EditList} />
            <Route path="/create" component={CreateList} />
          </div>
      </Router>
    );
  }
}

export default App;
