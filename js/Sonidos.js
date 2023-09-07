if (urlActual.includes("BlogsPages")) {
    var pop = new Audio('../../Audios/pop.mp3');
    var click = new Audio('../../Audios/click.mp3');
} else {
    var pop = new Audio('./Audios/pop.mp3');
    var click = new Audio('./Audios/click.mp3');
}

function reproducirPop(){
    pop.play();
}
function reproducirClick(){
    click.play();
}