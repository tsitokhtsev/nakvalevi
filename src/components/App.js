import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from 'components/Header'
import Container from 'components/Container'
import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
import About from '../pages/About'
import Author from '../pages/Author'
import Writing from '../pages/Writing'
import Footer from './Footer'

const App = () => {

  return (
    <div className="app">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/:authorName" element={<Author />} />
          <Route path="/:authorName/:writingName" element={<Writing />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App
