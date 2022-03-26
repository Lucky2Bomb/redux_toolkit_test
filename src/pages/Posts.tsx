import React from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Post from '../components/Post';
import { postAPI } from './../services/PostService';
import { PostModel } from './../models/post';

function Posts() {
    const { data, error, isError, isLoading } = postAPI.useFetchPostsQuery(10);
    const [createPost] = postAPI.useCreatePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    const err = isError && <Error error={error} />;
    const loader = isLoading && <Loader />;
    const postList = data?.map(
        (post) => <Post
            key={post.id + post.title}
            post={post}
            remove={(post: PostModel) => deletePost(post)}
            update={(post: PostModel) => updatePost(post)}
        />);


    const handleCreatePost = async () => {
        const title = prompt();
        const body = prompt();
        await createPost({ title, body } as PostModel);
    }

    return (
        <div>
            <button onClick={handleCreatePost}>new post</button>
            {err}
            {loader}
            {postList}
        </div>
    );
}

export default Posts;