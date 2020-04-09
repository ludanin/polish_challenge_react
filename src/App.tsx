import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "reducers/";
import sagas from "sagas/";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="APP">
        {/* TODO  */}
      </div>
    </Provider>
  );
};

export default App;
