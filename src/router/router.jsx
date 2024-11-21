import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <div className="text-center w-full h-screen flex items-center justify-center font-bold text-4xl">404 | Page Not Found</div>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
            ]
        }
    ]
)

export default router;