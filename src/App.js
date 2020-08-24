import React from "react";
import "./App.css";

import Homepage from "./page-components/homepage-component/homepage.component";
import LoginSignUpPage from "./page-components/Login-Signup-page-component/Login-Signup-page.component";

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={LoginSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
