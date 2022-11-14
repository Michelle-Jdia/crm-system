import {useState} from 'react'
import axiosClients from "../config/axiosClients";
import {withRouter} from "react-router";
import Swal from "sweetalert2";


function AddClient(props) {
    const [client, setClient] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        knot: '',
        city: '',
        address: '',
        postcode: '',
        ip: '',
        language: '',
        shares: '',
        ads: false,
        note: '',
        status: ''
    })

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        })
    }

    const handleChkbox = (e) => {
        setClient({
            ...client,
            ads: e.target.checked
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        saveClient()
    }


    const saveClient = () => {
        axiosClients.post('/customers', client)
            .then(res => {
                if (res.data.code === 11000) {
                    Swal.fire(
                        'wowowowow',
                        `email is used: ${client.email}`,
                        'error Panix 😱'
                    )
                } else {
                    Swal.fire(
                        'user was updated thanks god',
                        res.data.message,
                        'success!'
                    )
                    props.history.push('/clients')
                }
            })
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    defaultValue={client.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="lastname">lastname</label>
                <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    placeholder="lastname"
                    defaultValue={client.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="email"
                    defaultValue={client.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="phone">phone</label>
                <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="phone"
                    defaultValue={client.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="knot">knot</label>
                <select className="form-select"
                        aria-label="knot"
                        onChange={handleChange}
                        defaultValue={client.knot}
                        name="knot"
                        required>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="city">city</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="city"
                    defaultValue={client.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="address">address</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="address"
                    defaultValue={client.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="postcode">postcode</label>
                <input
                    type="number"
                    className="form-control"
                    name="postcode"
                    placeholder="postcode"
                    defaultValue={client.postcode}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group col-12 ">
                <div className="form-check ">

                    <input className="form-check-input"
                           type="checkbox"
                           name="ads"
                           onChange={handleChkbox}
                           defaultValue={client.ads}

                    />
                    <label className="form-check-label" htmlFor="ads-emil">
                        ads-emil
                    </label>
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary col-12 col-md-2"
                onChange={handleSubmit}
            >
                ADD USER
            </button>
        </form>
    )
}

export default withRouter(AddClient)