import * as TYPES from "../Contant/ActionType"; // Import acctionType đê sử dụng

var initialState = [];

const DepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_DEPARTMENT_LIST:
      //   console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};

export default DepartmentReducer;


