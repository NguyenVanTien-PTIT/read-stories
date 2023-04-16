import React from 'react'
import { Outlet } from 'react-router'
const AppRoute = () => {
    return {
            path: '',
            element,
            children: [
                {
                    path:'app',
                    element: <Outlet />,
                    children: [
                        {
                            path: '',
                            element: <Outlet />,
                        },                                       
                    ]
                }
            ]
        }
}

export default AppRoute