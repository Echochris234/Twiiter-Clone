const getPosts = (initData = { postsData: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            localStorage.setItem("userPosts", JSON.stringify(action.payload.data));
            return action.payload.data;
        case "CREATE_POST":
            localStorage.setItem("userPosts", initData + JSON.stringify(action.payload.data))
            return {
                postsData: [...initData, action.payload.data],
                ...initData,
                
            };
            

        case "GET_ALL_POSTS":
            
            localStorage.setItem("posts", JSON.stringify(action.payload.data));
            return action.payload.data;
    

            case "LIKE_POST":
            const mapNewLikes = [];
            
            for (let i = 0; i < initData.length; i++) {
                if (action.payload.data._id !== initData[i]._id) {
                    mapNewLikes.push(initData[i]);
                } else {
                    mapNewLikes.push(action.payload.data);
                }
            }
            localStorage.setItem("posts", JSON.stringify(mapNewLikes));
            return { postsData: JSON.stringify(mapNewLikes) };
        case "DELETE_POST":
            return { initData };
        default:
            return initData;
    }
};

export default getPosts;