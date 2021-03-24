/*
var json = $.getJSON("shop/shop.json",function (data) {

});
alert ("hellojson");
*/
var data=
`{
  "shop": [
    {
      "name": "PARANORMAL CYCLONE",
      "type": "Guitar",
      "price": 270,
      "features": [
        "Vintage-style tremolo bridge",
        "24.75” scale length",
        "Fender-Designed alnico pickups with individual switching"
      ]
    },
    {
      "name": "PARANORMAL SUPER-SONIC",
      "type": "Guitar",
      "price": 350,
      "features": [
        "Reverse offset body shape",
        "Squier Atomic humbucking pickups",
        "Vintage-style tremolo bridge"
      ]
    },
    {
      "name": "Fender Frontman 10G",
      "type": "Amplifier",
      "price": 95,
      "features": [
        "10 Watts",
        "1-6 Fender Special Design Speaker",
        "Controls: Gain, Over-Drive Select Switch, Volume, Treble, Bass"
      ]
    },
    {
      "name": "PARANORMAL CABRONITA TELECASTER",
      "type": "Guitar",
      "price": 420,
      "features": [
        "Semi-hollow Telecaster body",
        "Fender-Designed alnico single-coil Jazzmaster pickups",
        "Single-ply Cabronita pickguard"
      ]
    },
    {
      "name": "CT-60S",
      "type": "Guitar",
      "price": 320,
      "features": [
        "Travel body style",
        "Mahogany back and sides",
        "Easy-to-play neck with rolled fingerboard edges"
      ]
    },
    {
      "name": "CP-100 PARLOR",
      "type": "Guitar",
      "price": 290,
      "features": [
        "Semi-hollow Telecaster body",
        "Fender-Designed alnico single-coil Jazzmaster pickups",
        "Single-ply Cabronita pickguard"
      ]
    },
    {
      "name": "Les Paul Standard 60s",
      "type": "Guitar",
      "price": 900,
      "features": [
        "Les Paul body",
        "Nickle Finish",
        "Single-ply Cabronita pickguard"
      ]
    },
    {
      "name": "Black Spirit 200",
      "type": "Amplifier",
      "price": 1000,
      "features": [
        "4 channels: Clean, Crunch, Lead, Ultra",
        "Headphones out",
        "strictly analog"
      ]
    },
    {
      "name": "GuitarMate 15 Watt",
      "type": "Amplifier",
      "price": 800,
      "features": [
        "Class A Tube Guitar Amplifier",
        "Controls: Gain, Bass, Mid, Treble, Master, Reverb",
        "Switches: USA, Pure, Brit"
      ]
    },
    {
      "name": "Traynor Vintage 120 Watt",
      "type": "Amplifier",
      "price": 900,
      "features": [
        "Cabinet Program Power (Watts): 150",
        "Cabinet Impedance (Ohms): 8",
        "Speaker Configuration: 2 x 12-inch Celestion Vintage 30"
      ]
    },
    {
      "name": "Bose S1 Pro",
      "type": "PA Speaker",
      "price": 750,
      "features": [
        "High-output sound ",
        "Lightweight, ultra-portable enclosure",
        "Onboard 3-channel"
      ]
    },
    {
      "name": "Parasource 1600 Watt",
      "type": "PA Speaker",
      "price": 1100,
      "features": [
        "Integrated 800-Watt, 1600 Watts peak",
        "Advanced high-efficiency",
        "German-made 1-inch HF"
      ]
    },
    {
      "name": "NX Series 2000 Watt",
      "type": "PA Speaker",
      "price": 980,
      "features": [
        "Active",
        "N1000 Watts (2000 Watts Peak)",
        "134dB Peak SPL"
      ]
    }

  ]
}
`;






readJSON(data,'all');
//function() {obtainList()};
//function obtainList() 

function readJSON(data,type)
{ 
  //this will allow quickview to refresh every time the list has changed
  var s=document.getElementById("refreshable");
  s.remove();
  var s = document.createElement('script');
  s.id="refreshable";
  s.src = 'js/quickview/quickview.js';
  document.body.appendChild(s);


	info= JSON.parse(data);
	var flex = document.getElementById("flexcontainer");
	for (i = 0; i < info.shop.length; i++) {
    if (type=='all'|| type == info.shop[i].type){
  		var div = document.createElement("div"); //div to hold img and info

      var img = document.createElement('img'); //holds img of object
      var name = document.createElement("p");// text describing image
      var price = document.createElement("p");
      var br = document.createElement("BR");
      img.src ="shop/".concat(info.shop[i].name).concat(".png");//obtaining image
      img.classList.add("fleximg");
      

      /*    adds specific info for each element   */
      node=document.createTextNode(info.shop[i].name);
      name.appendChild(node);
      node=document.createTextNode("Price: $"+info.shop[i].price);
      price.appendChild(node); 
      div.className="cd-item";

      //add image quick view
      link=document.createElement("a");
      link.href="#"+i;
      link.classList.add("cd-trigger");

      div.appendChild(img);
      link.appendChild(name);
      div.appendChild(link);
      div.appendChild(br);
      div.appendChild(price);
      flex.appendChild(div);
  		console.log(info.shop[i].name);
    }
  }
}

function Filter(type) {
  const myNode = document.getElementById("flexcontainer");
  myNode.innerHTML = '';
  readJSON(data,type);

}


function Reset(){
  const myNode = document.getElementById("flexcontainer");
  myNode.innerHTML = '';
  readJSON(data,'all');

}

function setinfo(index)
{// this function will set the information for the quickview
  re= /#(\d*)/;//regex to find # coupled with a number of 1 or more digits
  i=re.exec(index)[1];
  info= JSON.parse(data);
  divimg = document.getElementById("selected");
  img=divimg.children[0];
  img.src= "shop/".concat(info.shop[i].name).concat(".png");

  // info printing on the quick view depending on the item type
  info_div=document.getElementById("info");
  info_div.children[0].innerHTML=info.shop[i].name;
  info_div.children[1].innerHTML = "Product Type: "+ info.shop[i].type;
  info_div.children[2].innerHTML= "Features: " +info.shop[i].features.toString();
  info_div.children[3].innerHTML= "$"+info.shop[i].price;

}