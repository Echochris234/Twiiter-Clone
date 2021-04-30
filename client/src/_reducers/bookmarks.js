const bookmarks = (initData = { bookmarks: [] }, action) => {
    
    switch (action.type) {
        case "GET_BOOKMARKS":
            
            console.log(action.payload, "reducers")
            // localStorage.setItem("bookmarks",JSON.stringify(action.payload));
            
            return { bookmarks: action.payload };
        
        // case "ADD_BOOKMARK":
        //     const newBookmarkList = [];
        //     console.log(action.payload);
        //     newBookmarkList.push(action.payload.data.postID);
        //     for (let i = 0; i < initData.bookmarks.length; i++) {
        //         newBookmarkList.push(initData.bookmarks[i]);
        //     }
           
        //     return { bookmarks: newBookmarkList };

            
        case "DELETE_BOOKMARK":
            const mapNewBookmarks = [];
            for (let i = 0; i < initData.bookmarks.length; i++) {
                if (initData.bookmarks[i]._id !== action.payload.data._id) {
                    mapNewBookmarks.push(initData.bookmarks[i]);
                }
            }
            return { bookmarks: mapNewBookmarks };
        default:
            return initData;
    }
};

export default bookmarks;