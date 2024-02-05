import { About, Connect, Home, Main, Skills, Projects } from "../pages";

export const routes = [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/Home',
                element: <Home />,
            },
            
            {
                path: '/About',
                element: <About />,
            },
        
            {
                path: '/Connect',
                element: <Connect />,
            },

            {
                path: '/Skills',
                element: <Skills />,
            },

            {
                path: '/Projects',
                element: <Projects />,
            },
        ]
    },
];

