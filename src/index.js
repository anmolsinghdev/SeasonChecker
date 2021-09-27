import React from 'react';
import reactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <ErrorPage errorMessage={this.state.errorMessage} />
        </div>
      );
    }
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner message="Please Accpet The Location Request.." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

reactDom.render(<App />, document.querySelector('#root'));
