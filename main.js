var commissionStatus = false;
if (commissionStatus == false) {
    var commissionStatusAlert = "Commissions are currently closed at the moment.";
}
function addRemoveNav() {
    if (window.getComputedStyle(document.getElementsByTagName("ul")[0]).display == "block") {
        document.getElementsByTagName("ul")[0].style.display = "none";
        document.getElementById("addRemoveNav").style.display = "inline-block";
        document.getElementById("addRemoveNav").innerHTML = "<";
        document.getElementsByTagName("nav")[0].style.width = "25px";
    } else if (window.getComputedStyle(document.getElementsByTagName("ul")[0]).display == "none") {
        document.getElementsByTagName("ul")[0].style.display = "block";
        document.getElementById("addRemoveNav").innerHTML = "x";
        document.getElementsByTagName("nav")[0].style.width = "30vw"
    }
}