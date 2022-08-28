import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../../models/post'

type PostId = {
    postId: string
}

export default function PostModule() {
    const { postId } = useParams<keyof PostId>() as PostId
    const { status, data, error, isFetching } = usePost(postId)

    return (
        <div>
            <div>
                <a href='/posts'>Back</a>
            </div>
            {!postId || status === 'loading' ? (
                'Loading...'
            ) : status === 'error' ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        <p>{data.body}</p>
                    </div>
                    <div>{isFetching ? 'Background Updating...' : ' '}</div>
                </>
            )}
        </div>
    )
}

function usePost(postId: string) {
    return useQuery<Post, Error>(['posts', postId], () => getPostById(postId), {
        enabled: !!postId,
    })
}

async function getPostById(id: string): Promise<Post> {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return data
}
