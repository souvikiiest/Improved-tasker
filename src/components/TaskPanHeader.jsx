/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../contexts";
import SearchTask from "./SearchTask";

 export default function TaskPanHeader()  {
 const {setShowAddTask,DeleteAll} =useContext(TaskContext);
 const handleDeleteAll = ()=>{
  DeleteAll();
 }

 
 return (
   <div className="mb-14 items-center justify-between sm:flex">
     <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
     <div className="flex items-center space-x-5">
       <SearchTask />
       <button
         onClick={() => setShowAddTask(true)}
         className={`rounded-md px-3.5 bg-blue-500 py-2.5 text-sm font-semibold`}
       >
         Add Task
       </button>
       <button
         onClick={handleDeleteAll}
         className={`rounded-md px-3.5 bg-red-500 py-2.5 text-sm font-semibold`}
       >
         Delete All
       </button>
     </div>
   </div>
 ); 

 }
 