import ReactDOM from 'react-dom/client'

import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import App from './App.tsx'
import { About } from './components/about.tsx'
import { Projects } from './components/projects.tsx'
import { Experience } from './components/experience.tsx'
import { Contact } from './components/contact.tsx'
import './index.css'

const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
