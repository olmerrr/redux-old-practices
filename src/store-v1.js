import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: ""
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: ""
}
function accountReducer(state = initialStateAccount, action) {
  switch ( action.type ) {
    case "accounts/deposit":
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case "accounts/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case "accounts/requestLoan":
      if ( state.loan > 0 ) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      }
    case "accounts/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan
      }
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch ( action.type ) {
    case "customers/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt
      }
    case "customers/updateName":
      return {
        ...state,
        fullName: action.payload.fullName
      }
    default : return state;
  }
}

// actions creators
function deposit(amount) {
  return { type: "accounts/deposit", payload: amount }
}

function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount }
}

function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose
    }
  }
}

function payLoan() {
  return { type: "accounts/payLoan" }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});
const store = createStore(rootReducer);

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(2000, "Buy car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Mike Tyson", "123456"));
console.log(store.getState());

store.dispatch(deposit(250));
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {type: "customers/createCustomer", payload:
      {
        fullName,
        nationalID,
        createdAt: new Date().toISOString()
      }}
}

function updateName(fullName) {
  return {type: "customers/updateName", payload: fullName }
}

export default store;

