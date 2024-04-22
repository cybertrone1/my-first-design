import BlogList from './BlogList';
import useFetch from './useFetch';
const Homee = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            <h3>
                Home Page
            </h3>
            { error && <div className="error-tab"> { error } </div> }
            { isPending && <div> Loading... </div> }
            { blogs && < BlogList blogs = {blogs} /> }
        </div>
     );
}
 
export default Homee;