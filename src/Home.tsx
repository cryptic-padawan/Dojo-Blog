import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users',{
        method: "GET"
    });
    
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} tittle="All Blogs!" /> }
        </div>
     );
}
 
export default Home;

