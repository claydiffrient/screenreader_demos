import React from 'react';
import ReactDOM from 'react-dom';
import './liveRegions.css';
import stateArray from './states';
import countryArray from './countries';

class LiveRegions extends React.Component {

  constructor () {
    super();
    this.state = {
      relevant: 'additions text',
      nextRelevance: 'additions',
      atomic: false,
      politeRunning: false,
      assertiveRunning: false,
      offRunning: false,
      politeMessages: [],
      assertiveMessages: [],
      offMessages: []
    };

    this.politeInterval = null;
    this.assertiveInterval = null;
    this.offInterval = null;
    this.addedManuallyCount = 0;

    this.setPoliteRelevance = this.setPoliteRelevance.bind(this);
    this.setAssertiveAtomic = this.setAssertiveAtomic.bind(this);
    this.startPolite = this.startPolite.bind(this);
    this.stopPolite = this.stopPolite.bind(this);
    this.removePoliteItem = this.removePoliteItem.bind(this);
    this.startAssertive = this.startAssertive.bind(this);
    this.stopAssertive = this.stopAssertive.bind(this);
    this.addAssertiveMessage = this.addAssertiveMessage.bind(this);
    this.startOff = this.startOff.bind(this);
    this.stopOff = this.stopOff.bind(this);
  }

  setPoliteRelevance () {
    switch (this.state.nextRelevance) {
      case 'additions':
        this.setState({
          relevant: this.state.nextRelevance,
          nextRelevance: 'removals'
        });
        break;
      case 'removals':
        this.setState({
          relevant: this.state.nextRelevance,
          nextRelevance: 'text'
        });
        break;
      case 'text':
        this.setState({
          relevant: this.state.nextRelevance,
          nextRelevance: 'additions text'
        });
        break;
      case 'additions text':
        this.setState({
          relevant: this.state.nextRelevance,
          nextRelevance: 'additions'
        });
        break;
    }
  }

  setAssertiveAtomic () {
    this.setState({
      atomic: !this.state.atomic
    });
  }

  startOff () {
    this.setState({
      offRunning: true
    }, () => {
      let index = 0;
      let messages = [];
      this.offInterval = window.setInterval(() => {
        if (messages.length > 10) {
          messages.shift();
        }
        messages.push(index);
        index++;
        this.setState({
          offMessages: messages
        });
      }, 1250);
    });
  }

  stopOff () {
    this.setState({
      offRunning: false
    }, () => {
      window.clearInterval(this.offInterval);
    });
  }

  startPolite () {
    this.setState({
      politeRunning: true
    }, () => {
      let index = 0;
      let messages = [];
      this.politeInterval = window.setInterval(() => {
        if (index > stateArray.length - 1) {
          index = 0;
        }
        if (messages.length > 10) {
          messages.shift();
        }
        messages.push(stateArray[index]);
        index++;
        this.setState({
          politeMessages: messages
        });
      }, 1000);
    });
  }

  stopPolite () {
    this.setState({
      politeRunning: false
    }, () => {
      window.clearInterval(this.politeInterval);
    });
  }

  removePoliteItem (item) {
    let messages = this.state.politeMessages;
    messages.splice(messages.indexOf(item), 1);
    this.setState({
      politeMessages: messages
    });
  }

  startAssertive () {
    this.setState({
      assertiveRunning: true
    }, () => {
      let index = 0;
      let messages = [];
      this.assertiveInterval = window.setInterval(() => {
        if (index > countryArray.length - 1) {
          index = 0;
        }
        if (messages.length > 10) {
          messages.shift();
        }
        messages.push(countryArray[index]);
        index++;
        this.setState({
          assertiveMessages: messages
        });
      }, 500);
    });
  }

  stopAssertive () {
    this.setState({
      assertiveRunning: false
    }, () => {
      window.clearInterval(this.assertiveInterval);
    });
  }

  addAssertiveMessage () {
    const message = `Added manually ${this.addedManuallyCount}`;
    this.addedManuallyCount++;
    let messages = this.state.assertiveMessages;
    messages.push(message);
    this.setState({
      assertiveMessages: messages
    });
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='text-center'>Live Regions</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-4'>
            <h2>Polite <small>{this.state.relevant}</small></h2>
            <div
              aria-live='polite'
              aria-relevant={this.state.relevant}
              ref='politeRegion'
              className='liveRegion politeRegion'
            >
              <ul className='list-unstyled'>
                {this.state.politeMessages.map((message) => {
                  return (<li key={message} onClick={this.removePoliteItem.bind(null, message)}>{message}</li>);
                })}
              </ul>
            </div>
          </div>
          <div className='col-xs-4'>
            <h2>Assertive <small>{String(this.state.atomic)}</small></h2>
            <div
              aria-live='assertive'
              aria-atomic={this.state.atomic}
              ref='assertiveRegion'
              className='liveRegion assertiveRegion'
            >
              <ul className='list-unstyled'>
                {this.state.assertiveMessages.map((message) => {
                  return (<li key={message}>{message}</li>);
                })}
              </ul>
            </div>
          </div>
          <div className='col-xs-4'>
            <h2>Off</h2>
            <div
              aria-live='off'
              ref='offRegion'
              className='liveRegion offRegion'
            >
              <ul className='list-unstyled'>
                {this.state.offMessages.map((message) => {
                  return (<li key={message}>{message}</li>);
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='row top-space'>
          <div className='col-xs-2'>
            <button className='btn btn-success'type='button' onClick={this.startPolite} disabled={this.state.politeRunning}>Start Polite</button>
          </div>
          <div className='col-xs-2'>
            <button className='btn btn-danger'type='button' onClick={this.stopPolite} disabled={!this.state.politeRunning}>Stop Polite</button>
          </div>
          <div className='col-xs-2'>
            <button className='btn btn-success'type='button' onClick={this.startAssertive} disabled={this.state.assertiveRunning}>Start Assertive</button>
          </div>
          <div className='col-xs-2'>
            <button className='btn btn-danger'type='button' onClick={this.stopAssertive} disabled={!this.state.assertiveRunning}>Stop Assertive</button>
          </div>
          <div className='col-xs-2'>
            <button className='btn btn-success'type='button' onClick={this.startOff} disabled={this.state.offRunning}>Start Off</button>
          </div>
          <div className='col-xs-2'>
            <button className='btn btn-danger'type='button' onClick={this.stopOff} disabled={!this.state.offRunning}>Stop Off</button>
          </div>
        </div>
        <div className='row top-space'>
          <div className='col-xs-6'>
            <button className='btn btn-default'type='button' onClick={this.setPoliteRelevance}>Set aria-relevant to {this.state.nextRelevance}</button>
          </div>
          <div className='col-xs-6'>
            <button className='btn btn-default'type='button' onClick={this.setAssertiveAtomic}>Toggle aria-atomic</button>
            <button className='btn btn-default'type='button' onClick={this.addAssertiveMessage}>Add Assertive Message</button>
          </div>
        </div>
      </div>
    );
  }
}

LiveRegions.displayName = 'LiveRegions';

ReactDOM.render(<LiveRegions />, document.getElementById('main'));
