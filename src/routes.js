import { useRoutes } from 'react-router-dom';
// Layouts
import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';

// Pages
import Home from './pages/Home';
import Following from './pages/Following';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Search from './pages/Search';

//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

// Public routes
function Router() {
    return useRoutes([
        {
            element: <DefaultLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: 'following', element: <Following /> },
                { path: 'profile', element: <Profile /> },
                { path: 'app', element: <DashboardApp /> },
                { path: 'user', element: <User /> },
                { path: 'products', element: <Products /> },
                { path: 'blog', element: <Blog /> },
            ],
        },
        {
            element: <HeaderOnly />,
            children: [
                { path: 'upload', element: <Upload /> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
            ],
        },
        {
            element: null,
            children: [{ path: 'search', element: <Search /> }],
        },
        {
            element: <DefaultLayout />,
            children: [{ path: 'userCodeAppPanel', element: <Home /> }],
        },
    ]);
}

export default Router;

// const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/following', component: Following },
//     { path: '/@:nickname', component: Profile },
//     { path: '/upload', component: Upload, layout: HeaderOnly },
//     { path: '/search', component: Search, layout: null },
// ];

// const privateRoutes = [];

// export { publicRoutes, privateRoutes };
