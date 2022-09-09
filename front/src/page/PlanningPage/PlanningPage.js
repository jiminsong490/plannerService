import axios from 'axios'
import React from 'react'
import { format, parseISO } from 'date-fns'
import { useLocation } from 'react-router-dom'

const PlanningPage = () => {
    const location = useLocation()
    const dateObject = location.state?.date
    const year = format(dateObject, 'yyyy')
    const month = format(dateObject, 'M')
    const day = format(dateObject, 'dd')
    const a = dateObject.toString()
    const handleClick = async () => {
        const a = await axios.post(
            `${process.env.REACT_APP_WEBSITE_BACK}/addPlans`
        )
    }

    return (
        <>
            {dateObject ? (
                <h1>
                    {year}년 {month} 월{day}일
                </h1>
            ) : (
                <p>Planning</p>
            )}
        </>
    )
}

export default PlanningPage
