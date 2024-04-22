import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, ispending, error } = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    const handleDelete =() => {
        fetch('http://localhost:8000/blogs/'+ id, {
            method: 'DELETE'
        }).then(() => {
            history.go(-1);
        })
    }
  return ( 
    <div className="blog-details">
        {ispending && <div>loading...</div> }
        {error && <div className="error-tab"> { error } </div>}
        {blog && (
            <article>
                <h2> {blog.title} </h2>
                <h3>written by { blog.author } </h3>
                <p> { blog.body } </p>
                <button onClick={handleDelete}>delete</button>
            </article>
        )}
    </div>
   );
}
 
export default BlogDetails;