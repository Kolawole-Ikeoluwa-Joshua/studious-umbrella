import React from 'react';

const App = ({ comments }) => {


    // map over data fetched (list of comments)
    const renderedComments = comments.map(comment => {
        return <li key={comments.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;

};

export default App;