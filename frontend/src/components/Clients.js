import { Link } from "react-router-dom";

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
            <td>
                <Link to={`/clients/${id}/edit`}
                      className={'btn btn-success mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    Edit
                </Link>
            </td>
            <td>
                <Link to={`/clients/${id}/view`}
                      className={'btn btn-info mr-1'}
                      role='button'
                      aria-pressed='true'
                >
                    View
                </Link>

            </td>
            <td>
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