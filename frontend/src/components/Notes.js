import {Link} from "react-router-dom";

function Notes({
                   noteDate,
                   noteAuthor,
                   textNote,
                   noteType,
                   onDelete,
                   id,
               }) {

    return (
        <tr>
            <th scope="row">{noteDate}</th>
            <td>{noteAuthor}</td>
            <td>{textNote}</td>
            <td>{noteType}</td>
            <td className="d-flex justify-content-between align-items-center">
                <Link to={`/clients/${id}/noteedit`}
                      className={'btn btn-success mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    Edit
                </Link>
                <button className='btn btn-danger' type='button' onClick={() => {
                    onDelete(id);
                }}>
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default Notes