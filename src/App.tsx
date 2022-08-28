import { Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Homepage from './pages/home'
import Postspage from './pages/posts'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/posts/*' element={<Postspage />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
