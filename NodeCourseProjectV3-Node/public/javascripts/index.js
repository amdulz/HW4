
let comicArray = [];
let selectedFormat = "not selected";



var ComicObject = function (pTitle, pIssue, pPublisher, pFormat, pDescription) {
  this.Title = pTitle;
  this.Issue = pIssue;
  this.Publisher = pPublisher;
  this.Format = pFormat;
  this.Description = pDescription;
}

FillArrayFromServer(); 



document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("buttonAdd").addEventListener("click", function () {
    let newComic = new ComicObject(document.getElementById("title").value, document.getElementById("issue").value, document.getElementById("publisher").value,
       selectedFormat, document.getElementById("description").value);
       addNewComic(newComic);
    });


    
    $(document).bind("change", "#select-format", function (event, ui) {
      selectedFormat = $('#select-format').val();
    });


  document.getElementById("buttonSortPublisher").addEventListener("click", function () {
    comicArray = comicArray.sort(comparePublisher);
    createList();
  });


  document.getElementById("buttonDelete").addEventListener("click", function () {
    let deleteTitle = document.getElementById("deleteTitle").value;
    fetch('users/deleteComic/' + deleteTitle , {
        method: 'DELETE'
    })
    .then(responsePromise1 => responsePromise1.text())
    .then(responsePromise2 =>  console.log(responsePromise2), document.location.href = "index.html#refreshPage")

    .catch(function (err) {
      console.log(err);
      alert(err);
     });

   
  });

$(document).on("pagebeforeshow", "#List", function (event) {  
    FillArrayFromServer(); 
});


$(document).on("pagebeforeshow", "#refreshPage", function (event) {   
    document.location.href = "index.html#List";
});
   
document.getElementById("buttonClear").addEventListener("click", function () {
  document.getElementById("title").value = "";
  document.getElementById("issue").value = "";
  document.getElementById("publisher").value = "";
  document.getElementById("description").value = "";
 
});

$(document).on("pagebeforeshow", "#Add", function (event) {  
  document.getElementById("title").value = "";
  document.getElementById("issue").value = "";
  document.getElementById("publisher").value = "";
  document.getElementById("description").value = "";
 
});

$(document).on("pagebeforeshow", "#page3", function (event) { 

  
    let localTitle = document.getElementById("IDparmHere").innerHTML;
    for(let i=0; i < comicArray.length; i++) {   
        if(comicArray[i].Title == localTitle){
            document.getElementById("oneDescription").innerHTML =  comicArray[i].Description;
           
        }  
    }
 });
 
});

function createList()
{

  var divUserlist = document.getElementById("divComicList");
  while (divComicList.firstChild) {  
  divComicList.removeChild(divComicList.firstChild);
  };

  var ul = document.createElement('ul');  
  comicArray.forEach(function (element,) {  
    var li = document.createElement('li');
    li.innerHTML = "<a data-transition='pop' class='oneComic' data-parm=" + element.Title + "  href='#home'>Description</a> " + "Publisher :" + " " + element.Publisher + " " + "Title:" + " " +element.Title + " " + "Issue/Volume #:" + " " + element.Issue;
    ul.appendChild(li);
  });
  divComicList.appendChild(ul)

  
    var classname = document.getElementsByClassName("oneComic");
    Array.from(classname).forEach(function (element) {
        element.addEventListener('click', function(){
            var parm = this.getAttribute("data-parm");  
            document.getElementById("IDparmHere").innerHTML = parm;
            document.location.href = "index.html#page3";
        });
    });
   
};


function comparePublisher(a, b) {
  
  const comicA = a.Publisher.toUpperCase();
  const comicB = b.Publisher.toUpperCase();

  let comparison = 0;
  if (comicA > comicB) {
    comparison = 1;
  } else if (comicA < comicB) {
    comparison = -1;
  }
  return comparison;
}

function FillArrayFromServer(){
    
    fetch('/users/comicList')
    .then(function (response) {  
        return response.json();
    })
    .then(function (serverData) {     
    
    comicArray.length = 0;  
    comicArray = serverData;
    createList();  
    })
    .catch(function (err) {
     console.log(err);
    });
};



function addNewComic(newComic){

    const request = new Request('/users/addComic', {
        method: 'POST',
        body: JSON.stringify(newComic),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    
    
    fetch(request)

        .then(resPromise1 => resPromise1.json())   
    
        .then(resPromise2 => document.location.href = "#List" )
        .catch(function (err) {
            console.log(err);
        });
    
}; 
    
