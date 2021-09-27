import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage/AboutPage";
import RoadMap from "./pages/RoadMap/RoadMap";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles/reset.css";
import "./styles/theme.css";
import Header from "./components/Header/Header";


//
ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/goatTroopDapp1" component={App} />
        <Route exact path="/goatTroopDapp1/about" component={AboutPage} />
        <Route exact path="/goatTroopDapp1/road" component={RoadMap} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
