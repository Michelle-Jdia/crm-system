import {useEffect, useState} from 'react'
import axiosClients from "../config/axiosClients";
import Swal from "sweetalert2";
import {useHistory} from 'react-router'

function AddNote(props) {
    const {id} = props.match.params;
    const [notes, setNotes] = useState({
        noteText: '',
        type: ''
    })
    const history = useHistory()

    const handleChange = (e) => {
        setNotes({
            ...notes,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        saveNote()
    }


    const saveNote = () => {
        axiosClients.post(`/customers/${id}/note`, notes)
            .then(res => {
                if (res.data.code === 11000) {
                    Swal.fire(
                        'wowowowow',
                        'error Panix 😱'
                    )
                    console.log(res.data.code)
                    console.log(res.data)
                    console.log(res)
                } else {
                    Swal.fire(
                        'user was updated thanks god',
                        res.data.message,
                        'success!'
                    )
                    props.history.push('/clients')
                    history.go(0)
                }
            })
    }

    const getNotes = () => {
        axiosClients.get(`/customers/${id}`)
            .then(res => {
                if (res.data.note) {
                    setNotes(res.data.note)
                } else {
                    console.log('error')

                }
                console.log(res)
                console.log(res.data)
            })
    };

    useEffect(() => {
        getNotes();
    }, [])
    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
                <label htmlFor="city">Note text</label>
                <input
                    type="textarea"
                    className="form-control"
                    name="noteText"
                    placeholder="note"
                    defaultValue={notes.noteText}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="knot">Type</label>
                <select className="form-select"
                        aria-label="knot"
                        onChange={handleChange}
                        defaultValue={notes.type}
                        name="knot"
                        required>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <button
                type="submit"
                className="btn btn-primary col-12 col-md-2"
                onChange={handleSubmit}
            >
                ADD NOTE
            </button>
        </form>
    )
}

export default AddNote