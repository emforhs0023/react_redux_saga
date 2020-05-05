import produce from 'immer';

export const initialState = {
    dataList:[],
    me:[],
    project:[],
    homepageList:[],
    loading: false,
    hasMorePost: false,
    hasMobilePost: false,
    dataList1:[],
    architecture:"",
    dataBase:[],
    webServer:[],
    client:[],
};

export const DATA_LIST_SUCCESS = "DATA_LIST_SUCCESS" 
export const DATA_LIST_REQUEST = "DATA_LIST_REQUEST" 
export const DATA_LIST_FAILURE = "DATA_LIST_FAILURE" 


export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type){
            
            case DATA_LIST_REQUEST : {
                draft.loading = true;
                break;
            }
            case DATA_LIST_SUCCESS : {
            //    draft.dataList = action.data;
                draft.loading = false;
                break;
            }
            case DATA_LIST_FAILURE : {
            
            }
            



            default:
            break;
        }
    })
}

