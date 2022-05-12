import logo from './logo.svg';
import './App.css';

import {Auth} from 'aws-amplify'

function App() {

  async function checkUser(){
    const user = await Auth.currentAuthenticatedUser();
    console.log("User " , user);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button onClick={()=> Auth.federatedSignIn({provider:"Google"})}>Sign in with Google</button>
        <button onClick={checkUser}>Check User</button>
      </header>
    </div>
  );
}

export default App;
