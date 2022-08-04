(function () {
    var status = document.getElementById("status");
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //if dark mode is active
        status.innerHTML = "Dark mode is on";
    }
    else {
        //if dark mode is not active
        status.innerHTML = "Dark mode is off";
    }
})()
