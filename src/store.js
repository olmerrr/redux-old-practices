import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ""
};

function reducer(state = initialState, action) {
  switch ( action.type ) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case "account/requestLoan":
      if ( state.loan > 0 ) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      }
    case "account/payLoan":
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

const store = createStore(reducer);
// store.dispatch({type: "account/deposit", payload: 500});
// store.dispatch({type: "account/requestLoan", payload: {amount: 1000, purpose: "Buy a car"}});

// const
const ACCOUNT_DEPOSIT= "account/deposit";
const ACCOUNT_WITHDRAW= "account/withdraw";
const ACCOUNT_REQUEST_LOAN= "account/requestLoan";
const ACCOUNT_PAY_LOAN= "account/payLoan";

// actions creators
function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount }
}

function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount }
}

function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: {
      amount: amount,
      purpose: purpose
    }
  }
}

function payLoan() {
  return { type: ACCOUNT_PAY_LOAN }
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(2000, "Buy car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
export default store;