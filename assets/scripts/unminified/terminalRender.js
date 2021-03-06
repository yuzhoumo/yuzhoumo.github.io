// Sets terminal theme about card title on window resize
function renderTerminal() {
    var x = document.getElementById("terminal-body").offsetWidth;
    var y = document.getElementById("terminal-body").offsetHeight;

    if (x >= 486) {
            document.getElementById("terminal-titletext").innerHTML = 'bash -- server@berkeley.edu: - ' + Math.floor(x/11) + 'x' + Math.round(y/22);
            document.getElementById("terminal-profilepic").style.width = '200px';
    } else {
            document.getElementById("terminal-titletext").innerHTML = 'bash - ' + Math.floor(x/11) + 'x' + Math.round(y/22);
            document.getElementById("terminal-profilepic").style.width = '100%';
    }
}

window.onresize = function(event) {
    renderTerminal();
};

window.onload = function(event) {
    renderTerminal();
};