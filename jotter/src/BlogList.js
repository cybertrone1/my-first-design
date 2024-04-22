const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <a href={'/blogs/'+blog.id}>
                            <h3> { blog.title } </h3>
                            <p>written by: { blog.author } </p>
                        </a>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;