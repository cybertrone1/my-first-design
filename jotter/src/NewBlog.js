import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('');
   const [isPending, setisPending] = useState(false);
   const history = useHistory();
   

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title, body, author}
      setisPending(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(blog)
      }).then(() => {
         console.log('successfully adding to db');
         setisPending(false);
         history.go(-1)
      });
   }

    return ( 
        <nav className="newBlog">
         <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input type="text"
            placeholder="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
             />

            <textarea 
            required
            placeholder="type the body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>author</label>
            <input type="text" 
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
            {!isPending && <button>Save</button>}
            {isPending && <button>Loading...</button>}
         </form>
        </nav>
     );
}
 
export default NewBlog;