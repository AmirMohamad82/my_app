import { useState } from "react";

const NewTask = ({onAdd}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const ok = false;

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!title && !description && !date){
            alert('Please fill out the form correctly')
            return
        }

        onAdd({title, description, date, ok})

        setTitle('')
        setDescription('')
        setDate('')
    }

    return ( 
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="des">Description:</label>
                    <input id="des" type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="eDate">Date:</label>
                    <input id="eDate" type="text" className="form-control" placeholder="Sunday 01:00 PM - 03:00 PM" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="text-center">
                    <input type="submit" value="Add" className="btn btn-primary m-2 mt-3 rounded-3" data-bs-dismiss="modal"/>
                </div>
            </form>
        </div>
     );
}
 
export default NewTask;