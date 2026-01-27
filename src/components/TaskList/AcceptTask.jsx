const AcceptTask = () => {
  return (
    <div id="tasklist" className="h-[50%] overflow-x-auto flex items-center gap-6 flex-nowrap w-full py-5 mt-10" >
      <div className="shrink-0 h-full w-80 p-6 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/30 shadow-md">
        <div className="flex justify-between items-center">
          <span className="text-xs px-4 py-1 rounded-full bg-[#FFDAB3]/15 text-[#FFDAB3] uppercase tracking-wide"> High </span>
          <span className="text-xs text-[#F8F8F2]/70"> 29 Mar 2003 </span>
        </div>
        <h2 className="mt-5 text-xl font-semibold text-[#F8F8F2]"> Ace data structures... </h2>
        <p className="text-sm mt-3 text-[#F8F8F2]/70 leading-relaxed"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, expedita. </p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-1 px-2 text-sm rounded-md">Mark as Completed</button>
          <button className="bg-red-500 py-1 px-2 text-sm rounded-md">Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask;