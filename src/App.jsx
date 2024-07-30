import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home.jsx'
import AboutPage from './pages/About/About.jsx'
import ContactPage from './pages/Contact/Contact.jsx'
import PostsPage from './pages/Posts/Posts.jsx'
import ProjectsPage from './pages/Projects/Projects.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route index path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
