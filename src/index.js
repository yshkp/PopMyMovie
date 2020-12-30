import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

const checkReducer = (state = 0, action) => {
  switch (action.type) {
    case "CHECK":
      return (state = action.payload);
    default:
      return state;
  }
};

const initialState = {
  date: null,
  slot: null,
  seats: 0,
};

const movieState = {
  name: null,
  desc: null,
  rating: null,
  image_url: null,
};

const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "SET MOVIE":
      return (state = {
        name: action.payload.name,
        desc: action.payload.desc,
        rating: action.payload.rating,
        image_url: action.payload.image_url,
      });
    default:
      return state;
  }
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET DATE":
      return (state = {
        ...state,
        date: action.payload,
      });
    case "SET SLOT":
      return (state = {
        ...state,
        slot: action.payload,
      });
    case "SET SEAT":
      return (state = {
        ...state,
        seats: action.payload,
      });
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    check: checkReducer,
    ticket: ticketReducer,
    movie: movieReducer,
  })
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
