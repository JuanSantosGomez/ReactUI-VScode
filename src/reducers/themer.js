const themer = (state = 'basic', action) => {
    switch(action.type){
        case 'THEMECHANGE':
            return action.payload
        default:
            return state
    }
}

export default themer;