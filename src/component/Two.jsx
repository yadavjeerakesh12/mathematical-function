import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export default function Two() {
  const [val,setVal] = useState('');
  //Math.floor(Math.random() * (max - min + 1)) + min
  const [click, setClick] = useState(0);
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [op, setOp] = useState('');
  const [output,setOutput] = useState(0);
  const operators = ["+", "-", "*"];

useEffect(() => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operation = Math.floor(Math.random() * operators.length);
  const choice = operators[operation];
  seta(()=>a);
  setb(()=>b);
  setOp(()=>choice);
  const question = `${a}${choice}${b}`
  const result = eval(question);
  setOutput(()=>result);

}, [click]);

function handleClick() {
  setClick(click + 1);
  // (val==output) ? toast("Correct!") : toast("InCorrect");
  (val==output) ? Swal.fire({
      title: "Success!",
      text: "Your Answer is Correct!.",
      icon: "success",
      confirmButtonText: "OK"
    }) : Swal.fire({
      title: "Error!",
      text: "Your Answer is Incorrect!.",
      icon: "error",
      confirmButtonText: "OK"
    });
  setVal('')
}


  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className='lg:w-1/2 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY3ZxDNlaDhF77b6wHVcCVWQJGqBpwS4fAgr0MwkF0VTN2Gn4YBEDj7oL&s=10)] w-full bg-cover bg-center text-white  h-full lg:h-screen flex justify-center items-center  '>
      <h1 className='ml-3 text-2xl p-3'>
        <span className='font-bold text-4xl text-emerald-500 font-sans'>Instructions</span> <br />
You will be given two 2-digit numbers. <br />
A mathematical operator will be placed between them: <br />
+ Addition <br />
− Subtraction <br />
× Multiplication <br />
Calculate the correct answer carefully. <br />
Write the correct answer in the input Box. <br />
A correct answer will give you +1 point. <br />
An incorrect answer will not increase your score. <br />
Try to answer each question as quickly and accurately as possible. <br />
Your final score will be displayed after completing all questions. <br />

🎯 Good luck and have fun! <br />
      </h1>
      </div>




      <div className=" text-white flex flex-col flex-wrap w-full lg:w-1/2 min-h-screen lg:h-screen justify-center items-center border-2 border-amber-300 bg-black p-4
  ">


        <div className='flex flex-col flex-wrap justify-center items-center border-2 border-amber-300 rounded h-50  w-70 lg:w-64  lg:h-64 sm:w-70 sm:h-70 gap-y-6 sm:gap-y-10'>
          <div className='flex flex-wrap bg-sky-400 p-3 rounded items-center text-xl sm:text-2xl gap-4 sm:gap-x-10 lg:gap-x-10 '>
            <h1 >Question : </h1>
            <p >{a} {op} {b}</p>
          </div>

          <div className='flex flex-col  lg:w-60 lg:h-25 
          p-2 bg-blue-600 gap-2 lg:gap-4 rounded'>

            <input
            value={val}
            onChange={(e)=>setVal(e.target.value)}
            className='mt-3 outline-none' type="text" placeholder='Write Your Answer' />
            <button className='lg:p-1 font-extrabold font-sans bg-blue-900 ' 
            onClick={handleClick}
            >Generate</button>
          </div>


        </div>
      </div>
      
    </div>
  )
}
