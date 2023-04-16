import React from 'react'
import {  useRoutes } from 'react-router'
import Home from '../../page/home'
import { Outlet } from 'react-router'
import {Content} from "../../page/following/Content";
import AddStory, {Manager} from "../../components/Manager";
const RootRoute = () => {
    return useRoutes([
        {
            path: '',
            element: <Outlet />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'following/:id',
                    element: <Content />
                },
                {
                    path: 'manager',
                    element: <AddStory />
                },
            ]
        }
    ])
}

export default RootRoute
