import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import { productsData } from './api/api';
import SignIn from './pages/SignIn';


const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path="/" element={<Layout/>}> 
    <Route index element={<Home/>} loader={productsData}></Route> 
    <Route path="/signin" element={<SignIn/>}></Route>
    </Route>

  ));
  return (
    <div className= " font-bodyFont  bg-[#F5F5F5]">
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;
