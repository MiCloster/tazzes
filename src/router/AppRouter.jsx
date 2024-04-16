import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";

import React from 'react'
import CategoryPage from "../pages/category/[id]";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/*' element = {<Navigate to = "/home"/>} />
        <Route path="/category/:id" element={<CategoryPage/>} />
    </Routes>
  )
}
