import {produce} from 'immer'

const initialState =  []
// reducer
function clickReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return produce(state, (draftState) => {
                draftState.unshift(action.payload)
            })
            case 'DELETE_TODO':
               return produce(state, (draftState, actionDraft = action) =>{
                return draftState.filter(el => el.id !== actionDraft.payload.id)
            })
            case 'TOGGLE_STATUS':
                return produce(state, draftState => {
                    return draftState.map(item => {
                        if (item.id === action.payload.id) {
                            return produce(item, (draftState) => {
                                draftState.completed = !item.completed
                            })
                        }
                        return item
                    } )
                })
                 
                
                
            default:
            return state
    }    
}
export default clickReducer
