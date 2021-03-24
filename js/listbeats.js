 
var data=
`{
  "beats": [
    {
      "name": "9thsymphony"
    },
    {
      "name": "emphatic"
    },
    {
      "name": "stillwalking"
    },
    {
      "name": "sympathy"
    },
    {
      "name": "woodencross"
    }
]}
`;


readJSON(data);

function readJSON(data)
{
	info= JSON.parse(data);
	var flex = document.getElementById("flexcontainer");
	for (i = 0; i < info.beats.length; i++) {
		var div = document.createElement("div"); //div to hold img and info
		var img = document.createElement('img'); //holds img of object
    var name = document.createElement("h2");// text describing image
    var br = document.createElement("BR");
    img.src ="beats/".concat(info.beats[i].name).concat(".jpg");//obtaining image
    img.classList.add("fleximg");

    node=document.createTextNode(info.beats[i].name);
    name.appendChild(node);

    //append children to main div
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(br);

    /*create media player*/
    audio=document.createElement("audio");
    source=document.createElement("source");
    source.src="beats/".concat(info.beats[i].name).concat(".mp3");
    source.type="audio/mpeg";
    audio.id="audioPlayer"+i;
    audio.classList.add("audioPlayer");
    audio.appendChild(source);
    div.appendChild(audio);

    //add the item to the flexcontainer
    flex.appendChild(div);
    $('#audioPlayer'+i).mediaelementplayer();
  }
}

