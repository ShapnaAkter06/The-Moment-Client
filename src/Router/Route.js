import { createBrowserRouter } from "react-router-dom";
import Main from '../../src/Layout/Main';
import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import Review from "../Components/Review/Review";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Services from "../Components/Services/Services";
import SignUp from "../Components/SignUp/SignUp";
import Update from "../Components/Update/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-server-gray.vercel.app/services')
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://assignment-11-server-gray.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://assignment-11-server-gray.vercel.app/review/${params.id}`)
            }
        ]
    }
])

export default router;
