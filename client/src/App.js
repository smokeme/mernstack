import React, { Component } from "react";
import AppNavBar from "./Components/AppNavbar";
import ShoppingList from "./Components/ShoppingList";
import { Provider } from "react-redux";
import store from "./redux/store";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
