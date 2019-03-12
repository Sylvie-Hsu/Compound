export const changeIsLogin = para => {
  return {
    type: "CHANGE_ISLOGIN",
    para: para
  };
};

export const changeIsAvailableNet = para => {
  return {
    type: "CHANGE_ISAVAILABLENET",
    para: para
  };
};

export const changeIsTestNet = para => {
  return {
    type: "CHANGE_ISTESTNET",
    para: para
  };
};

export const changeAccountID = para => {
  return {
    type: "CHANGE_ACCOUNTID",
    para: para
  };
};

export const changeAccountBalance = para => {
  return {
    type: "CHANGE_ACCOUNTBALANCE",
    para: para
  };
};
