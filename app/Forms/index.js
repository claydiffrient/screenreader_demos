import React from 'react';
import ReactDOM from 'react-dom';
import './forms.css';

const Forms = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Forms</h1>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <h2>Bad Form</h2>
          <form>
            <div className='input-group'>
              <input className='form-control' type='text' placeholder='Name' />
              <span className='input-group-btn'>
                <button className='btn btn-default' type='button'>Submit</button>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <h2>Good Form #1</h2>
          <form className='form-inline'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input id='name' className='form-control' type='text' placeholder='Billy Bob' />
              <button className='btn btn-default' type='button'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <h2>Good Form #2</h2>
          <form className='form-inline'>
            <div className='form-group'>
              <label>Name:
                <input id='name' className='form-control' type='text' placeholder='Billy Bob' />
              </label>
              <button className='btn btn-default' type='button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Forms />, document.getElementById('main'));
