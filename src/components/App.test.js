import React from 'react';
import ReactDOM from 'react-dom';
import WebsiteRouter from '../router.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebsiteRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
