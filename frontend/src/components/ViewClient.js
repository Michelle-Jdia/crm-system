import {useEffect, useState} from "react";
import axiosClients from "../config/axiosClients";


function ViewClient(props) {

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
    const [isOpen, setIsOpen] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        props.history.push('/clients')
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

        <div className={`popup ${isOpen ? 'd-block' : 'd-none'}`}>
            <div className="popup-box text-center p-5">
                <table className="table table-bordered ">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Knot</th>
                        <th scope="col">Postcode</th>
                        <th scope="col">Email</th>
                        <th scope="col">IP address</th>
                        <th scope="col">Language</th>
                        <th scope="col">Friends no</th>
                        <th scope="col">Note</th>
                        <th scope="col">Ads</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{client.name} {client.lastname}</td>
                        <td>{client.phone}</td>
                        <td>{client.city}</td>
                        <td>{client.address}</td>
                        <td>{client.knot ? client.knot : 'knot1'}</td>
                        <td>{client.postcode}</td>
                        <td>{client.email}</td>
                        <td>{client.ip ? client.ip : 'none'}</td>
                        <td>{client.language ? client.language : 'ru'}</td>
                        <td>{client.shares ? client.shares : '0'}</td>
                        <td>{client.note ? client.note : 'nothing'}</td>
                        <td>{client.ads ? 'yes' : 'no'}</td>
                        <td>{client.status ? 'yes' : 'no'}</td>
                    </tr>
                    </tbody>
                </table>
                <input className='btn btn-dark mt-2' type='button' value="ok ok" onClick={togglePopup}/>
            </div>

        </div>
    );
}

export default ViewClient