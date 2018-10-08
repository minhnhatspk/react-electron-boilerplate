import React, { Component } from 'react';
import { func, array } from 'prop-types';
import logo from '../../assets/logo.svg';
import './Home.scss';

const { ipcRenderer } = window.require('electron');

class Home extends Component {
  componentWillReceiveProps(nextProps) {
    const { users } = nextProps;
    if (!!users[0]) {
      ipcRenderer.send('onUserLoaded', users);
    }
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  deleteUser(userId) {
    // Do somehthing
  }

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="users">
            {
              users.map(user => (
                <div key={user.id}>
                  <p>name {user.first_name}</p>
                  <img src={user.avatar} alt={`${user.avatar}`} />
                  <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                </div>
              ))
            }
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
Home.propTypes = {
  users: array.isRequired,
  getUsers: func.isRequired,
};

export default Home;

