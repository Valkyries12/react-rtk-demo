import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from './app/store';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* se importa provider y en la prop store le inyectamos nuestra store. Esto es usecontext por debajo */}
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>
)
