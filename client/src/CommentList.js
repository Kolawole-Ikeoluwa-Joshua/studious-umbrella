import React from 'react';

const App = ({ comments }) => {


    // map over data fetched (list of comments)
    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <li key={comments.id}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;

};

export default App;