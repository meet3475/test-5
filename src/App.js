import React from 'react';
import Counter from './container/Counter/Counter';
import { Provider } from 'react-redux';
import { configerstore } from './Redux/store';

function App(props) {
 const  store = configerstore()
  return (

    <Provider store={store}>
      <Counter />
    </Provider>


  );
}

export default App;