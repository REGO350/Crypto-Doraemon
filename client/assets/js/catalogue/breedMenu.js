let choosing = false;
let catsToBreed = [0, 0];

function showBreedMenu(){
  $(".breed-menu").css("display", "block");
  $(".btn.breed").css("display", "none");
  choosing = true;
}

function boxClick(clickedId){
  clickedId = parseInt(clickedId);
  if(choosing){
    if(catsToBreed.length == 2){
      $(`#${catsToBreed[0]}`).find(".featureBox").css("border", "1px solid #009DE4");
      catsToBreed.shift();
    }
    catsToBreed.push(clickedId);
    $(`#${clickedId}`).find(".featureBox").css("border", "5px solid #DC3545");
  }
}

$(".btn.cancel").click(()=>{
  resetMyCatsPage();
});

$(".btn.confirm").click(()=>{
  console.log(catsToBreed);
  if(catsToBreed[0] == 0 || catsToBreed[1] == 0){
    return false;
  }
  breedCats(catsToBreed);
  resetMyCatsPage();
});

function resetMyCatsPage(){
  choosing = false;
  $(".featureBox").css("border", "1px solid #009DE4");
  catsToBreed = [0, 0];
  $(".breed-menu").css("display", "none");
  $(".btn.breed").css("display", "block");
}