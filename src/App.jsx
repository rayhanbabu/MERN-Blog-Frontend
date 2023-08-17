import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogShow from './pages/BlogShow'
import BlogDetails from './pages/BlogDetails'
import CreateBlog from './pages/CreateBlog'
import UpdateBlog from './pages/UpdateBlog'
import Login from "./pages/Login"
import Protected from "./component/Protected"
import NotFound from "./pages/NotFOund"


function App() {

  return (    
         
        <div>
           <BrowserRouter>
                 <Routes>
                        <Route path='/' element={<BlogShow/>}/>
                        <Route path='/create' element={<Protected Cmp={CreateBlog}/>}/>
                        <Route path='/UpdateBlog/:id' element={<Protected Cmp={UpdateBlog}/>}/>
                        <Route path='/blog-details/:id' element={<BlogDetails/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<NotFound/>}/>
                     
                 </Routes>
          </BrowserRouter>

        </div>
         


     
      )
   }

export default App
