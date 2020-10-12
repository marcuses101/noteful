import React from 'react';
import ReactDOM from 'react-dom';
import AddFolderButton from './AddFolderButton';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddFolderButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
