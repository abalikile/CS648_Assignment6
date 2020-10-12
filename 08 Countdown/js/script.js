var i = parseInt(window.prompt("enter the number"));
if(i<0){
    window.alert("enter a valid number greater than zero");
}
else{
    for(; i>=0; i--){
        /*
        To print the values in browser window.
        document.write(i + "<br>");
    */
        window.console.log(i);
    }
}
