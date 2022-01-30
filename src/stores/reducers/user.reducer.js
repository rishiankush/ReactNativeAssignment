const initialState = {
  weeklySpendingLimit: '5000',
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_WEEKLY_SPENDING_LIMIT':
      return {
        ...state,
        weeklySpendingLimit: payload
      }

    default:
      return state
  }
}

export default userReducer
