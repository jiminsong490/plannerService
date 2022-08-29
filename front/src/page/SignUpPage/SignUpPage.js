import React, { Component } from 'react'
import styled from 'styled-components'

class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        tel: '',
    }
    handleChange = (e) => {
        console.log(e.target.value,'change')
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target,'submit')
        // const res = await fetch('', {
        //     method: 'post',
        // })
    }
    render() {
        return (
            <>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <StyledInput
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    ></StyledInput>
                    <StyledInput
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    ></StyledInput>
                    <StyledInput
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></StyledInput>
                    <StyledInput
                        type='text'
                        name='tel'
                        placeholder='phone number'
                        pattern='[0-9]+'
                        value={this.state.tel}
                        onChange={this.handleChange}
                    ></StyledInput>
                    <button type='submin'>회원가입</button>
                </form>
            </>
        )
    }
}

const StyledInput = styled.input`
    display: block;
    width: 200px;
    height: 20px;
    margin-bottom: 10px;
`
export default SignUpPage