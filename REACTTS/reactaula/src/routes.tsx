import { createBrowserRouter } from 'react-router';

import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { Contato } from './pages/contato';
import { Produto } from './pages/produto';
import { Erro } from './pages/erro';
import { Layout } from './components/layout'

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/sobre",
                element: <Sobre/>
            },
            {
                path: "/contato",
                element: <Contato/>
            },
            {
                path: "/produto/:id",
                element: <Produto/>
            },
            {
                path: "*",
                element: <Erro/>
            }
        ]
    }
])

export { router };