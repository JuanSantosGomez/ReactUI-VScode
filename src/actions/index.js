export const changetheme = themes =>{
    console.log(themes)
    return {
        type:"THEMECHANGE",
        payload: themes
    };
}; 