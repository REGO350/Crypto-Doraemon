
var colors = Object.values(allColors())

var defaultDNA = {
  "bodycolor" : 11,
  "fistcolor" : 21,
  "pocketcolor" : 21,
  "ribboncolor" : 31,
  "eyeshape" : 7,
  "mouthshape" : 1,
  "earshape" : 1,
  "earcolor" : 21,
  "animation" : 1,
  "lastNum" : 1
}

$( document ).ready(function () {
  makeDefaultCat();
});

$(".btn.colors").click(()=>{
  $(".tab.colors").css('display', 'block');
  $(".tab.cattributes").css('display', 'none');
})

$(".btn.cattributes").click(()=>{
  $(".tab.colors").css('display', 'none');
  $(".tab.cattributes").css('display', 'block');
})

$(".btn.default").click(()=>{
  makeDefaultCat();
})

$(".btn.random").click(()=>{
  var randomDNA = {
    "bodycolor" : Math.floor(Math.random() * 89) + 10,
    "fistcolor" : Math.floor(Math.random() * 89) + 10,
    "pocketcolor" : Math.floor(Math.random() * 89) + 10,
    "ribboncolor" : Math.floor(Math.random() * 89) + 10,
    "eyeshape" : Math.floor(Math.random() * 7) + 1,
    "mouthshape" : Math.floor(Math.random() * 4) + 1,
    "earshape" : Math.floor(Math.random() * 6) + 1,
    "earcolor" : Math.floor(Math.random() * 89) + 10,
    "animation" : Math.floor(Math.random() * 4) + 1,
    "lastNum" : 1
  }
  $('#dnabody').html(randomDNA.bodycolor);
  $('#dnafist').html(randomDNA.fistcolor);
  $('#dnapocket').html(randomDNA.pocketcolor);
  $('#dnaribbon').html(randomDNA.ribboncolor);
  $('#dnaeyeshape').html(randomDNA.eyeshape);
  $('#dnamouthshape').html(randomDNA.mouthshape);
  $('#dnaearshape').html(randomDNA.earshape);
  $('#dnaearcolor').html(randomDNA.earcolor);
  $('#dnaanimation').html(randomDNA.animation);
  renderCat(randomDNA)
})

$(".btn.create").click(()=>{
  createKitty();
});


function makeDefaultCat(){
  $('#dnabody').html(defaultDNA.bodycolor);
  $('#dnafist').html(defaultDNA.fistcolor);
  $('#dnapocket').html(defaultDNA.pocketcolor);
  $('#dnaribbon').html(defaultDNA.ribboncolor);
  $('#dnaeyeshape').html(defaultDNA.eyeshape);
  $('#dnamouthshape').html(defaultDNA.mouthshape);
  $('#dnaearshape').html(defaultDNA.earshape);
  $('#dnaearcolor').html(defaultDNA.earcolor);
  $('#dnaanimation').html(defaultDNA.animation);
  renderCat(defaultDNA)
}

function getDna(){
  var dna = ''
  dna += $('#dnabody').html()
  dna += $('#dnafist').html()
  dna += $('#dnapocket').html()
  dna += $('#dnaribbon').html()
  dna += $('#dnaeyeshape').html()
  dna += $('#dnamouthshape').html()
  dna += $('#dnaearshape').html()
  dna += $('#dnaearcolor').html()
  dna += $('#dnaanimation').html()
  dna += $('#dnaspecial').html()

  return parseInt(dna)
}

function renderCat(dna){
  changeBodyColor(colors[dna.bodycolor],dna.bodycolor)
  $('#bodycolor').val(dna.bodycolor)

  changeFistColor(colors[dna.fistcolor],dna.fistcolor)
  $('#fistcolor').val(dna.fistcolor)

  changePocketColor(colors[dna.pocketcolor],dna.pocketcolor)
  $('#pocketcolor').val(dna.pocketcolor)

  changeRibbonColor(colors[dna.ribboncolor],dna.ribboncolor)
  $('#ribboncolor').val(dna.ribboncolor)

  changeEyeShape(dna.eyeshape)
  $('#eyeshape').val(dna.eyeshape)

  changeMouthShape(dna.mouthshape)
  $('#mouthshape').val(dna.mouthshape)

  changeEarShape(dna.earshape)
  $('#earshape').val(dna.earshape)

  changeEarColor(colors[dna.earcolor],dna.earcolor)
  $('#earcolor').val(dna.earcolor)

  changeAnimation(dna.animation)
  $('#animation').val(dna.animation)
}

$('#bodycolor').change(()=>{
  var colorVal = $('#bodycolor').val()
  changeBodyColor(colors[colorVal],colorVal)
})

$('#fistcolor').change(()=>{
  var colorVal = $('#fistcolor').val()
  changeFistColor(colors[colorVal],colorVal)
})

$('#pocketcolor').change(()=>{
  var colorVal = $('#pocketcolor').val()
  changePocketColor(colors[colorVal],colorVal)
})

$('#ribboncolor').change(()=>{
  var colorVal = $('#ribboncolor').val()
  changeRibbonColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var shapeVal = parseInt($('#eyeshape').val())
  changeEyeShape(shapeVal)
})

$('#mouthshape').change(()=>{
  var shapeVal = parseInt($('#mouthshape').val())
  changeMouthShape(shapeVal)
})

$('#earshape').change(()=>{
  var shapeVal = parseInt($('#earshape').val())
  changeEarShape(shapeVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  changeEarColor(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animationVal = parseInt($('#animation').val())
  changeAnimation(animationVal)
})
