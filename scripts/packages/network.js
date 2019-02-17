function networkHelp() {
  display = document.getElementById("hackerthing")
  display.innerHTML += "<br>> Command    | Usage                  | Description                "
  display.innerHTML += "<br>> list       | network list           | List available networks.   "
  display.innerHTML += "<br>> j          | network j    [network] | Join network.              "
  display.innerHTML += "<br>> i          | network i    [packet]  | Inject packet into network."
  display.innerHTML += "<br>> l          | network l              | Leave network.             <br>> "
}

function networkList() {
  display = document.getElementById("hackerthing")
  display.innerHTML += "<br>> Name                | Connection | Security "
  display.innerHTML += "<br>> KathyNet            | [|||||]    | WPA3     "
  display.innerHTML += "<br>> MaarBucks Free Wifi | [|oooo]    | NONE     "
  display.innerHTML += "<br>> EcksFinite Wifi     | [|||oo]    | WPA2     "
  display.innerHTML += "<br>> BFI Surveilance Van | [||ooo]    | WPA      <br>> "
}

var networks = {
  "KathyNet": {
    "password": "frodo42368"
  },
  "MaarBuck Free Wifi": {
    "password": null // set null if no password
  },
  "EcksFinite Wifi": {
    "password": "aHgr904K4h"
  },
  "BFI Surveilance Van": {
    "password": "BFI Top Secret Password"
  }
}
