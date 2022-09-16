import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import { GlobalState } from './hooks/useGlobalSate';
import store from './stores';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={ store }>
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
)
