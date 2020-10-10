// arg0 Pure Javascript | Start |
var minifiedJS = document.getElementById("stl-f");
var flipper = document.getElementById('flipper');
startPiston();
var arg0restarter
desktopTogglerChk = 0;
v0lumeChk = 0;
logoChk = 0;
togglerChk = false;

window.onscroll = function () { myFunction() };

function myFunction() {
    var navScroll = document.getElementById("navBG");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && desktopTogglerChk == 0) {
        navScroll.classList.remove('arg0transparent');
        navScroll.classList.add('arg0dark');
    }
    else {
        navScroll.classList.add('arg0transparent');
        navScroll.classList.remove('arg0dark');
    }
}

function arg0_toggler(x) {
    togglerActive();
    var image = document.getElementById('switchBlack');
    var fullNav = document.getElementById('fullNav');
    if (logoChk == 0) {
        image.src = "/assets/materials/svg/logo-b.svg";
        fullNav.classList.add('visible');
        logoChk = 1;
    } else {
        image.src = "/assets/materials/svg/logo.svg";
        logoChk = 0;
        fullNav.classList.remove('visible');
    }
    x.classList.toggle("flip");

}

function closeToggler() {
    var image = document.getElementById('switchBlack');
    var fullNav = document.getElementById('fullNav');
    image.src = "/assets/materials/svg/logo.svg";
    logoChk = 0;
    fullNav.classList.remove('visible');
    togglerActive();
    flipper.classList.remove("flip");
}

function togglerActive() {
    var navScroll = document.getElementById("navBG");
    if (togglerChk == false) {
        togglerChk = true;
        desktopTogglerChk = 1;
        navScroll.classList.add('arg0transparent');
        navScroll.classList.remove('arg0dark');
    } else {
        togglerChk = false;
        desktopTogglerChk = 0;
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 && togglerChk == false) {
            navScroll.classList.remove('arg0transparent');
            navScroll.classList.add('arg0dark');
        } else {
            navScroll.classList.add('arg0transparent');
            navScroll.classList.remove('arg0dark');
        }   
    }
}

function startPiston() {
    minifiedJS.style.borderWidth = "0px";
    setTimeout(function () { minifiedJS.style.borderWidth = "10px"; }, 2500);
    setTimeout(function () { minifiedJS.style.borderWidth = "40px"; minifiedJS.style.borderColor = "#EBB543" }, 4000);
    setTimeout(function () { minifiedJS.style.borderWidth = "25px"; minifiedJS.style.borderColor = "#FFFFFF" }, 6000);
    arg0restarter = setTimeout(startPiston, 8000);
}


visible = false;
btnCheck = false;
slip = 0;
chText = 1;
var arg0ChTxt = document.getElementById('ch-txt');
var arg0ChTxt0ld = arg0ChTxt.innerHTML;

function loadMore() {
    if (visible == false && btnCheck == false) {
        if (chText == 0) {
            arg0ChTxt.innerHTML = arg0ChTxt0ld;
        } else {

        }
        loadSpin();
        remover();
        loadChunk();
        visible = true;
        btnCheck = true;
        slip = 1;
    } else {
        {
            if (visible == true && btnCheck == true) {
                loadSpin();
                remover();
                loadChunkTwo();
                setTimeout(function () { stop(); }, 500);
                process = 0;
                visible = false;
                btnCheck = false;
                slip = 1;
                chText = 1;
            }
        }
    }

}

function remover() {
    if (slip == 0) {
        setTimeout(function () {
            lazyLoad.classList.remove("dot", "fas", "fa-spinner", "fa-spin");
            lazyLoad.classList.add("dot", "fas", "fa-plus");
        }, 500);
    } else {
        setTimeout(function () {
            lazyLoad.classList.remove("dot", "fas", "fa-spinner", "fa-spin");
            lazyLoad.classList.add("dot", "fas", "fa-minus");
        }, 500);
        slip = 0;
    }
}

function loadSpin() {
    var lazyLoad = document.getElementById("lazyLoad");
    lazyLoad.classList.remove("dot", "fas", "fa-plus");
    lazyLoad.classList.add("dot", "fas", "fa-spinner", "fa-spin");
}

function loadChunk() {
    var seeMore = document.getElementById("loadChunk");
    seeMore.style.display = "-webkit-flex";
    setTimeout(function () { seeMore.classList.add('loadChunk'); }, 500);
}

function loadChunkTwo() {
    var seeMore = document.getElementById("loadChunkTwo");
    seeMore.style.display = "-webkit-flex";
    setTimeout(function () { seeMore.classList.add('loadChunkTwo'); }, 500);
}

function stop() {
    visible = false;
    btnCheck = false;
    slip = 0;
    if (chText == 1) {
        arg0ChTxt.innerHTML = "See Less";
        chText = 0;
    } else {
    }
    document.getElementById("continue").onclick = forward;
}

function forward() {

    document.getElementById('loadChunk').classList.add('loadChunkStop');
    document.getElementById('loadChunkTwo').classList.add('loadChunkStop');
    setTimeout(function () { document.getElementById('loadChunk').style.display = "none"; }, 700);
    setTimeout(function () { document.getElementById('loadChunkTwo').style.display = "none"; }, 700);
    process = 1;
    slip = 0;
    visible = false;
    btnCheck = false;
    document.getElementById('continue').onclick = reStart;
}

function reStart() {
    if (process == 1) {
        var seeMore = document.getElementById("loadChunk");
        var seeMore2 = document.getElementById("loadChunkTwo");
        document.getElementById('loadChunk').classList.remove('loadChunkStop');
        document.getElementById('loadChunkTwo').classList.remove('loadChunkStop');
        seeMore2.classList.remove('loadChunkTwo');
        seeMore.classList.remove('loadChunk');
        document.getElementById('continue').onclick = loadMore;
    } else {

    }
}

function v0lume() {
    var v0lume = document.getElementById('v0lume');
    var v0lumeM = document.getElementById('v0lume-M');
    var vid = document.getElementById('v0lumeControl');
    if (v0lumeChk == 0) {
        v0lume.classList.remove('fa-volume-muted');
        v0lume.classList.add('fa-volume-up');
        v0lumeM.classList.remove('fa-volume-muted');
        v0lumeM.classList.add('fa-volume-up');
        v0lumeChk = 1;
        vid.muted = false;
    }
    else {
        v0lume.classList.remove('fa-volume-up');
        v0lume.classList.add('fa-volume-mute');
        v0lumeM.classList.remove('fa-volume-up');
        v0lumeM.classList.add('fa-volume-mute');
        v0lumeChk = 0;
        vid.muted = true;
    }
}
// arg0 Pure Javascript | End |

// smoothScroll-Es5.js | Start |

"use strict";
window.addEventListener("load", function () {
    function scrollIt(destination, duration, easing) {
        if (destination == null) {
            console.log("scroll destination: " + destination);
            return;
        }
        var easings = {
            "linear": function (t) {
                return t;
            },
            "smooth": function (t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
        };

        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            return;
        }

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (Math.abs(window.pageYOffset - destinationOffsetToScroll) < 1) {
                return;
            }
            requestAnimationFrame(scroll);
        }
        scroll();
    }

    var all_scroll_on_click_elements = document.getElementsByClassName("scrollOnClick");
    if (all_scroll_on_click_elements.length != 0) {
        for (var i = 0; i < all_scroll_on_click_elements.length; i++)
            all_scroll_on_click_elements[i].addEventListener('click',
                function (e) {
                    var d = e.currentTarget;
                    var duration = d.getAttribute("duration");
                    if (duration == "" || duration == null) duration = 500;
                    duration = parseInt(duration);
                    var easing = d.getAttribute("easing");
                    if (easing == "" || easing == null) easing = "smooth";
                    var id = d.getAttribute("scrollTo");
                    scrollIt(
                        document.getElementById(id),
                        duration,
                        easing
                    );
                });
    } else {
        console.log("WARNING: No elements with class scrollOnClick found.");
    }
});

// smoothScroll-Es5.js | End |


function submitUserForm() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}
 
function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
}