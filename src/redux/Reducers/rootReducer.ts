interface BaseAction{
    type: string,
    payload?:any 
}

export const rootReducer = (state: any, action: BaseAction) => {
    switch(action.type){
        default:
            return state;
    }
};