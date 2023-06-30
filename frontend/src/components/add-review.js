import React, {useState} from "react"
import MovieDataService from '../services/movies'
import { Link, useParams, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AddReview(props) {
    const {id } = useParams()

    let editing = false
    let initialReviewState = ''
    let { state } = useLocation()
    if (state && state.currentReview) {
        editing = true
        initialReviewState = state.currentReview.review
    }

    const [review, setReview] = useState(initialReviewState)
    const [submitted, setSubmitted] = useState(false)

    const saveReview = () => {
        var data = {
            review: review,
            name: props.user.name,
            user_id: props.user.id,
            movie_id: id
        }

        if (editing) {
            data.review_id = state.currentReview._id
            MovieDataService.updateReview(data)
            .then(response => {
                setSubmitted(true)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            MovieDataService.createReview(data)
            .then(response => {
                setSubmitted(true)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
    return (
        <div>
            {
                submitted ? (
                    <div>
                        <h4>Review Submitted Successfully</h4>
                        <Link to={"/movies/" + id}>Back to Movie</Link>
                    </div>
                ):(
                    <Form>
                        <Form.Group>
                            <Form.Label>{editing ? "Edit":"Create"} Review</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={saveReview}>Submit</Button>
                    </Form>
                )
            }
        </div>
    )
}

export default AddReview