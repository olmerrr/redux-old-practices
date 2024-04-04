const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: ""
}
export default function customerReducer(state = initialStateCustomer, action) {
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
export function createCustomer(fullName, nationalID) {
  return {type: "customers/createCustomer", payload:
      {
        fullName,
        nationalID,
        createdAt: new Date().toISOString()
      }}
}

export function updateName(fullName) {
  return {type: "customers/updateName", payload: fullName }
}
