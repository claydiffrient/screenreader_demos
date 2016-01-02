import React from 'react';
import ReactDOM from 'react-dom';
import './tables.css';

const Tables = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Tables</h1>
        </div>
      </div>
      <div className='row'>
        <h2>Classic Tables</h2>
      </div>
      <div className='row'>
        <h2>role="grid"</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<Tables />, document.getElementById('main'));
