import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Clients from "./Clients";
import EditClient from "./EditClient";
import AddClient from "./AddClient";
import AddNote from "./AddNote";
import axiosClients from "../config/axiosClients";
import ViewClient from "./ViewClient";
import UserNotes from "./UserNotes";

function App() {

    const [clients, setClients] = useState([])


    const getClients = async () => {
        const response = await axiosClients.get('/customers');
        setClients(response.data)
    }

    const handleDelete = (id) => {
        axiosClients.delete(`/customers/${id}`)
            .then(res => {
                if (res.status !== 200) {
                    console.log('error')
                } else {
                    getClients()
                }
            })
    }

    useEffect(() => {
        getClients();
    }, [])

    //get set clients
    
    // @todo remove useless comments
    // @todo pass a client object to the [<Client client={client}></Client>] like so
    const renderClients = () => {
        return (
            <tbody>
            {
                clients.map((client, index) => (
                    <Clients
                        key={index}
                        index={index}
                        id={client._id}
                        name={client.name}
                        lastname={client.lastname}
                        email={client.email}
                        phone={client.phone}
                        knot={client.knot}
                        city={client.city}
                        address={client.address}
                        postcode={client.postcode}
                        status={client.status}
                        ip={client.ip}
                        language={client.language}
                        shares={client.shares}
                        ads={client.ads}
                        onDelete={handleDelete}
                    />
                ))
            }
            </tbody>
        )
    }


    return (

        <div className="container-fluid">
            <Navbar/>
            <Switch>
                <Route exact path={'/'}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">email</th>
                            <th scope="col">options</th>
                        </tr>
                        </thead>
                        {renderClients()}
                    </table>
                </Route>

                <Route exact path={'/clients'}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">options</th>
                        </tr>
                        </thead>
                        {renderClients()}
                    </table>
                </Route>

                <Route exact path={'/clients/new'} component={AddClient}/>
                <Route exact path='/clients/:id/edit' component={EditClient}/>
                <Route exact path='/clients/:id/view' component={ViewClient}/>
                <Route exact path='/clients/:id/addnote' component={AddNote}/>
                <Route exact path='/clients/:id/usernote' component={UserNotes}/>
            </Switch>
        </div>

    );
}

export default App;
