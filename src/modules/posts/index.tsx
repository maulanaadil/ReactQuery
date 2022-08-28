import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function PostsModule() {
    return <div>PostsModule</div>
}

function usePosts() {
    return useQuery(['posts'], async () => {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return data
    })
}
