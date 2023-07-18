// import { useState } from "react";

const State = ({ok}) =>{
    // const [all, setAll] = useState(0)
    // const [open, setOpen] = useState(0)
    // const [close, setClose] = useState(0)


    // setAll((all)=>{
    //     (ok.map(item => item ? all++ : all++)) 
    //     return all
    // })

    // setOpen((open)=>{
    //     let i = 0;
    //     (ok.map(item => item ? open++ : i++)) 
    //     return open;
    // })

    // setClose((close)=>{
    //     let i = 0;
    //     (ok.map(item => item ? i++ : close++)) 
    //     return close;
    // })

    return (
        <div className="container">
            <div className='d-xxl-table-row text-decoration-none'>
                <a href="/#" className='px-2'>All</a><a href="/#" className="px-2 bg-primary text-white rounded-circle">4</a>
                <span className='span'></span>
                <a href="/#" className='px-2 text-gray'>Open</a><a href="/#" className='px-2 text-white bg-gray rounded-circle'>4</a>
                <a href="/#" className='px-2 text-gray'>Closed</a><a href="/#" className='px-2 text-white bg-gray rounded-circle'>0</a>
                <a href="/#" className='px-2 text-gray'>Archived</a><a href="/#" className='px-2 text-white bg-gray rounded-circle'>0</a>
            </div>
            <div className="space"></div>
        </div> 
    );
}
 
export default State;
