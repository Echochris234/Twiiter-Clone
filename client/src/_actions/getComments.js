import axios from "axios";

export const getComments = (postId)=> async (dispatch) => {
    
    const res = await axios.post(`http://localhost:8000/comments/getcomments`,{
        
        postId:postId,
        
    });
    dispatch({
        type: "GET_COMMENTS",
        payload: res,
    })
};

export const comment = (token, commentCont) => async (dispatch)=>{
    console.log(token);
    const res = await axios.post("http://localhost:8000/comments/createcomment",commentCont,{
        headers:{ Authorization: "Bearer "+ token },
        
    });
    // dispatch({
    //     type: "CREATE_COMMENT",
    //     payload: res,
    // })

};