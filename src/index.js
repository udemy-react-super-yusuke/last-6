import React from "react";
import { render } from "react-dom";

import App from "./App";

// applyMiddleware を新たに読み込む
import { createStore, applyMiddleware } from "redux";
// redux-thunk も読み込む
import thunk from "redux-thunk";

import { Provider } from "react-redux";

import rootReducer from "./reducers";

// middleWare 用の配列を作成する
const middleWares = [thunk];

// store に適用する
const store = createStore(rootReducer, applyMiddleware(...middleWares));

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 仮に実行する
import giphyAPI from "./APIs/giphyAPI";

giphyAPI("cat").then(res => {
  console.log(res.data);
});
