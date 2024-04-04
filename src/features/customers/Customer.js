import { useSelector } from "react-redux";

function Customer() {
  // customer потому что в const rootReducer = combineReducers({
  //   account: accountReducer,
  //   customer: customerReducer
  // });
  const customer = useSelector(store => store.customer.fullName) ;
  return <h2>👋 Welcome, {customer || "user"} </h2>;
}

export default Customer;
