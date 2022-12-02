import { Link } from "react-router-dom";

export default function PostButtonControl({ show, id, onDelete }) {
  return (
    show && (
      <div className="post-button">
        <button className="ui button">
          <Link to={`/showcase/${id}/edit`}>Edit</Link>
        </button>
        <button className="ui button" onClick={onDelete}>
          Delete
        </button>
      </div>
    )
  );
}
