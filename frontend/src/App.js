import React, {useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AddReview from './components/add-review'
import Movie from './components/movie'
import MoviesList from './components/movies-list'
import Login from './components/login'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {
    const [user, setUser] = useState(null)

    async function login(user=null) {
        setUser(user)
    }
    async function logout() {
        setUser(null)
    }

    return (
        <div className="App">
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand>Movie Review</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Item>
                            <Nav.Link href='/movies'>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {user ? (
                                <Nav.Link onClick={logout}>Logout User</Nav.Link>
                            ):(
                                <Nav.Link href='/login'>Login</Nav.Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route exact path='/' Component={MoviesList}></Route>
                <Route path='/movies' Component={MoviesList}></Route>
                <Route path='/movies/:id/review' element={<AddReview user={user}/>}></Route>
                <Route path='/movies/:id' element={<Movie user={user}/>}></Route>
                <Route path='/login' element={<Login login={login}/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
