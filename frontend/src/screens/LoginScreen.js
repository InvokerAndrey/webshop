import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


function LoginScreen({location, history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo } = userLogin

    // if user is logged in - redirect him from this page
    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>

            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        value={email}   
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password" className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="my-2">Sign In</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New money spender? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign Up</Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen
