function openTableft(event, tabName) {
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("content-top-left_user-score");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    // document.getElementsByClassName(tabName).style.color="red";
    event.currentTarget.className += " active";
}
function openTabright(event,tabName){
    const tabcontent = document.getElementsByClassName("content-top-right-tab");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinksright");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    // document.getElementsByClassName(tabName).style.color="red";
    event.currentTarget.className += " active";
}

// Show the default tab
document.getElementById("status").style.display = "block";
document.getElementById("lylich").style.display = "block";
//   document.getElementsByClassName("tablinks")[0].className += " active";
