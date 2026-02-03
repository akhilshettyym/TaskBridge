const RemoveEmp = ({ onDelete }) => {
    return (
        <button onClick={onDelete} className="py-1 px-4 text-sm rounded-md bg-red-500 border font-semibold border-red-600 text-[#FFDAB3] hover:bg-red-600 transition"> Delete </button>
    );
};
export default RemoveEmp;