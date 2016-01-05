import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Index = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Screen Reader a11y Demos</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <ul className='nav nav-pills nav-stacked text-center'>
            <li><a href='/images.html'>Images</a></li>
            <li><a href='/tables.html'>Tables</a></li>
            <li><a href='/forms.html'>Forms</a></li>
            <li><a href='/screenreader-only.html'>.screenreader-only</a></li>
            {/*<li><a href='/descriptive-text.html'>Descriptive Text</a></li> */}
            <li><a href='/button-vs-link.html'>Button vs. Link</a></li>
            <li><a href='/headings.html'>Headings</a></li>
            <li><a href='/live-regions.html'>Live Regions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('main'));
