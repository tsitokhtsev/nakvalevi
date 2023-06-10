import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import Container from 'components/Container'
import Home from 'pages/Home'
import WritingsList from 'pages/WritingsList'
import About from 'pages/About'
import Author from 'pages/Author'
import Writing from 'pages/Writing'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<WritingsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/author/:authorId" element={<Author />} />
          <Route path="/writing/:writingId" element={<Writing />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App
