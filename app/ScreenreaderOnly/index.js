import React from 'react';
import ReactDOM from 'react-dom';
import './screenreaderOnly.css';

const ScreenreaderOnly = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>.screenreader-only</h1>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <h2>Bad Hiding</h2>
          <div className='row'>
            <div className='col-xs-4'>
              <p className='hiddenBadly'>Important information to help SR users</p>
            </div>
            <div className='col-xs-4'>
              <p className='invisiblyBad'>Important information to again help SR users</p>
            </div>
            <div className='col-xs-4'>
              <p>More text or an image or something</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12'>
          <h2>Good Hiding</h2>
          <p className='screenreader-only'>Important information to help sr users</p>
          <p>More text or an image or something</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ScreenreaderOnly />, document.getElementById('main'));
