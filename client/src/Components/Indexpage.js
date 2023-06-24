import React,{useEffect, useState } from "react";
import Post from "./Post";

export default function Indexpage(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://myblog-api-bc6b.onrender.com/post').then(response =>{
            response.json().then(posts =>{
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    );
}