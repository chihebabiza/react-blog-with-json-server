import { useState } from 'react';
import './css/form.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('chiheb');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added');
                setIsPending(false);
                // history.go(-1);
                history.push('/');
            })
    }

    return (
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label >Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="chiheb">chiheb</option>
                    <option value="aissa">aissa</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;