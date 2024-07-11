/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [Likes, setLikes] = useState(0)
  
  function handleClick(){
            setLikes (Likes +1 )
        }

  return (
              <div>
              <Header name = "Patricia" />
              <button onClick = {handleClick}> LIKE ({Likes}) </button>
              </div>
  )
}

export default App
