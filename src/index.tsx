import { BrowserRouter as Router } from "react-router-dom";

import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root') as HTMLElement
);
