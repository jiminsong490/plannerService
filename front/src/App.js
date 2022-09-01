import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './page/MainPage/MainPage'
import LoginPage from './page/LoginPage/LoginPage'
import SignUpPage from './page/SignUpPage/SignUpPage'
import PlanningPage from './page/PlanningPage/PlanningPage'
import Redirect from './components/redirect/Redirect'
import GroupPage from './page/GroupPage/GroupPage'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/signup' element={<SignUpPage />}></Route>
                    <Route path='/planning' element={<PlanningPage />}></Route>
                    <Route path='/group' element={<GroupPage />}></Route>
                    <Route
                        path='/google/callback'
                        element={<Redirect />}
                    ></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
