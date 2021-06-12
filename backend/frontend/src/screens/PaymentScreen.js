import React, { useState, useEffect } from 'react'
import { Col, Form, Button, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function PaymentScreen({history}) {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if(!shippingAddress.address){
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <ProgressBar now={65} />
            <CheckoutSteps step1 step2 step3 />
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select payment method</Form.Label>
                    <Col>
                        <Form.Check
                        type="radio"
                        label="PayPal or Credit card"
                        id="paypal"
                        name="paymentMethod"
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary" className="my-3">Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
