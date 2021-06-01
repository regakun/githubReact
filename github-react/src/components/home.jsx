import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setAccountAsync} from '../store/actions/accountActions'
import Items from './items'

function Home() {
    const [username, setUsername] = useState('')

    const loading = useSelector(state => state.loading).loading
    const accounts = useSelector(state => state.accounts).accounts

    const dispatch = useDispatch()
    const submitForm = (event) => {
        event.preventDefault()
        dispatch(setAccountAsync(username))
    }

    return (
        <div className="App">
        <Container className="pt-3">
            <Row>
                <Col lg="" className="mb-3 p-0">
                    <Form onSubmit={submitForm} method="post">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onInput={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
            {
              loading ? (
                <Col className="loading-container">
                  <div className="loadingio-spinner-double-ring-ywhiujlmgp">
                    <div className="ldio-58jjis25g3a">
                      <div></div>
                      <div></div>
                      <div>
                        <div>
                        </div>
                      </div>
                      <div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
            ) : (
                  accounts.map((element, id) => (
                    <Col lg="3" className="mb-3 p-0" key={id}>
                      <Items data={element} keys="home">
                      </Items>
                    </Col>
                  ))
              )
            }
            </Row>
        </Container>
        </div>
    )
}

export default Home