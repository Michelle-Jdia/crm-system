import React, {useEffect, useState} from "react";
import axiosClients from "../config/axiosClients";
import Notes from "./Notes";

function UserNotes(props) {
    const {id} = props.match.params;
    const [notes, setNotes] = useState({})

    const getNotes = () => {
        axiosClients.get(`/customers/${id}/note`)
            .then(res => {
                if (res.data.name) {
                    setNotes(res.data.note)
                } else {
                    console.log('error')
                }
            })
    };

    const renderNotes = () => {
        return (
            <tbody>
            {
                notes.map((note, index) => (
                    <Notes
                        key={index}
                        noteDate={note.noteDate}
                        noteAuthor={note.noteAuthor}
                        textNote={note.textNote}
                    />
                ))
            }
            </tbody>
        )
    }


    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [id]);

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Author</th>
                <th scope="col">Note</th>
                <th scope="col">options</th>
            </tr>
            </thead>
            {renderNotes()}
        </table>
    )
}

export default UserNotes