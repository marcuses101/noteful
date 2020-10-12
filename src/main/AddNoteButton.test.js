import React from 'react';
import ReactDOM from 'react-dom';
import AddNoteButton from './AddNoteButton';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddNoteButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
