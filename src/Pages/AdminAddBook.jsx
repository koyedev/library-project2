import { useState } from "react"

function AdminAddBook() {
  const [addBook, setAddbook] = useState(false)

  const AddBook = () => {
    setAddbook(prevState => !prevState)
  }
  return (
    <div>
        <button className="p-2 fon-bold my-3 bg-[#828080] text-white" onClick={AddBook}>
            Add a book
        </button>


        {
          addBook && (
            <form className="flex flex-col gap-3 my-3 w-8/12 "  onSubmit="">
            <input type="text" className="outline-[#585858] p-2" placeholder="Enter the Book Title" required />

            <input type="text" className="outline-[#585858] p-2" placeholder="Enter the author"  required/>
            
            <div className="flex ml-2 gap-2 items-center">
              <label htmlFor="genre" className=" text-[#585858]">Choose Genre:</label>
              <select name="genre" className="outline-[#585858] p-2 w-max">
                <option>Physics</option>
                <option>Textbooks</option>
                <option>Economics</option>
                <option>Finance</option>
                <option>Engineering</option>
                <option>Architecture</option>
                <option>Geology</option>
                <option>Economics</option>
                <option>Nonfiction</option>
                <option>Law</option>
                <option>Business</option>
              

              </select>
            </div>
            

            <input type="text" className="outline-[#585858] p-2" placeholder="Enter Img URL" required />

            <input type="text" className="outline-[#585858] p-2" placeholder="Enter the book format" required/>

            <input type="text" className="outline-[#585858] p-2" placeholder="Enter Language" required />

            <input type="text" className="outline-[#585858] p-2" placeholder="First published" required />

            <input type="textbox" className="outline-[#585858] p-2" placeholder="Enter Description" required />
            
            <button type="submit" className="p-2 fon-bold my-3 bg-[#828080] text-white w-max">Submit</button>

        </form>
          )
        }
        
    </div>
  )
}

export default AdminAddBook