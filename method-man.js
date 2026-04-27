function words(str){
    return str.split(" ");
}
function sentence(arr){
    return arr.join(" ")
}
function yell(str){
    return str.toUpperCase()
}
function whisper(str){
    return str.toLowerCase()
}
function capitalize(str){
    let upperletter = str[0].toUpperCase();
    let lowerchars = str.slice(1).toLowerCase();
    return upperletter + lowerchars
}
