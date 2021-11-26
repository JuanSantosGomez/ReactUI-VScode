const switchapp = (state = 'abs', action) => {
    switch(action.type){
        case 'SWITCHAPP':
            return action.payload
        default:
            return state
    }
}

export default switchapp;