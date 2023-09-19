document.getElementById("menu").onclick = function () {
    document.getElementById("menus").style.visibility = "visible";
}
document.getElementById("close").onclick = function () {
    document.getElementById("menus").style.visibility = "hidden";
}
let scrollheight = Math.max(document.body.scrollHeight);
console.log(scrollheight)
onload = function () {
    this.document.getElementById("txtabout").style.opacity = 0;
    this.document.getElementById("imgabout").style.opacity = 0;
    this.document.getElementById("serv1").style.opacity = 0;
    this.document.getElementById("serv2").style.opacity = 0;
    this.document.getElementById("serv3").style.opacity = 0;
    this.document.getElementById("serv4").style.opacity = 0;
    this.document.getElementById("h3").style.cssText = `
    transform: translateY(60px);
    opacity:0;
    `;
    this.document.getElementById("p").style.cssText = `
    transform: translate(-50%,60px);
    opacity:0;
    `;
    this.document.getElementById("h6").style.cssText = `
    transform: translateY(60px);
    opacity:0;
    `;
}
onscroll = function () {
    if (this.scrollY > 200) {
        this.document.getElementById("txtabout").style.opacity = 1;
        this.document.getElementById("txtabout").style.transitionDuration = "1s";

        this.document.getElementById("imgabout").style.opacity = 1;
        this.document.getElementById("imgabout").style.transitionDuration = "1s";
    }
    if (this.scrollY > 600) {
        this.document.getElementById("serv1").style.opacity = 1;
        this.document.getElementById("serv1").style.transitionDuration = "1s";
        this.document.getElementById("serv2").style.opacity = 1;
        this.document.getElementById("serv2").style.transitionDuration = "1.5s";
        this.document.getElementById("serv3").style.opacity = 1;
        this.document.getElementById("serv3").style.transitionDuration = "2s";
        this.document.getElementById("serv4").style.opacity = 1;
        this.document.getElementById("serv4").style.transitionDuration = "2.5s";
    }
    if (this.scrollY > 1300) {
        this.document.getElementById("h3").style.cssText = `
        transition:1s;
        transform: translateY(0px);
        opacity:1;
    `;
        this.document.getElementById("p").style.cssText = `
        transition:1s;
        transform: translate(-50%,0px);
        opacity:1;
    `;
        this.document.getElementById("h6").style.cssText = `
        transition:1s;
        transform: translateY(0px);
        opacity:1;
    `;
    }

}
