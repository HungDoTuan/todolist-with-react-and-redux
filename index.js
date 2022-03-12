import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {createStore} from 'redux'
import myReducers from './reducers'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import { QueryClientProvider, QueryClient} from 'react-query'

const store = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
const persistor = persistStore(store)

const queryClient = new QueryClient()
ReactDOM.render(

  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </ChakraProvider>
    </QueryClientProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
