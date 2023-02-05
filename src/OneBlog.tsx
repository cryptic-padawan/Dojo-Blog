import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const OneBlog = () => {
    const {id} = useParams<{ id:string }>();
    const { data: blog, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users/' + id);

    return ( 
        <div className="blog-list">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <div className="blog-view">
                    <h4>Name: { blog.name }</h4><br/>
                    <p>Username: { blog.username }</p>
                    <p>Email: { blog.email }</p>
                    <p><u>Address: </u><br/>
                            <div className="space">
                                Street: { blog.address.street }<br/>
                                Suite: { blog.address.suite }<br/>
                                City: { blog.address.city }<br/>
                                Zipcode: { blog.address.zipcode }
                            </div></p>
                    <p>Phone No.: { blog.phone }</p>
                    <p>Website: { blog.website }</p>
                    <p><u>Company: </u><br/>
                            <div className="space">
                                Name: { blog.company.name }<br/>
                                Catch Phrase: { blog.company.catchPhrase }<br/>
                                Bs: { blog.company.bs }<br/>
                            </div></p>
                 </div>
            ) }
        </div>
     );
}
 
export default OneBlog;