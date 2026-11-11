import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

          <h1 className='text-4xl font-bold'>Add Notes</h1>

          {/* Notes heading input */}
          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 font-medium rounded w-full outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />

          {/* Notes detail input */}
          <textarea 
          type="text"
          placeholder='Enter details'
          className='px-5 py-2 border-2 font-medium rounded h-20 w-full outline-none'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
           />

          <button className='bg-white active:scale-95 text-black px-5 py-2 font-medium rounded w-full outline-none'>
            Add Note
          </button>
        
        {/* <img className='h-52 rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="notes image" /> */}
      </form>
      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90] overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className="flex flex-col justify-between items-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 py-9 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-3 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
            </div>
            <button onClick= {() => {
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-xs p-1 text-white rounded font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App