
import { useEffect, useState } from 'react'
import { supabase } from '../SupabaseClient'
import { useParams } from 'react-router-dom'
import Book1 from "../images/book1.svg"

function BookDetails() {
    const params = useParams()
    const [Book, setBook] = useState("")
    const [userData, setuserData ] =("")

 
    useEffect (() => {
        const controller = new AbortController()
        const getBooks = async() => {
           const { data, error } = await supabase
            .from('Books')
            .select('*')
            .eq('id', params.id)

            setBook(data)
          

            if(error) {
                console.log(error)
            }
        }

        getBooks()

        return () => {
            controller.abort();
        }
    },[])

    const handleBorrodBook = async() => {     
        const { data, error } = await supabase
        .from('Borrowed Books')
        .insert([
        { book_id : `${params.id}`,
         other_column: '' },
        ])
        .select()

        // console.log(data)

    }

    useEffect(() => {
        const controller = new AbortController()
        const getUsers = async() => {
            let { data: users, error } =  await supabase
            .from('users')
            .select('*')

            return users, error
        }

        console.log(getUsers())

        

        getUsers()

        return () => {
            controller.abort();
        }
    },[userData])

  return (
    <div>
        <div className='grid grid-cols-12 gap-3'> 
        <img className='col-span-4 h-full py-4 w-full' src={Book1} />
        <div className='flex flex-col col-span-7  px-3 gap-5 py-8'>
            <p><span className='font-bold'>Title : </span>{Book[0]?.title}  </p>
            <p><span className='font-bold'>Author : </span>{Book[0]?.author}  </p>
            <p><span className='font-bold'>Genre : </span>{Book[0]?.genre}  </p>
            <p><span className='font-bold'>Published : </span>{Book[0]?.format}  </p>
            <p><span className='font-bold'>Language : </span>{Book[0]?.language}  </p>
            <p><span className='font-bold'>Format : </span>{Book[0]?.format}  </p>
            <p><span className='font-bold'>Format : </span>{Book[0]?.published}  </p>
            <p><span className='font-bold'>Description : </span>{Book[0]?.long_description}  </p>
           
        </div>
        </div>

        <button className='p-2 text-white bg-[#404040]' onClick={handleBorrodBook}>Borrow this Book</button>
    </div>
    
  )
}

export default BookDetails