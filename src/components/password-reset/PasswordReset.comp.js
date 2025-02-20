import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

export const ResetPassword = ({handleOnResetSubmit,handleOnChange, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                    
                    <Button type="submit">Reset Password</Button>
                </Form>
                <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                <a href='#!' onClick={()=>formSwitcher('login')}>Login Now</a>
                </Col>

            </Row>

        </Container>
    );
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};
