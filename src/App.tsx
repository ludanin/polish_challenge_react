import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import Footer from "components/footer";
import Map from "components/map";
import reducers from "reducers/";
import sagas from "sagas/";

import "./css/root.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="APP">
        <Map/>
        <Footer/>
      </div>
    </Provider>
  );
};

export default App;
