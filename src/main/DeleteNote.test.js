import React from 'react';
import ReactDOM from 'react-dom';
import DeleteNote from './DeleteNote';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeleteNote />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  