import { useSelector } from "react-redux";

function Customer() {
  // customer потому что в const rootReducer = combineReducers({
  //   account: accountReducer,
  //   customer: customerReducer
  // });
  const customer = useSelector(store => store.customer.fullName);
  console.log(customer)
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
