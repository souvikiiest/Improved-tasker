export const initialState = {
    showAddTask:false,
    isEditMode:false,
    datas:[],
    filteredDatas:[],
    inputData:{
    id: null,
    Title: "",
    Description: "",
    Tags: [],
    Priority: "",
    }
}


export const taskReducer = (state,action)=>{
    switch(action.type){
        case "Edit_Task":
            return {
                ...state,
                datas:state.datas.map((task) => (task.id === action.data.id ? action.data : task)),
                filteredDatas:state.datas.map((task) => (task.id === action.data.id ? action.data : task)),
                showAddTask:false,
                inputData:initialState.inputData,
                isEditMode:false
            }
        case "Add_Task":
            return{
                ...state,
                datas:[...state.datas, { ...action.data, id: state.datas.length + 1 }],
                filteredDatas:[...state.datas, { ...action.data, id: state.datas.length + 1 }],
                showAddTask:false,
                inputData:initialState.inputData,
                isEditMode:false
            }
        case "Toggle_add_task":
            return{
                ...state,
                showAddTask:true,
                isEditMode:true,
                inputData:action.inputData || initialState.inputData
            }
        case "Delete_task":
            return{
                ...state,
                datas:state.datas.filter((data) => data.id != action.id),
                filteredDatas:state.datas.filter((data) => data.id != action.id)
            }
        case "SET_INPUT_DATA":
            return{
                ...state,
                inputData:action.initialState
            }
        case "DELETE_ALL_TASK":
            return{
                ...state,
                filteredDatas:[],
                datas:[]
            }
        case "SHOW_ADD_TASK":
            return{
                ...state,
                showAddTask:action.val
            }
        case "SEARCH_TASK":
            if(action.query==''){
                return{
                    ...state,
                    filteredDatas:state.datas
                }
            }else{
            return{
                ...state,
                filteredDatas:state.datas.filter((data)=>data.Title.toLowerCase().includes(action.query))
            }
        }
        default:
            return state;
    }


    
}


