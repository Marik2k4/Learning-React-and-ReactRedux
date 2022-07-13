// Первоначальное состояние 
const defaultState = {
  cash: 0
}

// action = {type:"", payload: "..."}

export const cashReducer = (state = defaultState, action) => {
    switch(action.type){
      case "ADD_CASH":
        // Возвращаем старое состояния и изменяем переменную cash 
        return {...state, cash: state.cash + action.payload}
      case "GET_CASH":
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }
}