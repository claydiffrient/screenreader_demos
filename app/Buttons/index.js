import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './buttons.css';

class Buttons extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({
      showModal: true
    });
  }

  closeModal () {
    this.setState({
      showModal: false
    });
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='text-center'>Buttons vs. Link</h1>
          </div>
        </div>
        <div className='row'>
          <h2>Bad "Buttons"</h2>
          <div className='col-xs-6'>
            <div className='btn btn-primary' role='button'>
              Press Me
            </div>
          </div>
          <div className='col-xs-6'>
            <a href='#' onClick={this.openModal} className='btn btn-primary' role='button'>
              Open Modal
            </a>
          </div>
        </div>
        <div className='row'>
          <h2>Good Buttons / Links</h2>
          <div className='col-xs-6'>
            <button className='btn btn-primary' onClick={this.openModal}>
              Open Modal
            </button>
          </div>
          <div className='col-xs-6'>
            <a href='/index.html' className='btn btn-primary'>
              Return to Index
            </a>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
        >
          Some modal content
        </ReactModal>
      </div>
    );
  }
}

Buttons.displayName = 'Buttons';

ReactDOM.render(<Buttons />, document.getElementById('main'));
