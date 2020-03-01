import React from 'react';
import './App.css';
// import Github from "@material-ui/icons/GitHub";
// import LinkedIn from "@material-ui/icons/LinkedIn";
// import Instagram from "@material-ui/icons/Instagram";
import Menu from "@material-ui/icons/Menu";
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import Home from "./pages/home";
import Contact from './pages/contact';
import Medserv from './pages/medserv';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawer(open) {
    this.setState({ drawerOpen: open })
    return null;
  }

  // These should really close the drawer...
  HomeButton() {
    const history = useHistory();
    function handleClick() {
      history.push("/");
    }
    return (
      <ListItem button onClick={handleClick}>
        Home
      </ListItem>
    );
  }

  ContactButton() {
    const history = useHistory();
    function handleClick() {
      history.push("/contact");
    }
    return (
      <ListItem button onClick={handleClick}>
        Contact
      </ListItem>
    );
  }

  MedservButton() {
    const history = useHistory();
    function handleClick() {
      history.push("/medserv");
    }
    return (
      <ListItem button onClick={handleClick}>
        Medserv
      </ListItem>
    );
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <Menu className="headerIcon" fontSize='large' onClick={() => this.toggleDrawer(true)}/>
          Sam Walsh
        </header>
        
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/medserv">
              <Medserv />
            </Route>
          </Switch>

          <Drawer 
            open={this.state.drawerOpen}
            onClose={() => this.toggleDrawer(false)}
            style={{width: "200px"}}
          >
            <div>
              <List>
                <this.HomeButton />
                <this.MedservButton />
                <this.ContactButton />
              </List>
            </div>
          </Drawer>
        </Router >
      </div>
    );
  }
}

export default App;
