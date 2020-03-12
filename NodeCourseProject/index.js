let userArray = [];

var PlayerObject = function (pPlayerID, pName) {
    this.PlayerID = pPlayerID;
    this.PlayerName = pName;
   
}

player0 = new PlayerObject(0, "firstperson");
player1 = new PlayerObject(1, "secondperson");
player2 = new PlayerObject(2, "thirdperson");

userArray.push(player0);
userArray.push(player1);
userArray.push(player2);

console.log(userArray);

$(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
    document.getElementById("IDparmHere").innerHTML = "";
    createList();
});

function createList(){

var ul = document.createElement('ul');
userArray.forEach(function (element,) {   // use handy array forEach method
    var li = document.createElement('li');
    // add player names with an anchor to get to next "page"  #pickbet
    // use the html5 all purpose data-parm to set and pass along, the playerID for the li that is clicked
    li.innerHTML = "<a data-transition='pop' class='onePlayer' data-parm=" + element.PlayerID + " href='#page3'> Jump </a> " + element.PlayerName;
    ul.appendChild(li)

});
      //$("#notes").listview('refresh');  // maybe ?need this so jquery mobile will apply the styling to the newly added li's  
      divUserlist.appendChild(ul);