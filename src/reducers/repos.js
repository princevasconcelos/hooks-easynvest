const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAVE':
            return action.payload
        default:
            return state
    }
}

export const saveRepos = payload => ({
    type: 'SAVE',
    payload
})