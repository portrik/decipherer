import ReactDOM from 'react-dom';
import React from 'react';

import { App } from './App';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Could not find page root!');
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
