const getPosts = (initData = { postsData: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            
            return {postData:action.payload.data};
        case "CREATE_POST":
            const newPostList =[];
            
            newPostList.push(action.payload.data);
            for(let i=0; i < initData.postData.length;i++){
                newPostList.push(initData.postData[i]);
            }
            
            return {postData: newPostList};
            

        case "GET_ALL_POSTS":
            
            
            return {postData:action.payload.data};
    

            case "LIKE_POST":
            const mapNewLikes = [];
            
            for (let i = 0; i < initData.postData.length; i++) {
               
                if (action.payload.data._id !== initData.postData[i]._id) {
                    mapNewLikes.push(initData.postData[i]);
                } else {
                    mapNewLikes.push(action.payload.data);
                }
            }
            return { postData: mapNewLikes };

        case "DELETE_POST":
            const mapNewPosts = [];
            for (let i = 0; i < initData.postData.length; i++) {
                
                if (initData.postData[i]._id !== action.payload.config.postId) {
                    mapNewPosts.push(initData.postData[i]);
                }
            }
            
            return { postData: mapNewPosts };


        

        default:
            return initData;
    }
};

export default getPosts;