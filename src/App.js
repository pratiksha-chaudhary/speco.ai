import React from "react";
import Header from "./components/Header";
import { UserProvider } from "./context/userContext";
import "./App.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Survey from "./pages/Survey";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route path="/survey/:pageIndex">
                            <Survey />
                        </Route>
                    </Switch>
                </Router>
            </UserProvider>
        </div>
    );
}

export default App;
