import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

export const LoginForm = ({handleOnSubmit,handleOnChange, formSwitcher,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        placeholder="Password"
                        value={pass} 
                        required
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                <a href='#!' onClick={() => formSwitcher('rest')}>Forget Password?</a>
                </Col>

            </Row>

        </Container>
    );
};

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired, 
    pass: PropTypes.string.isRequired,
};
