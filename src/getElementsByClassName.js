// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // get doc body ie webpage
  // function to iterate through child nodes
  // use document.body, element.childNodes, and element.classList
  var body = document.body;

  var myArray = [];

  function elementSearch(nodes){

    if(nodes.classList && nodes.classList.contains(className)){
      myArray.push(nodes);
    }

    for(var key in nodes.childNodes){
      elementSearch(nodes.childNodes[key]);
    }
  }

  elementSearch(body);

  return myArray;

};
