import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../components/calendar/Calendar'

const MainPage = () => {
    const [userName, setUserName] = useState('')
    useEffect((e) => {
        async function getUser() {
            const response = await fetch(
                `${process.env.REACT_APP_WEBSITE_BACK}`,
                {
                    // credentials 옵션 지정 안하면 프론트에서 접속해도 로그인 실패
                    // credentials : 자격 증명을 포함하여 요청하게 해주는 옵션
                    credentials: 'include',
                }
            )
            const res = await response.json()
            setUserName(res.name)
        }
        getUser()
    })

    const handleClick = async (e) => {
        const response = await fetch(
            `${process.env.REACT_APP_WEBSITE_BACK}/login`,

            {
                credentials: 'include',
            }
        )
        const res = await response.json()
        if (res.success) {
            window.location.reload()
        }
    }

    return (
        <>
            <div>
                {userName ? (
                    <div>
                        <Link to={'/group'}>그룹원 확인</Link>
                        <p>{userName}</p>
                        <button onClick={handleClick}>로그아웃</button>
                    </div>
                ) : (
                    <div>
                        <Link to={'/login'}>로그인</Link>
                        <a href='!#'> / </a>
                        <Link to={'/signup'}>회원가입</Link>
                    </div>
                )}
            </div>
            <Calendar></Calendar>
            {userName ? (
                <button>
                    <Link to={'/planning'}>일정추가</Link>
                </button>
            ) : (
                <p></p>
            )}
        </>
    )
}
// const getUser = async (e) => {

// }
export default MainPage
