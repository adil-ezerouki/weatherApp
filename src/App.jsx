import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className='app d-flex flex-column'>
        <NavBar />
        <Dashboard />
    </div>
  )
}

export default App
