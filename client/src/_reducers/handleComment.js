const getComments =(initData = {postComments:[]}, action)=>{
    switch(action.type){
        case "GET_COMMENTS":
            console.log(action.payload.data);
            return {postComments: action.payload.data}
    
        case "CREATE_COMMENT":
            console.log(action);
            return{postComments:"Posted comment"}
        default:
            return initData
    }


};
export default getComments;