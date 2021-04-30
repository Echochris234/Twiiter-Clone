
const login = (initData = { userData: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload.data)
      const accData = JSON.stringify(action.payload.data);
      console.log(accData)
      localStorage.setItem("userInfo", accData);
      return { ...initData, userData: action.payload.data };
    case "LOGOUT":
      localStorage.clear();
      return { userData: "" };
    default:
      return initData;
  }
};

export default login;