type ActionsType = ChangeMaxValueActionType | ChangeMinValueActionType | ChangeValuesActionType
    | ClickIncActionType | ClickResetActionType

export type CounterVariablesType = {
    maxValue: number
    minValue: number
    value: number
    error: string
    errorWarning: string,
    messageAfterError: string
}

const initialState: CounterVariablesType = {
    maxValue: 5,
    minValue: 0,
    value: 0,
    error: "",
    errorWarning: 'Incorrect value!',
    messageAfterError: 'Enter values and press "set"'
}

export const counterReducer = (state = initialState, action: ActionsType): CounterVariablesType => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE": {
            if (action.newMaxValue <= state.minValue || action.newMaxValue < 0 || state.minValue < 0) {
                return {...state, maxValue: action.newMaxValue, error: state.errorWarning}
            } else {
                return {...state, error: state.messageAfterError, maxValue: action.newMaxValue}
            }

        }
        case "CHANGE-MIN-VALUE": {
            if (action.newMinValue >= 0 && action.newMinValue < state.maxValue) {
                return {...state, error: state.messageAfterError,  minValue: action.newMinValue}
            } else {
                return {...state, error: state.errorWarning, minValue: action.newMinValue}
            }
        }
        case "CHANGE-VALUES": {
            return {...state, error: '', value: state.minValue}
        }
        case "CLICK-INK": {
            return  {...state, value: state.value +1 }
        }
        case "CLICK-RESET": {
            return  {...state, value: state.minValue }
        }
        default:
            return state;
    }
}

export const changeMaxValueAC = (newMaxValue: number) => (
    {type: 'CHANGE-MAX-VALUE', newMaxValue}
) as const

export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>;


export const changeMinValueAC = (newMinValue: number) => (
    {type: 'CHANGE-MIN-VALUE', newMinValue}
) as const

export type ChangeMinValueActionType = ReturnType<typeof changeMinValueAC>;

export const changeValuesAC = () => (
    {type: 'CHANGE-VALUES'}
) as const

export type ChangeValuesActionType = ReturnType<typeof changeValuesAC>;


export const clickIncAC = () => (
    {type: 'CLICK-INK'}
) as const

export type ClickIncActionType = ReturnType<typeof clickIncAC>;

export const clickResetAC = () => (
    {type: 'CLICK-RESET'}
) as const

export type ClickResetActionType = ReturnType<typeof clickResetAC>;





