import { Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import BorrowedBooks from "./Pages/BorrowedBooks"
import OverdueBooks from "./Pages/OverdueBooks"
import Library from "./Pages/Library"
import Admin from "./Pages/Admin"
import AdminBooks from "./Pages/AdminBooks"
import AdminBorrowedBooks from "./Pages/AdminBorrowedBooks"
import AdminOverdueBooks from "./Pages/AdminOverdueBooks"
import AdminAddBook from "./Pages/AdminAddBook"
import BookDetails from "./Pages/BookDetails"
import Register from "./Pages/Register"
import Error404 from "./Pages/Error404"


function App() {
  

  return (
    <>
      {/* <h1 className="text-red-700">Hello</h1> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Error404/>}></Route>
        
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="library" element={<Library />} />
          <Route path="library/bookdetails/:id" element={<BookDetails />} />
          <Route path="borrowed" element={<BorrowedBooks/>} />
          <Route path="overdue-books" element={<OverdueBooks/>} />
        
        </Route>

 
        <Route path="admin" element={<Admin/>}>
          <Route path="books" element={<AdminBooks/>}  />
          <Route path="borrowed-books" element={<AdminBorrowedBooks/>}  />
          <Route path="overdue-books" element={<AdminOverdueBooks/>}  />
          <Route path="add-book" element={<AdminAddBook/>}  />

        </Route>
      
      </Routes>
    </>
  )
}

export default App

