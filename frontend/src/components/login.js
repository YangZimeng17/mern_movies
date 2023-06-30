import React, {useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

function Login(props) {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate();
    const login = () => {
        props.login({name:name, id:id})
        navigate('/')
    }
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"    
                        placeholder="Enter username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>Submit</Button>
            </Form>
        </div>
    )
}

export default Login