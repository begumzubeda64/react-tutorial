import React, { useContext, useState } from 'react';
import sharedContext from './context';

const Parent = () => {
    const [ blog, setBlog ] = useState({
        React: {
            post: "Learn useContext Hooks",
            author: "Charles Jamei"
        },
        GraphQL: {
            post: "Learn GraphQL Mutations",
            author: "Anna Karlos"
        }
    });

    return (
        <>
            <sharedContext.Provider value={[blog, setBlog]}>
                <Child />
            </sharedContext.Provider>
        </>
    );
}

const Child = () => {
    return (
        <>
            <GChild1 />
            <GChild2 />
        </>
    );
}

const GChild2 = () => {
    const [blog] = useContext(sharedContext);

    return (
        <>
            <h3>React Blog Details</h3>
            <p>Topic: {blog.React.post}</p>
            <p>Author: {blog.React.author}</p>
        </>
    );
}

const obj = {
    React: {
        post: "New useContext Hooks",
        author: "Ken Adams"
    },
    GraphQL: {
        post: "New GraphQL",
        author: "Annie Marliey"
    }
}

const GChild1 = () => {
    const [blog, setBlog] = useContext(sharedContext);

    return (
        <>
            <h3>GraphQL Blog Details</h3>
            <p>Topic: {blog.GraphQL.post}</p>
            <p>Author: {blog.GraphQL.author}</p>
            <button onClick={() => setBlog(obj)}>Change</button>
        </>
    );
}

export default Parent;