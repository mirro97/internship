function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
  // console.log("initIncludeAfter");
  // var event = new Event("initIncludeAfter");
  // window.dispatchEvent(event);
  initHambugerMenu();
}

function checkAgent() {
  // 익스플로러 체크

  var agent = navigator.userAgent.toLowerCase();
  if (
    (navigator.appName == "Netscape" &&
      navigator.userAgent.search("Trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    return "ie";
  }
  // 크롬 체크
  else if (agent.indexOf("chrome") != -1) {
    return "chrome";
  }
  // 사파리나 체크
  else if (agent.indexOf("safari") != -1) {
    return "safari";
  }

  // 파이어폭스 체크
  else if (agent.indexOf("firefox") != -1) {
    return "firefox";
  }
}
