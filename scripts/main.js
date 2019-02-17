window.addEventListener("keypress", function(e) {
  addToScreen(e.key)
})

function addToScreen(id) {
  var ht = document.getElementById("hackerthing")
  if (id == "Enter") {
    runCode()
    return;
  }
  ht.innerHTML += id
}

function runCode() {
  var code = document.getElementById("hackerthing").innerHTML
  code = code.split("<br>&gt; ")
  execCode(code[code.length - 1])
}

function execCode(code) {
  display = document.getElementById("hackerthing")
  if (code == "help") {
    display.innerHTML += "<br>> help    - show this menu."
    display.innerHTML += "<br>> yearn   - The best package manager for YouNicks. Use `yearn -h` for a list of commands.<br>> "
    if (player.packages.indexOf("network") > -1) display.innerHTML += "network - Connect to the world! use `network -h` for commands.<br>> "
  } else if (code == "yearn -h") {
    yearnHelp()
  } else if (code.startsWith("yearn i ")) {
    code = code.substring(8)
    yearnInstall(code)
  } else if (code == "yearn list") {
    yearnList()
  } else if (code.startsWith("yearn r ")) {
    code = code.substring(8)
    yearnRemove(code)
  } else if (code == "network -h") {
    if (player.packages.indexOf("network") > -1) {
      networkHelp()
    } else {
      display.innerHTML += "<br>> (!) ERROR: Undefined command. (!)<br>> "
    }
  } else if (code == "network list") {
    if (player.packages.indexOf("network") > -1) {
      networkList()
    } else {
      display.innerHTML += "<br>> (!) ERROR: Undefined command. (!)<br>> "
    }
  } else {
    display.innerHTML += "<br>> (!) ERROR: Undefined command. (!)<br>> "
  }
}

var player = {

  knownCommands: [],

  packages: []

}
