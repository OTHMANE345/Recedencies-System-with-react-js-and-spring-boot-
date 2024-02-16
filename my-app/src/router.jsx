import {createBrowserRouter} from "react-router-dom";
import Home from './components/home';
import Gallery from './components/galletry';
import Loginforadmin from "./components/LoginForAdmin/FormUi";
import FormforSingUp from "./components/FormForSingUp/FormUiforSingUp";
import Form from "./components/Form/FormUi";
import Dispalyhouses from "./components/displayHouses";
import Add from "./components/AddNewH/FormUi";
import UppD from "./components/Update/FormUi";
import Houses from "./components/articles";
import ShowTheHouse from "./components/readmore";
import OrdersFoeAdmin from "./components/displayorders";




import DefaultLayout from './components/DefaultLayout';
import AdminLayouts from "./components/adminlayouts";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
         children:[
            {path:'/',
                element: <> <Home/> 
                        <Gallery/> </>

                },
                {
                    path:'/singup',
                    element:<FormforSingUp/>
                },
                {
                    path:'/login',
                    element:<Form/>
                },
                {
                    path:'/houses',
                    element:<Houses/>
                },
                {
                    path:'/showdetailsofhouse/:id',
                    element:<ShowTheHouse/>
                },

                /* {
                    path:'/login',
                    element:<Form/>
                },
                
                {
                    path:'/',
                    element:<Form/>
                },
                {
                    path:'/singup',
                    element:<FormforSingUp/>
                },
               {
                    path:'/categories',
                    element:<Cat/>
                },
                {
                    path:'/create',
                    element:<AddN/>
                },
                {
                    path:'/products',
                    element:<ProductsforAdmin/>
                },
                {
                    path:'/sowAllproducts',
                    element:<Product/>
                },
                 {
                    path:'/showdetailsofproduct/:id',
                    element:<ShowTheProduct/>
                },
               {
                    path:'/carts',
                    element:<Carts/>
                },
 */
        ] 
    },
   {
        path:'/admin',
        element:<AdminLayouts/>,
        children:[

            {
                path:'/admin/login',
                element:<Loginforadmin/>
            },
            {
                path:'/admin/houses',
                element:<Dispalyhouses/>
            },
            {
                path:'/admin/create',
                element:<Add/>
            },
            {
                path:'/admin/update/:id',
                element:<UppD/>
            },
            {
                path:'/admin/orders',
                element:<OrdersFoeAdmin/>
            },
                /* 
                {
                    path:'/admin/products',
                    element:<ProductsforAdmin/>
                },
                {
                    path:'/admin/orders',
                    element:<OrdersFoeAdmin/>
                },
                {
                    path:'/admin/create',
                    element:<AddN/>
                },
                {
                    path:'/admin/update/:id',
                    element:<UppD/>
                },
                {
                    path:'/admin/categorie',
                    element:<Categor/>
                },
                {
                    path:'/admin/createcategorie',
                    element:<AddC/>
                },
 */




         ] 
    }

   


])


 export default router;
