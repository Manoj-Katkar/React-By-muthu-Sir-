import React from 'react'
import {useRoutes} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import NewProducts from './components/NewProducts'


const RouteDemo = () => {

    // !Setting the routes using the inbuilt hook useRoutes([])
    // it will take the array of the objects as the input that will have the path and element as the differant keys 

    let routes = useRoutes([
        {
            path:"/",
            element : <Home/>
        },
        {
            path:"/about-us",
            element : <AboutUs/>
        },
        {
            path:"/order-summary",
            element : <OrderSummary/>
        },
        {
            path:"/products",
            element : <Products/>,
            children:[
                {
                    path:"/featured",
                    element:<FeaturedProducts/>
                },
                {
                    path:"/new",
                    element:<NewProducts/>
                },
                {
                    index:true,
                    element:<NewProducts/>
                },
            ]
        },
        {
            path:"*",
            element:<PageNotFound/>
        },
        {
            path:"users",
            element:<Users/>,
            children:[
                {
                    path:"userId",
                    element:<UserDetails/>
                }
            ]
        }
    ]);

    return routes;
}

export default RouteDemo