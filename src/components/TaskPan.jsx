import { useContext } from "react";
import { TaskContext } from "../contexts";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TaskPanHeader from "./TaskPanHeader";

export default function TaskPan() {

  const {datas} = useContext(TaskContext);
  return (
    <>
      <div className="rounded-xl border mx-12 border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
        <TaskPanHeader />
        <div className="overflow-auto">
        {datas.length ? (
          <table className="table-fixed overflow-auto xl:w-full">
            <TableHead />
              <tbody>
                {datas.map((data) => (
                  <TableBody
                    key={data.id}
                    id={data.id}
                    title={data.Title}
                    description={data.Description}
                    priority={data.Priority}
                    tags={data.Tags}
                  />
                ))}
              </tbody>
            
          </table>) : (<>
              <div className="flex items-center justify-center">No Task Present</div>
              
              </>)}
        </div>
      </div>
    </>
  );
}
