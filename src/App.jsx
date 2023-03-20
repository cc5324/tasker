import { useState } from 'react'
import './App.css'
import AuthButton from './AuthButton'

function App() {
  const [count, setCount] = useState(0);

  // let getTokenResult = await axios({
  //     method: 'post',
  //     url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
  //     headers: {
  //     accept: 'application/json'
  //   }
  // });

  return (
    <div className="App">
      <h1>Click This</h1>
      <AuthButton></AuthButton>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
