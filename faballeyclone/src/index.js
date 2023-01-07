import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
<ChakraProvider>
    <Provider store={Store}>
        <App />
    </Provider>
</ChakraProvider>
    </BrowserRouter>

);

reportWebVitals();
