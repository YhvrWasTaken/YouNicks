function yearnHelp() {
  display = document.getElementById("hackerthing")
  display.innerHTML += "<br>> Command    | Usage                | Description              "
  display.innerHTML += "<br>> list       | yearn list           | List available packages. "
  display.innerHTML += "<br>> i          | yearn i    [package] | Install Package.         "
  display.innerHTML += "<br>> r          | yearn r    [package] | Uninstall Package.       <br>> "
}

function yearnInstall(package) {
  display = document.getElementById("hackerthing")
  if (!player.packages.indexOf(package) > -1 && yearnPackages.indexOf(package) > -1) {
    player.packages.push(package)
    player.knownCommands.push(package)
    display.innerHTML += "<br>> Installed " + package + ".<br>> "
  } else {
    display.innerHTML += "<br>> (!) ERROR-YEARN: Package installed or Unknown Package. (!)<br>> "
  }
}

function yearnList() {
  display = document.getElementById("hackerthing")
  display.innerHTML += "<br>> Package / Installed / Description"
  yearnPackages.forEach(function(item) {
    display.innerHTML += String("<br>> " + item + " / " + Boolean(player.packages.indexOf(item) > -1) + " / " + yearnDescriptions[item])
  })
}

function yearnRemove(package) {
  display = document.getElementById("hackerthing")
  if (player.packages.indexOf(package) > -1 && yearnPackages.indexOf(package) > -1) {
    player.packages = player.packages.filter(v => v !== package);
    display.innerHTML += "<br>> Removed " + package + ".<br>> "
  } else {
    display.innerHTML += "<br>> (!) ERROR-YEARN: Package not installed or Unknown Package. (!)<br>> "
  }
}

var yearnDescriptions = {
  "network": "Connect to the world in YouNicks! Use `yearn i network` to start.<br>> "
}

var yearnPackages = ["network"]
