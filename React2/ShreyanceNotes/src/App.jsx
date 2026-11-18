
import React from 'react'

function App() {

  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

  if (!title.trim() || !details.trim()) {
    alert("Please enter both title and details");
    return;
  }
    const copytask = [...tasks];
  copytask.push({ title, details });
  //console.log(copytask);
setTasks(copytask);


    console.log("title: ", title);
    console.log("details: ", details);

    setTitle("");
    setDetails("");
  }

const deleteNote = (idx)=>{
  const copyTask = [...tasks];
  copyTask.splice(idx,1);
  setTasks(copyTask);
}

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 px-5 py-10 md:px-10">

      <div className="mx-auto max-w-7xl">


{/* Header */}

<div className="mb-10 bg-200  rounded-lg flex flex-row justify-between items-center border border-stone-50/5 bg-stone-900/50 px-5 py-4 shadow-lg shadow-stone-900/20 backdrop-blur-md sm:px-10 sm:py-6">

 {/* bg-stone-900/50 px-5 py-4 shadow-lg shadow-stone-900/20 backdrop-blur-md sm:px-10 sm:py-6 */}
  <div>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
      My <span className="text-amber-300">Notes.</span>
    </h1>

    <p className="mt-2 text-sm sm:text-base text-stone-400">
      Capture your thoughts, ideas and memories.
    </p>
  </div>

  <span className="w-fit rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-xs text-stone-400">
    ✨ Your Personal Space
  </span>

</div>


        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Notes Form */}
          <form
            onSubmit={(e) => submitHandler(e)}
            className="rounded-3xl border border-stone-800 bg-[#171411] p-7 md:p-10 shadow-2xl"
          >
            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 text-2xl">
                ✎
              </div>

              <h2 className="text-3xl font-bold">
                Create a Note
              </h2>

              <p className="mt-2 text-sm text-stone-400">
                Write something down before you forget it.
              </p>
            </div>

            {/* Note Input */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="note" className="text-sm font-semibold text-stone-300">
                Note Title
              </label>

              <input
                id="note"
                type="text"
                placeholder="Enter your note title..."
                className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-5 py-4 text-base outline-none transition placeholder:text-stone-600 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </div>

            {/* Details */}
            <div className="mb-8 flex flex-col gap-3">
              <label htmlFor="details" className="text-sm font-semibold text-stone-300">
                Description
              </label>

              <textarea
                id="details"
                placeholder="Write your thoughts here..."
                rows={6}
                className="w-full resize-none rounded-xl border border-stone-700 bg-[#0c0a09] px-5 py-4 outline-none transition placeholder:text-stone-600 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"

                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              className="w-full rounded-xl bg-amber-300 py-4 font-bold text-stone-950 transition hover:bg-amber-200 active:scale-[0.98]"
            >
              + Add Note
            </button>

          </form>

          {/* Illustration */}
          <div className=" justify-center items-center   w-full hidden md:block">

            <div className="group relative flex flex-row items-center w-full max-w-lg mx-auto overflow-hidden rounded-3xl border border-stone-800 bg-[#171411] p-8 transition-all duration-300 hover:bg-stone-800 hover:border-amber-300/50 hover:shadow-xl hover:shadow-amber-300/10">

              {/* Background Effect */}
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl transition-all duration-300 group-hover:bg-amber-300/20" />

              {/* Image */}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
                alt="Writing Illustration"
                className="relative z-10 w-full  max-w-sm object-cover transition-transform duration-500 group-hover:scale-105"
              />


              {/* Text */}
              <div className="relative z-10 mt-5 text-center transition-transform duration-300 group-hover:-translate-y-1">

                <h3 className="text-xl font-semibold text-stone-100 cursor-pointer transition-all duration-300 hover:scale-125 hover:text-pink-400">
                  Your ideas matter.
                </h3>

                <p className="mt-2 text-sm text-stone-400 cursor-pointer transition-all duration-300 group-hover:text-white hover:text-yellow-400 hover:scale-110">
                  Every great thought starts with a small note.
                </p>

              </div>


            </div>
          </div>

        </div>

        {/* Your Notes Section */}
       <div className="w-full max-w-full mt-16 border-t border-stone-800 pt-10">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold ">
                Your Notes
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Your saved thoughts appear here.
              </p>
            </div>

            <span className="rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-xs text-stone-400">
              My Collection
            </span>
          </div>

          {/* Note Cards */}


{/* Note Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

  {tasks.map(function(elem, idx) {

    return (
      <div
        key={idx}
     className="w-full min-w-0 h-auto p-4 rounded-2xl border-4 border-stone-800 bg-stone-900/50 transition-all duration-300 hover:bg-stone-800 hover:border-amber-300/50 hover:shadow-xl hover:shadow-amber-300/10"
      >

        <div className="mb-5 flex items-center justify-between">
          <span className="text-xl">📝</span>
          <span className="text-xs text-stone-500">
            {String(idx + 1).padStart(2, '0')}
          </span>
        </div>
        <h2></h2>
        <h3 className="text-lg font-semibold">
          {elem.title}
        </h3>

        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-stone-300">
          {elem.details}
        </p>

  <div className="mt-4 flex justify-start ">
  <button onClick={() => 
    deleteNote(idx)
  }
     className="rounded-lg  bg-red-500/20 px-5 py-2 text-sm font-medium text-red-400 hover:bg-red-500/30 cursor-pointer scale-95">
    Delete
  </button>
</div>

      </div>
    )

  })}

</div>



        </div>

      </div>
    </div>
  )
}

export default App
