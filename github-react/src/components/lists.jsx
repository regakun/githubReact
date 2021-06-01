import { Col, Container, Row, Button } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setRepositoriesAsync} from '../store/actions/repositoryActions'
import {
    useParams
} from 'react-router-dom'

function List() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading).loading
    const repositories = useSelector(state => state.repositories).repositories
    let {username} = useParams()
    useEffect(() => {
        dispatch(setRepositoriesAsync(username))
      }, [])
      console.log(repositories)

return (
    <div className="App">
      <Container className="pt-3">
        <Row>
            {
                repositories.map((element, id) => (
                <Col lg="12" className="repositories mb-3 p-0 border border-primary" key={id}>
                    {/* <Items data={element} keys="home">
                    </Items> */}
                        <div className="content-repositories">
                            <a href={`https://github.com/${element.full_name}`}>
                                <h4>
                                    {element.name}
                                </h4>
                            </a>
                            {element.full_name}
                        </div>
                </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default List