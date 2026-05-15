import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function NewsDetail () {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect (() => {
        fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
            .then (res => res.json())
            .then (data => {
                setPost(data.blog);
            })
    }, [id]);

    if (!post) return <p> Loading... </p>

    return (
        <div>
            <h2> {post.title} </h2>
            <img src = {post.photo_url} width = "400"/>
            <p> {post.description} </p>
            <p> {post.content} </p>
        </div>
    );
}

export default NewsDetail