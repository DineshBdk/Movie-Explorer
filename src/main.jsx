import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter} from "react-router-dom"
import { ScrollTop } from './components/ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter basename='/movie-explorer'>
    <ScrollTop/>
    <App />
  </HashRouter>
);