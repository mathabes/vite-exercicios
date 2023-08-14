function countDown(){
  var y = document.querySelector('#id');
  while (y.firstChild)
    y.removeChild(y.firstChild);
  
  var count = prompt("type a number > 0","10");
  
  if (count > 0){
    var x = count;
    var t = document.createTextNode("starts in ");
    y.appendChild(t);
    while (x > 0){
      var z = document.createTextNode(x + ', ');
      y.appendChild(z);
      x--;
    }
    var w = document.createTextNode("running");
    y.appendChild(w);
  } else {
    var k = document.createTextNode("not running");
    y.appendChild(k);
  }
  return;
}