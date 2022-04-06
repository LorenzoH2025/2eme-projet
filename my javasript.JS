function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "pic_bulboff.gif"
    } else {
      pic = "pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }


function myFunction() {
  document.getElementById("demo").style.fontSize = "25px"; 
  document.getElementById("demo").style.color = "blue";
  document.getElementById("demo").style.backgroundColor = "green";        
}
