import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(<App />, root);
registerServiceWorker();
