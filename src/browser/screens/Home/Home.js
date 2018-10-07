import React, { Component } from 'react';
import { func, array } from 'prop-types';
import logo from '../../assets/logo.svg';
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
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
                  <img src={user.avatar} alt={`${user.avatar}`}/>
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

