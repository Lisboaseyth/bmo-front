import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../Components/ProtectedRoutes'
import { DashboardPage } from '../Pages/Dashboard'
import { LoginPage } from '../Pages/LoginPage'
import { NotFound } from '../Pages/NotFound'
import { FormPage } from '../Pages/RegisterPage'
import { LandingPage } from '../Pages/LandingPage'


export const RoutesPages = () => {

  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<FormPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard/:name' element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
