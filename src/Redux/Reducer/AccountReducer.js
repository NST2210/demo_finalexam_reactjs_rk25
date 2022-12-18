import * as TYPES from "../Contant/ActionType"; // Import acctionType đê sử dụng

var initialState = [];

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ACCOUNT_LIST:
      //   console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];

    case TYPES.DELETE_ACCOUNT:
      //   console.log("payload: ", action.payload);
      let idDelete = action.payload;
      let listAccountState = state;
      let indexDelete = listAccountState.findIndex(
        (account) => account.id === idDelete
      );
      listAccountState.splice(indexDelete, 1);

      return listAccountState;
      case TYPES.SEARCH_ACCOUNT:
        //   console.log("payload: ", action.payload);
        let idSearch = action.payload;
        let listAccountState1 = state;
        let indexSearch = listAccountState1.findIndex(
          (account) => account.id === idSearch
        );
        let newlist = [];
        listAccountState1.f(indexSearch, 1);
        newlist = listAccountState1.map(
          (acc) => acc.id ===idSearch)
          ;
        return newlist;
    default:
      return [...state];
  }
};

export default AccountReducer;


