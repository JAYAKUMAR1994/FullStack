import React, { useState, useEffect,useRef } from 'react';
import Swal from 'sweetalert2';
import  'datatables.net';
import 'datatables.net-dt';
import jQuery from 'jquery';

const $ = jQuery;


interface Book {
  _id: string;
  title: string;
  author: string;
  address: {
    address1: string;
    address2: string;
  };
}


const showDeleteSuccessAlert = () => {
  Swal.fire({
    icon: 'success',
    title: 'Deleted!',
    text: 'The item has been successfully deleted.',
    confirmButtonColor: '#d33',
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
      icon: 'animate__animated animate__tada'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
      icon: 'animate__animated animate__flipOutX'
    }
  });
};


const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editFormData, setEditFormData] = useState({
    title: '',
    author: '',
    address1: '',
    address2: '',
  });

  const [newBookFormData, setNewBookFormData] = useState({
    title: '',
    author: '',
    address1: '',
    address2: '',
  });
  
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  type DataTable = any; // You can improve this type if needed


  const tableRef = useRef<DataTable | null>(null);

useEffect(() => {
  const dataTable = $(tableRef.current).DataTable();
}, [books]);




  const showSuccessAlert = (val:string) => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: `${val} completed successfully.`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
        icon: 'animate__animated animate__heartBeat'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
        icon: 'animate__animated animate__flipOutX'
      }
    });
  };

//Load
  const fetchData = async () => {
 debugger
    try {
     

      const response = await fetch('http://localhost:3001/Load_Books');
      if (response.ok) {
        
        const data = await response.json();

        setBooks(data.book);

      
      } else {
        console.error('Error fetching books:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    finally {
      setLoading(false);
      const dataTable = $(tableRef.current).DataTable();
    dataTable.destroy();
    }
  };



  //create
  const handleNewBookInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBookFormData({ ...newBookFormData, [e.target.name]: e.target.value });
  };

  const handleNewBookSubmit = async (e: React.FormEvent) => {
    const {address1,address2,...rest}=newBookFormData
const dispatch={
  ...rest,
  address: { address1, address2 }
}

    try {
      const response = await fetch('http://localhost:3001/store_book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dispatch),
      });

      if (response.ok) {
        const data = await response.json();
        
        console.log(data.books)
        showSuccessAlert("Created")

        // const table = $('#booksTable').DataTable()
        // table.draw()

   
           await fetchData();

            // Update the state with the inserted book
      // setBooks(data.books);

      //   // Create the book list after successful creation
      //  await  fetchData();


        // Reset the new book form
        setNewBookFormData({
          title: '',
          author: '',
          address1: '',
          address2: '',
        });
       

      } else {
        console.error('Error creating new book:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating new book:', error);
    }
  };



  //delete
  const handleDelete = async (id: any) => {
    try {
      debugger
      const response = await fetch(`http://localhost:3001/book/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
       
        showDeleteSuccessAlert()
           // Update the book list after successful deletion
         await  fetchData();
          // Update the images state after successful deletion
      setBooks(books.filter((book) => book._id !== id));

      } else {
        console.error('Error deleting book:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    } 
    // finally {
    //   setLoading(true);
    // }
  };


  const showYesNoFormAlert = (e:React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    debugger
    Swal.fire({
      title: 'Do you want to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleNewBookSubmit(e)
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'You chose not to proceed.', 'info');
      }
    });
  };

  const showYesNoAlert = (id:any) => {
    Swal.fire({
      title: 'Do you want to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        //handleNewBookSubmit(e)
        handleDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'You chose not to proceed.', 'info');
      }
    });
  };



  // Update

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookId) {
      // Handle the case where no book is selected for editing
      return;
    }
  
    const { address1, address2, ...rest } = editFormData;
    const dispatch = {
      ...rest,
      address: { address1, address2 },
    };
  
    try {

      const response = await fetch(`http://localhost:3001/update_book/${selectedBookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dispatch),
      });
  
      if (response.ok) {
    
        showSuccessAlert("Updated")
        
        fetchData();
        setEditFormData({
          title: '',
          author: '',
          address1: '',
          address2: '',
        });
        setNewBookFormData({
          title: '',
          author: '',
          address1: '',
          address2: '',
        });

        setSelectedBookId(null); // Reset selectedBookId after successful update

      } else {
        console.error('Error updating book:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  
  const handleEditButtonClick = (id: string) => {
    setSelectedBookId(id);

    const selectedBook = books.find((book) => book._id === id);

    if (selectedBook) {
      setEditFormData({
        title: selectedBook.title,
        author: selectedBook.author,
        address1: selectedBook.address.address1,
        address2: selectedBook.address.address2,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
 
       <form onSubmit={selectedBookId ? handleEditSubmit : showYesNoFormAlert} className='   mt-5'>
        
  <div className="[&>*]:grid space-y-2 [&>*]:space-x-3  grid grid-cols-1 md:grid-cols-5">
       <div>
        <label className='pl-3'>Title</label>
        <input
          type="text"
          name="title"
          value={selectedBookId ? editFormData.title : newBookFormData.title}
          onChange={selectedBookId ? handleEditInputChange : handleNewBookInputChange}
          className='text-black font-serif font-light border border-black'
        />
        </div>

        <div>
        <label className='pl-3'>Author</label>
        <input
          type="text"
          name="author"
          value={selectedBookId ? editFormData.author : newBookFormData.author}
          onChange={selectedBookId ? handleEditInputChange : handleNewBookInputChange}
          className='text-black font-serif font-light border border-black'
        />
        </div>


       <div>
        <label className='pl-3'>Address1</label>
        <input
          type="text"
          name="address1"
          value={selectedBookId ? editFormData.address1 : newBookFormData.address1}
          onChange={selectedBookId ? handleEditInputChange : handleNewBookInputChange}
          className='text-black font-serif font-light border border-black'
        />
        </div>

<div>
        <label className='pl-3'>Address2</label>
        <input
          type="text"
          name="address2"
          value={selectedBookId ? editFormData.address2 : newBookFormData.address2}
          onChange={selectedBookId ? handleEditInputChange : handleNewBookInputChange}
          className='text-black font-serif font-light border border-black'
        />

</div>

<button
  type="submit"
  className={`border items-center  max-w-fit border-blue-50 bg-blue-500 text-white ml-5 ${selectedBookId ? 'btn-update' : 'btn-create'}`}
>
  {selectedBookId ? 'Update' : 'Create'}
</button>


</div>
      </form>

{loading ? (
        <div className='content-center' >Loading...</div>
      ) : (
        
     
 
       


<table  id="booksTable" className="display" ref={tableRef}>
    <thead>
      <tr>
        
        <th>Title</th>
        <th>Author</th>
        <th>Address1</th>
        <th>Address2</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books?.map((book) => (
        <tr key={book?._id}>
       
          <td>{book?.title}</td>
          <td>{book?.author}</td>
          <td>{book?.address?.address1}</td>
          <td>{book?.address?.address2}</td>
          <td >
            <button className='border border-blue-50 bg-blue-500 text-white ml-5' onClick={() => handleEditButtonClick(book._id)}>Edit</button>
            <button  className='border border-blue-50 bg-blue-500 text-white btn-delete ml-5' onClick={() => showYesNoAlert(book._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

    )}


       

    </div>
  );
};

export default BookList;
