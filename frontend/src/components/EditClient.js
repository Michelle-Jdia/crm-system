import {useEffect, useState} from "react";
import {withRouter} from "react-router";
import axiosClients from "../config/axiosClients";
import Swal from "sweetalert2";

function EditClient(props) {
    const {id} = props.match.params;
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
            [e.target.name]: e.target.value
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
        updateClient()
    }

    const updateClient = () => {
        axiosClients.put(`/customers/${id}`, client)
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

    useEffect(() => {
        const getClient = () => {
            axiosClients.get(`/customers/${id}`)
                .then(res => {
                    if (res.data.name) {
                        setClient(res.data)
                    } else {
                        console.log('error')
                    }
                })
        };
        getClient();
    }, [id])
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
                <label htmlFor="address">knot</label>
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
                <label htmlFor="address">city</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="address"
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

            <div className="form-group">
                <label htmlFor="ip">ip</label>
                <input
                    type="text"
                    className="form-control"
                    name="ip"
                    placeholder="ip"
                    defaultValue={client.ip}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="language">language</label>
                <input
                    type="text"
                    className="form-control"
                    name="language"
                    placeholder="language"
                    defaultValue={client.language}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="shares">shares</label>
                <input
                    type="number"
                    className="form-control"
                    name="shares"
                    placeholder="shares"
                    defaultValue={client.share}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="note">note</label>
                <input
                    type="text"
                    className="form-control"
                    name="note"
                    placeholder="note"
                    defaultValue={client.note}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">status</label>
                <input
                    type="text"
                    className="form-control"
                    name="status"
                    placeholder="status"
                    defaultValue={client.status}
                    onChange={handleChange}
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
                EDIT USER
            </button>
        </form>
    )
}

export default withRouter(EditClient)