import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {selectAccount} from '../store/actions/accountActions'
import {
    useHistory,
    useLocation,
    Redirect
  } from "react-router-dom";


function Items(props) {
    let history = useHistory()
    const dispatch = useDispatch()
    function viewDetails () {
        dispatch(selectAccount(props.data))
        history.push(`/${props.data.login}/repositories`)
      }

    return (
        <Col lg="12">
            <Card >
                <Card.Img variant="top" src={props.data.avatar_url} />
                <Card.Body>
                    <Card.Title>{props.data.login}</Card.Title>
                    <Button variant="primary" onClick={() => viewDetails()}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Items
