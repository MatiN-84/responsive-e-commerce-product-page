
const changeImage = (action:"MINUS"|"PLUS", imageCode:number) => {
    if(action === "MINUS"){
        imageCode = (imageCode - 1 + 4) % 4;
    }else{
        imageCode = (imageCode + 1) % 4;
    }
    return imageCode;
};



export {changeImage }