import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import AllBooks from "../Pages/AllBooks";
import PrivateRoute from "./PrivateRoute";
import SpecificCategory from "../Pages/SpecificCategory";
import BookDetails from "../Pages/BookDetails";
import BorrowPage from "../Pages/BorrowPage";
import Test from "../Pages/Test";
import UpdateBooks from "../Pages/UpdateBooks";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/borrowedBook',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: '/specific/:category',
                element: <SpecificCategory></SpecificCategory>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-red.vercel.app/books/${params.category}`)
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-red.vercel.app/singleBook/${params.id}`)
            },
            {
                path: '/b',
                element: <PrivateRoute><BorrowPage></BorrowPage></PrivateRoute>
            },
            {
                path: '/test',
                element: <Test></Test>
            },
            {
                path: '/updateDetails/:id',
                element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-red.vercel.app/singleBook/${params.id}`)
            }
        ]
    },
]);