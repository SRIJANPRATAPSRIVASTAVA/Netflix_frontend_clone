var vid= document.getElementsByTagName('video');
document.addEventListener('onload',()=>{
    console.log("loaded")
    vid[0].play();
    vid[1].play();
});


// for footer
var pre_id = "1";
var curr_id = "2";
function addClass(clicked_id) {

  pre_id = curr_id;
  curr_id = clicked_id;
  if (pre_id === curr_id && document.getElementById(pre_id).parentElement.children[1].classList.length === 2)  {
    document.getElementById(curr_id).parentElement.children[1].classList.add("display");
    document.getElementById(curr_id).children[0].classList.remove("rotate");
  } 
  else if (
    document.getElementById(pre_id).parentElement.children[1].classList.length === 3
  ) {
    document.getElementById(curr_id).parentElement.children[1].classList.remove("display");
    document.getElementById(curr_id).children[0].classList.add("rotate");
  } 
  else if (
    document.getElementById(pre_id).parentElement.children[1].classList.length === 2
  ) {
    document.getElementById(pre_id).parentElement.children[1].classList.add("display");
    document.getElementById(pre_id).children[0].classList.remove("rotate");
    document.getElementById(curr_id).parentElement.children[1].classList.remove("display");
    document.getElementById(curr_id).children[0].classList.add("rotate");
  }
}
