import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider } from 'context/Store'
import App from 'components/App'

import 'assets/styles/reset.css'
import 'assets/styles/main.scss'
import 'assets/styles/tailwind.css'

ReactDOM.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
