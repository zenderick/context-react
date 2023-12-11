import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import LayoutPrivate from "../layout/LayoutPrivate";
import DashBoard from "../pages/DashBoard";


export const router = createBrowserRouter ([
    {
        path:'/',
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/dashboard',
                element: <LayoutPrivate/>,
                children: [
                    {
                        index: true,
                        element: <DashBoard/>
                    }
                ]
            }
        ]
    }
])
