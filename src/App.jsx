import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogShow from './pages/BlogShow'
import BlogDetails from './pages/BlogDetails'
import CreateBlog from './pages/CreateBlog'
import UpdateBlog from './pages/UpdateBlog'


function App() {

  return (    
         
        <div>
           <BrowserRouter>
                 <Routes>
                       <Route path='/' element={<BlogShow/>}/>
                       <Route path='/create' element={<CreateBlog/>}/>
                        <Route path='/UpdateBlog/:id' element={<UpdateBlog/>}/>
                        <Route path='/blog-details/:id' element={<BlogDetails/>}/>
                     
                 </Routes>
          </BrowserRouter>

        </div>
         


     
      )
   }

export default App
