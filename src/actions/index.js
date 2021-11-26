export const changetheme = themes =>{
    return {
        type:"THEMECHANGE",
        payload: themes
    };
}; 

export const switchapp = windo =>{
    return {
        type:"SWITCHAPP",
        payload: windo
    }
}