//========================================================= DANGER ZONE BELOW ===========================================
var mode = "mirror"; // normal", "mirror", "redirect"
var data = 1; //specific to above mode, see below
/* Modes:
normal:
    normal, site should be loaded from github.com/t485/t485
    data variable is ignored and should be null
mirror:
    this is a mirror site, and should be loaded from the approiate mirror repo on github(if more than one exist)
    data should contain the mirror number(as a integer data type)
    the mirror number will be displayed in an alert
    
redirect:
    onle use if this is the website loaded from the normal repository, and is LOADED, but does not work(not live, etc.)
    data should contain a string with an url to redirect to. INCLUDE PROTOCOL, CURRENT PATH AUTOMATICALLY APPENDED, SO DO NOT INCLUDE TRAILING SLASH
*/
console.log(1);
if (mode === "redirect") {
    $(document).load(function() {
        $("#alertBox").html('<div class="alert alert-warning">' +
            '  <strong>Warning!</strong> You are being redirected to a mirror of t485.org because the main site is undergoing mantiance. If you are not automatically redirected in a few seconds, go to this URL: <a href="' + data + '">' + data + '</a>' +
            '</div>');
    });
    window.location.href = data + window.location.pathname;
}
else if (mode === "mirror") {
    $(document).load(function() {
        console.log(2);
        $("#alertBox").html('<div class="alert alert-warning">' +
            '  <strong>Warning!</strong> You are currently viewing mirror ' + data + ' of t485.org. If you got redirected here by typing in t485.org, then the t485.org main site is undergoing mantiance. This mirror is a fully functional version of the main site, except it may be outdated.' +
            '</div>');
    });
    console.log(3);
}
else {
    //assume mode is normal, don't do anything
}
// ====================================================== END DANGER ZONE - DANGER ZONE ABOVE ===========================
(() => {
    // remove leading slash
    let page = window.location.pathname.substr(1);

    Array.from(document.getElementsByTagName('a')).forEach(element => {
        if (page === element.getAttribute('href')) {
            element.parentElement.classList.add('active');
        } else {
            element.parentElement.classList.remove('active');
        }
    });

    document.getElementById('bs-example-navbar-collapse-1').classList.remove('in');
})


/* Initializers */

// Back to top button animation
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#toTop').fadeIn(3000);
    } else {
        $('#toTop').fadeOut();
    }
});


// Set LESS async to true to prevent warning on Chrome
less = {async: true};



// Fix dropdown menu bug on iOS
$('.dropdown a').click(function() {
    if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
    } else {
        $('.dropdown').removeClass('open');
        $(this).parent().addClass('open');
    }
});




/* Helpers */


// Checks if the user is logged in
function auth(onAuthed = () => {}, onUnauthed = () => {}) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            onAuthed(user);
        } else {
            onUnauthed();
        }
    });
}

$('#eel-289371845').click(() => window.location.href = 'easter-eggs.html');


// Source: http://www.w3schools.com/js/js_cookies.asp
function setCookie(e,o,i){if(null===i||''===i||'browser'===i||0===i)document.cookie=e+'='+o+'; ';else{var t=new Date;t.setTime(t.getTime()+24*i*60*60*1e3);var n='expires='+t.toUTCString();document.cookie=e+'='+o+'; '+n}}


function getCookie(t){for(var n=t+'=',r=document.cookie.split(';'),e=0;e<r.length;e++){for(var i=r[e];' '==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return''}


function getVarsFromUrl() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function generateEEID(s1, s2, s3, s4, callback2 = () => {}, uid) {
    firebase.database().ref("/ee/u/" + uid + "/ueeid/").once("value").then(function(snapshot) {
        var data = snapshot.val();
        if (data === null) {
            callback2(".ERROR/User-Not-Registered");
        }
        else {
            callback2(data[0] + s1 + "-" + data[1] + s2 + "-" + data[2] + s3 + "-" + data[3] + s4);
        }
    });
}


// Fisher-Yates shuffle
function generateRandomNums(r){for(var a=[],n=0;r>n;n++)a[n]=n;for(var o,e,t=r;t;)e=~~(Math.random()*t),t-=1,o=a[t],a[t]=a[e],a[e]=o;return a}


// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function countdown(n,t,e){function o(){a=n-((Date.now()-c)/1e3|0),u=a/60|0,w=a%60|0,u=10>u?'0'+u:u,w=10>w?'0'+w:w,t.textContent=u+':'+w,0>=a&&('reset'===e||null===e?c=Date.now()+1e3:e())}var a,u,w,c=Date.now();o(),setInterval(o,1e3)}


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQuery(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=c.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}


// Code from https://gist.github.com/andrei-m/982927#file-levenshtein-js
function compare(t,n){if(0==t.length)return n.length;if(0==n.length)return t.length;var r,e=[];for(r=0;r<=n.length;r++)e[r]=[r];var h;for(h=0;h<=t.length;h++)e[0][h]=h;for(r=1;r<=n.length;r++)for(h=1;h<=t.length;h++)n.charAt(r-1)==t.charAt(h-1)?e[r][h]=e[r-1][h-1]:e[r][h]=Math.min(e[r-1][h-1]+1,Math.min(e[r][h-1]+1,e[r-1][h]+1));return e[n.length][t.length];}






