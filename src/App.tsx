import React from "react";
import "./App.css";
import { configureAppStore } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import NavBar from "./app/components/navBar";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
