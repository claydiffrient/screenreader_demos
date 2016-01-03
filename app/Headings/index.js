import React from 'react';
import ReactDOM from 'react-dom';
import './headings.css';

const Headings = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Headings</h1>
        </div>
      </div>
      <div className='row'>
        <h2>Heading 2a</h2>
        <h3>Heading 3a</h3>
        <h3>Heading 3b</h3>
        <h2>Heading 2b</h2>
        <h3>Heading 3c</h3>
        <h3>Heading 3d</h3>
      </div>
    </div>
  );
};

ReactDOM.render(<Headings />, document.getElementById('main'));
