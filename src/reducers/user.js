
const INITIAL_STATE = {
    name: 'Nome inicial',
    age: 28
}

export default function(state = INITIAL_STATE, { type, payload }) {
    console.log(payload)
    switch(type) {
        case 'ADD': 
            return {...state, name: payload}
        default:
            return state
    }
}

export const addUser = (payload) => ({
    type: 'ADD',
    payload
})