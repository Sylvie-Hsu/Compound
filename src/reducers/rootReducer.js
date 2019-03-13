var initState = {
  isLogin: false,
  isAvailableNet: false,
  isTestNet: false,
  accountID: "",
  accountBalance: "0",
  assets: [
    {
      id: "WETH",
      name: "Wrapped Ether",
      rate: 42.87,
      balance: "-",
      supplyInterestRate: 9.89,
      borrowInterestRate: 16.56
    },
    {
      id: "DAI",
      name: "DAI",
      rate: 9.78,
      balance: "-",
      supplyInterestRate: 9.89,
      borrowInterestRate: 16.56
    },
    {
      id: "REP",
      name: "Angur",
      rate: 0.01,
      balance: "-",
      supplyInterestRate: 9.89,
      borrowInterestRate: 16.56
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
