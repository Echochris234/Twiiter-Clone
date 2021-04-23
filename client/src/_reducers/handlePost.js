const getPosts = (initData = { postsData: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            localStorage.setItem("posts", action.payload.data);
            return action.payload.data;
        case "CREATE_POST":
            return {
                postsData: [...initData.result, action.payload.data],
                ...initData,
            };

        case "GET_ALL_POSTS":
            localStorage.setItem("posts", action.payload.data);
            return action.payload.data;
    

        case "LIKE_POST":
            const mapNewLikes = initData.result.map((post) => {
                if (action.payload.data.result[0]._id === post._id) {
                    return { ...post, ...action.payload.data.result[0]._id };
                } else {
                    return post;
                }
            });
            return { ...initData, mapNewLikes };
        case "DELETE_POST":
            return { initData };
        default:
            return initData;
    }
};

export default getPosts;