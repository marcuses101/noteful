import React from 'react';
import ReactDOM from 'react-dom';
import AddFolderForm from './AddFolderForm';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddFolderForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  