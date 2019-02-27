import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import PostForm from './components/Postform'
import Posts from './components/Posts'

//const store = createStore(() => [],{},applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
