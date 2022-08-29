import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './page/MainPage/MainPage'
import LoginPage from './page/LoginPage/LoginPage'
import SignUpPage from './page/SignUpPage/SignUpPage'
import PlanningPage from './page/PlanningPage/PlanningPage'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/signup' element={<SignUpPage />}></Route>
                    <Route path='/planning' element={<PlanningPage />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
