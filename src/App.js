import React from 'react'
import pages from './pages'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store} >
      <div>
        <pages.SearchPage />
      </div>
    </Provider>
  );
}

export default App;
