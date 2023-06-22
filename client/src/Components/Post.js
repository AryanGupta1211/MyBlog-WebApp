import {Link} from "react-router-dom";
import { format } from "date-fns";

export default function Post({_id, title, summary, cover, content, createdAt, author }) {
  // Use date-fns to format the createdAt prop as a readable date and time
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
        <img
          src={'http://localhost:4000/'+ cover}
          alt=""
        />
        </Link>
      </div>
      <div className="texts">
      <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
      </Link>  
        <p className="info">
          {/* Display the author and formatted date and time */}
          <a className="author">{author.username}</a>
          <time>{formattedDate}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
