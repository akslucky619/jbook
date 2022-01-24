import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionTypes } from "./action-types";
import { useTypedSelector } from "../hooks/used-type-selector";

export const store = createStore(reducers, applyMiddleware(thunk));

// const bundle = useTypedSelector((state) => state);

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});
store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "text",
  },
});

const st = store.getState();
const order1 = st.cells.order[1];
const order2 = st.cells.order[2];

console.log(st, "BUNDLE");
store.dispatch({
  type: ActionTypes.UPDATE_CELL,
  payload: {
    id: order1,
    content: `
    import React from 'react'
    import ReactDOM from 'react-dom'
    import 'bulma/css/bulma.min.css';

    const App = () => {
      return <div>Hi There ! </div>
    }

    // call show function to see the value in preview cell

    show(<App />)

    `,
  },
});

store.dispatch({
  type: ActionTypes.UPDATE_CELL,
  payload: {
    id: order2,
    content: `
    function add(a,b){
      return a+b
    }

    // call show function to see the value in preview cell

    show(add(1,3))

    `,
  },
});

// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "code",
//   },
// });

// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "text",
//   },
// });
