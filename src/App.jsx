import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
<<<<<<< HEAD
=======

>>>>>>> 2b50e2253d3b9634b282acd1bb61f768184b8867

export default function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
