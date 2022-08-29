import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../components/calendar/Calendar'

const MainPage = () => {
    return (
        <>
            <div>
                <div>
                    <Link to={'/planning'}>팀원 확인</Link>
                </div>
                <Link to={'/login'}>로그인</Link>
                <a href='!#'> / </a>
                <Link to={'/signup'}>회원가입</Link>
            </div>
            <Calendar></Calendar>
        </>
    )
}

export default MainPage
