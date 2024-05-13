
import { Outlet } from 'react-router-dom';

import './App.css'
import Header from "./components/Header"
function App() {


  return (
    <>

      {/* Header */}
      <Header />
      <Outlet />

      <footer>
        <a href="https://github.com/Kainoazooyork">Github</a>
      </footer>
    </>
  )
}

export default App
