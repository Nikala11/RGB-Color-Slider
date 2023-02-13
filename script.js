function colors() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    document.body.style.backgroundColor = 'RGB(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("output").innerHTML = 'RGB(' + red + ',' + green + ',' + blue + ')';
}