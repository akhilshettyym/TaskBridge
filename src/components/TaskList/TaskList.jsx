const TaskList = () => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
      <div className="shrink-0 h-full w-[300px] p-5 bg-gray-600 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-4 py-1 rounded-lg">High</h3>
            <h4 className="text-sm">29 Mar 2003</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Ace data structures...</h2>
        <p className="text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, adipisci.</p>
      </div>

      {/* <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
      </div> */}

    </div>
  )
}

export default TaskList
