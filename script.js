
var arti = document.getElementsByClassName('arti');
function rtl() {
    for (let index = 0; index < arti.length; index++) {


        if (arti[index].getAttribute("dir") == "rtl") {

            arti[index].setAttribute('dir', 'ltr');
            outertion();
        } else {
            arti[index].setAttribute('dir', 'rtl');
            insertion();

        }
    }
}










