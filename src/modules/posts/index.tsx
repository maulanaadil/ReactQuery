import React from 'react'
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { Post } from '../../models/post'

export default function PostsModule() {
    const queryClient = useQueryClient()
    const { status, data, error, isFetching } = usePosts()
    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === 'loading' ? (
                    <span>Loading....</span>
                ) : status === 'error' ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div className=''>
                            {data.map((post) => (
                                <p className='' key={post.id}>
                                    <a
                                        href={`/posts/${post.id}`}
                                        className={
                                            queryClient.getQueryData([
                                                'posts',
                                                post.id,
                                            ])
                                                ? 'font-bold text-blue-500'
                                                : ''
                                        }
                                    >
                                        {post.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div className=''>
                            {isFetching ? 'Background fetching...' : null}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

function usePosts() {
    return useQuery<Post[], Error>(['posts'], async () => {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return data
    })
}
