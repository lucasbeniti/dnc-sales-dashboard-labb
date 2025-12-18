import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  HomePage,
  LeadsPage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
} from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
