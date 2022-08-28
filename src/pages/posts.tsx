import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostModule, PostsModule } from '../modules'

export default function Postspage() {
    return (
        <Routes>
            <Route index element={<PostsModule />} />
            <Route path=':id' element={<PostModule />} />
        </Routes>
    )
}
