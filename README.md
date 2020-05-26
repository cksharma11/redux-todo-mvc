## Redux Demo 

TODO APP React & Redux with functional components

Getting Started : 

 - npm install
 - npm start

goto localhost:3000

## reducers

`index.js` inside reducer folder creates a `store` for the main app. It uses `combineReducers` method from `redux` which is used to combine stores.

*todos* : </br>
the file `src/reducers/todos.js` is the main store where we have all the initial values for the store, and the actions which can be performed on the store with the switch cases messages handler. Every time when an action comes here it checks and does the actions and returns a `new state`.

For example if message of `ADD_TODO` is get triggered than it will go to the `case` `of` `ADD_TODO` and will perform the action as defined and will return a new state. And the *returned state will become the latest state of the app*.

Similarly, viabilityFilter which does the same.

Once the reducer is created we can create a new store and pass it into the provider of root component so that every child component can use it as a when needed according to there need.

Notice the line in `src/index.js` </br>
```js
const store = createStore(reducer);
```
the method `createStore` from `redux` is creating the store using the reducer we provide to it.

Next step is to pass the store to the root component which will have all the children components.

Notice the lines in `src/index.js`</br>
```js
<Provider store={store}>
  <App/>
</Provider>
```
By wrapping the component in the provider we are saying that now the store is available to all the children components.

## actions

actions are nothing but a way of organising the actions in the app. Here we are dispatching the events via calling an action method. </br>
Notice in the file `src/actions/index.js` all the dispatch are wrapped inside the methods 

```js
import * as types from "../constants/ActionTypes";

export const addTodo = (text) => ({ type: types.ADD_TODO, text });
export const completeTodo = (id) => ({ type: types.COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const deleteTodo = (id) => ({ type: types.DELETE_TODO, id });
```
It helps us to use the dispatches more effectively, and the separation of concerns.

## containers

containers are the important part in order to pass props which are needed for the components.</br>

Notice the file `src/containers/FilterLink.js` 

```js
import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
```
Few things to notice here </br>

### `connect` from `react-redux`

The connect() function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in. - By Redux API Docs

As defined in the docs we are using the connect method to connect `Link` components to its props.

When you see the `src/components/Link.js`</br>
```js
const Link = ({ active, children, setFilter }) => {
  return (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: "pointer" }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  );
};
```
You will notice it takes `active` and `setFilter` as props. And these props are getting added in the `FilterProps.js` and it's finally returning a wrapped component which will have these props.

## selectors

Simple `“selector”` library for Redux (and others) inspired by getters in `NuclearJS`, `subscriptions` in `re-frame` and this `proposal` from `speedskater`.

Selectors can compute derived data, allowing Redux to store the minimal possible state.
Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
Selectors are composable. They can be used as input to other selectors. *- from reselect github readme*

You will notice in the app that we are filtering the data based on its state and displaying. It's ok to do when the data size is smaller but when it grows and becomes the large amount of data it can be time-consuming and to reduce it we use something called `Memoized Selector` what it does is, it only calls the transform method when there is a change in the state otherwise it simply returns the old values. 
</br>
</br>
to know more about selectors please refer to the reselect gihub repo</br>
[https://github.com/reduxjs/reselect](https://github.com/reduxjs/reselect)