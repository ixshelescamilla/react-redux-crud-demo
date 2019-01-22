import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import AllPost from './Post/AllPost';
import PostForm from './Post/PostForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <img src={logo} alt='' />
          <h2 className='center'>React-Redux Demo</h2>
          <img src={logo} alt='' />
        </div>
        <PostForm />
        {this.props.posts.length !== 0 ? <AllPost /> : <p style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', color: 'red' }}>No posts yet</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('All Post - State:: ', state);

  return {
    posts: state
  }
}

export default connect(mapStateToProps)(App);
