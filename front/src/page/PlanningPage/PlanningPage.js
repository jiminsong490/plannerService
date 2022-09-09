import axios from 'axios'
import React, { useState } from 'react'
import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'

const PlanningPage = () => {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const location = useLocation()
    const dateObject = location.state?.date
    const year = format(dateObject, 'yyyy')
    const month = format(dateObject, 'M')
    const day = format(dateObject, 'dd')
    const handleStartChange = (e) => {
        e.preventDefault()
        setStart(e.target.value)
    }
    const handleEndChange = (e) => {
        e.preventDefault()
        setEnd(e.target.value)
    }

    const handleSubmit = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_WEBSITE_BACK}/addPlans`,
            {
                start: start,
                end: end,
            }
        )
    }

    return (
        <>
            <header>
                <h1>
                    {year}년 {month} 월{day}일
                </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        onChange={handleStartChange}
                        value={start}
                        placeholder='시작 시간'
                    ></input>
                </div>
                <div>
                    <input
                        onChange={handleEndChange}
                        value={end}
                        placeholder='종료 시간'
                    ></input>
                </div>
                <button type='submit'>제출</button>
            </form>
        </>
    )
}

export default PlanningPage
