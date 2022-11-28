import {Link} from "react-router-dom";

// @todo rename to client 
function Clients({
                     id,
                     index,
                     name,
                     lastname,
                     email,
                     phone,
                     onDelete,
                 }) {

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{name} {lastname}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="d-flex justify-content-between align-items-center">
                <Link to={`/clients/${id}/edit`}
                      className={'btn btn-success mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    Edit
                </Link>
                <Link to={`/clients/${id}/view`}
                      className={'btn btn-info mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    View
                </Link>
                <Link to={`/clients/${id}/addnote`}
                      className={'btn btn-outline-info mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    Add note
                </Link>
                <Link to={`/clients/${id}/usernote`}
                      className={'btn btn-outline-info mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    View notes
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

export default Clients