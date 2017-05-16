// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //input of various things - objects, numbers, booleans, arrays, etc
  //output: turn everything into a string, including [], {}
  //
  var holder = [];
  var type = typeof obj;

  if(type === 'number' || type === 'boolean') {
    return obj.toString();
  }
  else if(type === 'string') {
    return '\"' + obj + '\"';
  }
  else if(obj === 'undefined') {
    return undefined
  }
  else if(obj === null) {
    return 'null'
  }
  /*
  else if(type === 'function') {
    return ''
  }*/

  if(Array.isArray(obj)) {
    obj.forEach(function(element, index) {
      holder.push(stringifyJSON(element));
    })
    return "[" + holder.join(',') + "]"
  }

  else if(type === 'object') {
    for(var key in obj) {
      if(typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined'){
        holder.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return "{" + holder.join(',') + "}"
  }

};
