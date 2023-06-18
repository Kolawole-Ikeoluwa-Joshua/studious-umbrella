import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = ({ postId }) => {
    // state
    const [comments, setComments] = useState([]);

    // function to fetch data
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    // call function
    useEffect(() => {
        fetchData();

    }, []);

    // map over data fetched (list of comments)
    const renderedComments = comments.map(comment => {
        return <li key={comments.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;

};

export default App;