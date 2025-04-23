import './css/blogs.css';
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <h2>{error}</h2>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;