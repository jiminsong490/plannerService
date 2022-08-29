import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
    const handleSubmit = async () => {
        // const res = await fetch(`${process.env.REACT_APP_WEBSITE}/login`, {
        //     method: 'post',
        // })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <StyledInput type='email' placeholder='email'></StyledInput>
                <StyledInput
                    type='password'
                    placeholder='password'
                ></StyledInput>
                <button type='submit'>로그인</button>
            </form>
        </>
    )
}
const StyledInput = styled.input`
    display: block;
    width: 200px;
    height: 20px;
    margin-bottom: 10px;
`
export default LoginPage
