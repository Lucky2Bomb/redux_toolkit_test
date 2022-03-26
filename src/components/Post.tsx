import React from 'react';
import { PostModel } from './../models/post';

interface PostProps {
    post: PostModel;
    remove?: (post: PostModel) => void;
    update?: (post: PostModel) => void;
}

function Post({ post, remove, update }: PostProps) {

    const onUpdateHandler = update ? () => {
        const title = prompt("title", post.title) || post.title;
        const body = prompt("title", post.body) || post.body;
        update({ ...post, title, body })
    } : undefined;

    const onRemoveHandler = remove ? () => {
        remove(post);
    } : undefined;

    return (
        <div>
            <h3>#{post.id} {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={onUpdateHandler}>edit</button>
            <button onClick={onRemoveHandler} style={{ backgroundColor: "#cc4444" }}>delete</button>
            <hr />
        </div>
    );
}

export default Post;