import React from 'react'
import Landing from './components/Landing'

import Chatbox from './components/Chatbox'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chatbox />} />
      </Routes>
    </Router>
  )
}

export default App