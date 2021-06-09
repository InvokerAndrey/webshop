import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()

        if(keyword){
            history.push(`/?keyword=${keyword}&?page=1`)
        }else{
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <Form onSubmit={submitHandler} inline className="d-flex">
            <Form.Control
                type="text"
                name="q"
                placeholder="Search"
                onChange={ (e) => setKeyword(e.target.value)}
                className="mr-sm-2 ml-sm-5"
            />

            <Button
                type="submit"
                className="p-2"
                variant="outline-light"
            >
                <i className="fas fa-search"></i>
            </Button>
        </Form>
    )
}

export default SearchBox
