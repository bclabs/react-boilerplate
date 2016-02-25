// import React from 'react'

// "Application state" is the concept of the overall condition of the application
// For example, the current user's ID should be part of the Application state

// Problem: state is hard to keep track of
// Solution: make it changeable in only one place



// Here is a fake implementation of redux

// the whole concept of redux is just one function that takes two parameters, the state and an action
// it then returns a new state: `newState = reducer(state, action)`

// This is the application state that only redux can change
// let currentState = {
//     counter: 0
// }


// This is a reducer that only knows how to handle one type of action
// function reducer(state, action) {
//     if (action.type === 'INCREMENT') {
//         state.counter = state.counter + 1
//         return state
//     }
// }

// to start doing things in this application, all you need to do is call the reducer
// here's how it's done manually:

// Define your "action" which is just a plain object with a type property
// let incrementAction = {
//     type: 'INCREMENT'
// }

// Call the reducer with that action
// currentState = reducer(currentState, incrementAction)


// Now let's make that easier to use by writing a dispatcher function
// function dispatch(action) {
//     currentState = reducer(currentState, action)
// }

// Now all we have to do is:
// dispatch(incrementAction)

// That doesn't look like a big difference but it makes it such that in order to make redux do something,
// you only need to know about the dispatch function, not what the whole state is


// That's it for redux... now to make it easier to use with React

// function connect(mappingFunction) {
//     return function(component) {
//         let props = mappingFunction(currentState)
//         return (<component counter={props.counter} dispatch={dispatch} />)
//     }
// }

// That's it for the React part



// Here is how you use it

// class TestComponent extends React.Component {
//     render() {
//         function onClick() {
//             this.props.dispatch(incrementAction)
//         }
//         return (
//             <p onClick={onClick}>{this.props.counter}</p>
//         )
//     }
// }
//
// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }
//
// TestComponent = connect(mapStateToProps)(TestComponent)
//
// function fakeApp() {
//     return (<TestComponent />)
// }
