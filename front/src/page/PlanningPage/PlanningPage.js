import axios from 'axios'
import React from 'react'

const PlanningPage = () => {
    const handleClick = async () => {
        const a = await axios.post(
            `${process.env.REACT_APP_WEBSITE_BACK}/addPlans`
        )
    }

    return (
        <>
            <p>Planning</p>
        </>
    )
}

export default PlanningPage
