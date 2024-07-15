
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgetpassword from './pages/Forgetpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Categorylist from './pages/categorylist';
import Addcat from './pages/addCat';
import Productlist from './pages/Productlist';
import Addproduct from './pages/Addproduct';
import Addblog from './pages/Addblog';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Addblogcat from './pages/Addblogcat';


function App() {
  return (
    <Router>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/reset-password' element={<Resetpassword />} />
  <Route path='/forget-password' element={<Forgetpassword />} />
  <Route path='/admin' element={<MainLayout />} >
    <Route  index element={<Dashboard/>} />
    <Route path='list-category' element={<Categorylist/>} />
    <Route path='category' element={<Addcat/>} />
    <Route path='category/:id' element={<Addcat/>} />
    <Route path='product-list' element={<Productlist/>} />
    <Route path='product' element={<Addproduct/>} />
    <Route path='blog' element={<Addblog/>} />
    <Route path='blog/:id' element={<Addblog/>} />
    <Route path='blog-list' element={<Bloglist/>} />
    <Route path='blog-category-list' element={<Blogcatlist/>} />
    <Route path='blog-category' element={<Addblogcat/>} />
        <Route path='blog-category/:id' element={<Addblogcat/>} />
  </Route>

</Routes>
    </Router>
  );
}

export default App;
