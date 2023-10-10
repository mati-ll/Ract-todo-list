import { PathConstants } from "./pathConstants";
import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.ERROR, element: <ErrorPage /> },
];

export default routes;
