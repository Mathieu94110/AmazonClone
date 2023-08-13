type StateInterface = {
  isSignout: boolean;
  userToken: any;
  userInfo: any;
};
export const initialState: StateInterface = {
  isSignout: true,
  userToken: null,
  userInfo: null,
};

type ActionInterface =
  | { type: "SET_USER_INFO"; userInfo: any }
  | { type: "SIGN_OUT" }
  | { type: "SIGN_IN"; token: any };

export const AuthReducer = (prevState = initialState, action: ActionInterface) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
        userInfo: null,
      };
    case "SET_USER_INFO":
      return {
        ...prevState,
        userInfo: action.userInfo,
      };
    default:
      return { ...prevState };
  }
};
