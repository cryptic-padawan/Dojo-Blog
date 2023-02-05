import React, { FC } from 'react';
import { Link } from 'react-router-dom';
type Name = boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
type UserName = string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal;


const BlogList: FC<any> = ({ blogs, tittle }) => {

    return ( 
        <div className="blog-list">
            <h2>{ tittle }</h2>
            {blogs.map((blog: { id: React.Key; name: Name; username: UserName; }) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration:"none"}}>
                        <h2>{ blog.name }</h2>
                        <p style={{fontFamily:"cursive"}}>Username: { blog.username }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;