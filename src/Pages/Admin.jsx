import Logo from "../images/logo.svg" 
import BorrowedSVG from "../images/borrowed-books.svg"
import OverdueSVG from "../images/overdue.svg"
import Overview from "../images/overvie-logo.svg"
import Profile from "../images/profile.svg"
import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"

function Admin() {
  return (
    <div className="grid w-full grid-cols-12 ">
        <div   className="bg-lightAsh h-screen min-h-screen col-span-3">
                <div className="flex items-center flex-col ">
                    <img src={Logo} className="h-40 w-40 mb-10" alt="Oau Logo" />
                    
                    <Link to="/admin/books" className="flex p-2 mb-2 rounded-md hover:bg-black hover:text-white cursor-pointer w-9/12">
                        
                            <img src={Overview} className="mr-2" alt="" />
                            <p className="">List of Books</p>
                        
                    </Link>
                    

                    <Link to="/admin/borrowed-books" className="flex p-2 mb-2 hover:bg-black hover:text-white rounded-md cursor-pointer w-9/12">
                        <img src={BorrowedSVG} className="mr-2 bg-white" alt="" />
                        <p >All Borrowed Books</p>
                    </Link>
                   

                    <Link to="/admin/overdue-books" className="flex p-2 mb-2 hover:bg-black hover:text-white  rounded-md  cursor-pointer w-9/12" >
                        <img src={OverdueSVG} className="mr-2 bg-white" alt="" />
                        <p className="">All Overdue Books</p>
                    </Link>

                    <Link to="/admin/add-book" className="flex p-2 mb-2 hover:bg-black hover:text-white  rounded-md  cursor-pointer w-9/12" >
                      <img src={BorrowedSVG} className="mr-2 bg-white" alt="" />
                        <p className="">Add a Book</p>
                    </Link>

                    <button className="flex p-2 mb-2  bg-[#484747] first-letter text-white rounded-md cursor-pointer w-9/12" onClick="">
            
                      <p className="text-center">Logout</p>
                     </button>
    
                

                    <div className="flex items-center gap-2 mt-40">
                        <img src={Profile} className="" alt="" />
                         <p className="">Alabi IyanuOluwa</p>
                    </div>
                    
                </div>


        </div>

        <div className="col-span-10 p-4">
                <Header

                />
                <Outlet />
            </div>
        
    </div>
  )
}

export default Admin