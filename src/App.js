import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail.js/PostDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
                <Home />
          </Route> 
          <Route exact path="/post/:postId">
              <PostDetail />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
