/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TaskContext } from "../contexts";
import AddTaskNavbar from "./AddTaskNav";

export default function AddTask({isEditMode}) {
  const {inputData,handleAddTask}= useContext(TaskContext);
  const [datas,setInputData] = useState(inputData);

const handleSubmit = (e)=>{
  e.preventDefault();
  const { Title, Description, Tags, Priority } = datas;
  
  if (!Title) {
    toast.error("Please enter Title");
  } else if (!Description) {
    toast.error("Please enter Description");
  } else if (Tags[0] === "") {
    toast.error("Please enter at least one Tag");
  } else if (!Priority) {
    toast.error("Please select Priority");
  }else{

    handleAddTask(datas);
  }
  
}
  return (
    <>
    <ToastContainer/>
      <AddTaskNavbar />
      <form onSubmit={handleSubmit} className="mx-auto my-auto w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isEditMode ? "Edit" : "Add"} New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) =>{
                setInputData({ ...datas, Title: e.target.value });
              }
              }
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              value={datas.Title}
              type="text"
              name="title"
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              onChange={(e) =>
                setInputData({ ...datas, Description: e.target.value })
              }
              value={datas.Description}
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                onChange={(e) => {
                  const tagsArr = e.target.value
                    .split(",")
                    .map((tag) => tag.trim());
                  setInputData({ ...datas, Tags: tagsArr });
                }}
                value={ datas.Tags.join(",")}
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={datas.Priority}
                onChange={(e) =>
                  setInputData({ ...datas, Priority: e.target.value })
                }
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isEditMode ? "Edit " : " Create "}new Task
           
          </button>
        </div>
      </form>
    </>
  );
}
