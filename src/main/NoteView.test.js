import React from 'react';
import ReactDOM from 'react-dom';
import NoteView from './NoteView';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  