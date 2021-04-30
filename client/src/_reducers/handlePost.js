const getPosts = (initData = { postsData: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            // localStorage.setItem("userPosts", JSON.stringify(action.payload.data));
            return {postData:action.payload.data};
        case "CREATE_POST":
            const newPostList =[];
            console.log(action.payload);
            newPostList.push(action.payload.data);
            for(let i=0; i < initData.postData.length;i++){
                newPostList.push(initData.postData[i]);
            }
            // localStorage.setItem("userPosts", initData + JSON.stringify(action.payload.data))
            return {postData: newPostList};
            

        case "GET_ALL_POSTS":
            
            // localStorage.setItem("posts", JSON.stringify(action.payload.data));
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
            console.log( initData.postData);
            console.log(action.payload)
            for (let i = 0; i < initData.postData.length; i++) {
                
                if (initData.postData[i]._id !== action.payload.config.postId) {
                    mapNewPosts.push(initData.postData[i]);
                }
            }
            console.log(mapNewPosts);
            return { postData: mapNewPosts };

        default:
            return initData;
    }
};

export default getPosts;