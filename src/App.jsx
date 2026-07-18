import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './authContext.jsx'
import ProjectRoutes from './Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>

      <AuthProvider>
        <Router>
          <ProjectRoutes />
        </Router>
      </AuthProvider>


    </>
  )
}

export default App