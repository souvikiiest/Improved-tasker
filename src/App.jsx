import { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { TaskContext } from "../src/contexts/index";
import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskPan from "./components/TaskPan";
import Taskdatas from "./data/data";
import { initialState, taskReducer } from "./reducer/Taskreducer";

function App() {
 const [state,dispatch] = useReducer(taskReducer,{
  ...initialState,
  datas:Taskdatas,
  filteredDatas:Taskdatas
 })

  const handleAddTask = (data) => {
    if (state.isEditMode) {
      dispatch({
        type: "Edit_Task",
        data,
      });
    } else {
      dispatch({
        type:"Add_Task",
        data
      })
      toast.success("Task added successfully!");
    }
  };

  const handleEditTask = (id)=>{
    const task = state.datas.find((data) => data.id === id);
    console.log(task);
    dispatch({
      type:"Toggle_add_task",
      isEditMode:true,
      inputData:task,
    })

  }
  const handleDelete = (id) => {
    dispatch({
      type:"Delete_task",
      id
    })
  };
  const setShowAddTask=(val)=>{
    dispatch({
      type:"SHOW_ADD_TASK",
      val
    })
  }
  const DeleteAll=()=>{
    dispatch({
      type:"DELETE_ALL_TASK"
    })
  }
const searchTask = (query)=>{
  dispatch({
    type:"SEARCH_TASK",
    query
  })
}

  return (
    <>
      <TaskContext.Provider
        value={{
          datas: state.filteredDatas,
          handleAddTask,
          handleDelete,
          handleEditTask,
          inputData:state.inputData,
          setInputData:data=>dispatch({type:"SET_INPUT_DATA",inputData:data}),
          DeleteAll,
          setShowAddTask,
          searchTask
        }}
      >
        <ToastContainer/>
        {state.showAddTask ? (
          <AddTask isEditMode={state.isEditMode} />
        ) : (
          <>
            <Navbar />
            <Hero />
            <TaskPan />
          </>
        )}
        <Footer />
        
      </TaskContext.Provider>
    </>
  );
}

export default App;
