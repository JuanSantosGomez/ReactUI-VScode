const themer = (state = 'basic', action) => {
    switch(action.type){
        case 'THEMECHANGE':
            return action.payload
        default:
            return 'basic'
    }
}

export default themer;