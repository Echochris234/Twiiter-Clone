const login = (initData = { user: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
      let accData = JSON.stringify(action.payload);
      window.localStorage.setItem("user", accData);
      return { ...initData, user: accData };
    default:
      return initData;
  }
};

export default login;
