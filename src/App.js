import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PostList from "./components/PostList";
import PostAdd from "./components/PostAdd";
import PostEdit from "./components/PostEdit";

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={PostList} />
                <Route exact path="/postadd" component={PostAdd} />
                <Route exact path="/postedit" component={PostEdit} />
            </Router>
        );
    }
}

export default App;
