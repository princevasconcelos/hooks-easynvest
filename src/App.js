import React, {useState, useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {saveRepos} from './reducers/repos'
import {Link} from 'react-router-dom';
import './App.css';

import {ReposContext} from './contexts/reposContext'

function App({  saveRepos }) {
  const dispatch = useDispatch()
  const user = useSelector(({ user}) => user)
  const repos = useContext(ReposContext)

  console.log(repos)
  useEffect(() => {
    getUserData()
  }, [])

  async function getUserData() {
    const name = 'princevasconcelos'
    const response = await fetch(`https://api.github.com/users/${name}/repos`).then(r => r.json())
    // saveRepos(response)

    dispatch({
      type: 'ADD',
      payload: name
    })
  }

  console.log(user)
  
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h3>Repositories:</h3>
      <Link to="/detalhes">Detalhes</Link>
      {/* <ul>
        {repos && repos.map(({ name, url, id}) => 
          <li key={id}><a href={url}>{name}</a></li>)}
      </ul> */}

    </div>
  );
}

/**
 * Jeito tradicional

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
    repos: state.repos
  }
}

export default connect(mapStateToProps, {
  saveRepos
})(App);
 */

 export default App
