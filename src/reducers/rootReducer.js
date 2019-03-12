var initState = {
  isLogin: false,
  isAvailableNet: false,
  isTestNet: false,
  accountID: "",
  accountBalance: "0",
  assets: [
    {
      id: "Basic Attention Token  BAT",
      rate: 0.44,
      balance: "-"
    },
    {
      id: "DAI  DAI",
      rate: 9.78,
      balance: "-"
    },
    {
      id: "Angur  REP",
      rate: 0.01,
      balance: "-"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.para
    };
  }
  if (action.type === "CHANGE_ISAVAILABLENET") {
    return {
      ...state,
      isAvailableNet: action.para
    };
  }
  if (action.type === "CHANGE_ISTESTNET") {
    return {
      ...state,
      isTestNet: action.para
    };
  }
  if (action.type === "CHANGE_ACCOUNTID") {
    return {
      ...state,
      accountID: action.para
    };
  }
  if (action.type === "CHANGE_ACCOUNTBALANCE") {
    return {
      ...state,
      accountBalance: action.para
    };
  }
  return state;
};

export default rootReducer;
