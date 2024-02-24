import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Form, Row, Button, Spinner } from 'react-bootstrap'
import { addUserAction } from '../../actions'

function UserRegisterPage() {

    const dispatch = useDispatch()
    const { preloader } = useSelector(state => state.titleReducer)
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const regName = /^[A-Za-z\s]+$/
    const regLastName = /^[A-Za-z\s]+$/
    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const addUser = (event) => {
        event.preventDefault()

        if (!user.first_name || !user.last_name || !user.email) {
            alert('Заполните все поля')
            return
        }
        if (!regName.test(user.first_name)) {
            alert('Имя должно содержать только буквы!')
            return
        }
        if (!regLastName.test(user.last_name)) {
            alert('Фамилия должна содержать только буквы!')
            return
        }
        if (!regEmail.test(user.email)) {
            alert('Адрес электронной почты некорректен!')
            return
        }

        dispatch(addUserAction(user))
    }

    return (
        <Container>
            <h1>Registration</h1>
            {
                preloader
                    ?
                    <Spinner animation="grow" variant="primary" />
                    :
                    <Form onSubmit={addUser}>
                        <Row>
                            <Col>
                                <Form.Control
                                    placeholder="First name"
                                    type='text'
                                    name='first_name'
                                    onChange={formValue}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Last name"
                                    type='text'
                                    name='last_name'
                                    onChange={formValue}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Email"
                                    type='text'
                                    name='email'
                                    onChange={formValue}
                                />
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </Form>
            }
        </Container>
    )
}

export default UserRegisterPage