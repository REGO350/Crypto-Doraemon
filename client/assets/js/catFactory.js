// Functions to change colors and cattributes

function changeBodyColor(color, code) {
  $('.cat__head, .cat__ear, .cat__chest, .cat__arm').css('background', '#' + color)  //Change cat
  $('#bodycode').html('code: ' + code) //Update code badge text
  $('#dnabody').html(code) //Update DNA number
}

function changeFistColor(color, code) {
  $('.cat__hand, .cat__foot').css('background', '#' + color)
  $('#fistcode').html('code: ' + code)
  $('#dnafist').html(code)
}

function changePocketColor(color, code) {
  $('.cat__pocket').css('background', '#' + color)
  $('#pocketcode').html('code: ' + code)
  $('#dnapocket').html(code)
}

function changeRibbonColor(color, code) {
  $('.cat__ribbon').css('background', '#' + color)
  $('#ribboncode').html('code: ' + code)
  $('#dnaribbon').html(code)
}

function changeEyeShape(num) {
  $('#dnaeyeshape').html(num)
  switch (num) {
    case 1:
      eyeType1()
      $('#eyeName').html('Basic')
      break
    case 2:
      eyeType2()
      $('#eyeName').html('Down')
      break
    case 3:
      eyeType3()
      $('#eyeName').html('Up')
      break
    case 4:
      eyeType4()
      $('#eyeName').html('Close')
      break
    case 5:
      eyeType5()
      $('#eyeName').html('Wink')
      break
    case 6:
      eyeType6()
      $('#eyeName').html('Confused')
      break
    case 7:
      eyeType7()
      $('#eyeName').html('Tilted')
      break
  }
}

function eyeType1() {
  $('.cat__eye.left').css('transform', 'scale(1,-1) rotate(0deg)');
  $('.cat__eye.left').css('left', '45px');
  $('.cat__eye.right').css('transform', 'rotate(0deg)');
  $('.cat__eye.right').css('left', '75px');
  $('.cat__eye').css('top', '10px');
  $('.cat__pupil.left').css('top', '10px');
  $('.cat__pupil.left').css('left', '16px');
  $('.cat__pupil.right').css('top', '19px');
  $('.cat__pupil.right').css('left', '5px');
  $('.cat__inner_pupil').css('display', 'block');
  $('.cat__pupil').removeClass("cat__close_eyes");
}

function eyeType2() {
  eyeType1()
  $('.cat__pupil.left').css('top', '3px');
  $('.cat__pupil.left').css('left', '11px');
  $('.cat__pupil.right').css('top', '26px');
  $('.cat__pupil.right').css('left', '10px');
}

function eyeType3() {
  eyeType1()
  $('.cat__pupil.left').css('top', '23px');
  $('.cat__pupil.left').css('left', '11px');
  $('.cat__pupil.right').css('top', '6px');
  $('.cat__pupil.right').css('left', '10px');
}

function eyeType4() {
  eyeType1()
  $('.cat__inner_pupil').css('display', 'none');
  $('.cat__pupil').addClass("cat__close_eyes");
  $('.cat__close_eyes.left').css('top', '9px');
  $('.cat__close_eyes.left').css('left', '6px');
  $('.cat__close_eyes.right').css('top', '10px');
  $('.cat__close_eyes.right').css('left', '3px');
}

function eyeType5() {
  eyeType1()
  $('.cat__inner_pupil.right').css('display', 'none');
  $('.cat__pupil.right').addClass("cat__close_eyes");
  $('.cat__close_eyes.right').css('top', '10px');
  $('.cat__close_eyes.right').css('left', '3px');
}

function eyeType6() {
  eyeType1()
  $('.cat__pupil.left').css('top', '20px');
  $('.cat__pupil.right').css('top', '24px');
}

function eyeType7() {
  eyeType1()
  $('.cat__eye.left').css('transform', 'scale(1,-1) rotate(10deg)');
  $('.cat__eye.right').css('transform', 'rotate(10deg)');
}

function changeMouthShape(num) {
  $('#dnamouthshape').html(num)
}

function changeMouthShape(num) {
  $('#dnamouthshape').html(num)
  switch (num) {
    case 1:
      mouthType1()
      $('#mouthName').html('Happy')
      break
    case 2:
      mouthType2()
      $('#mouthName').html('Smile')
      break
    case 3:
      mouthType3()
      $('#mouthName').html('Still')
      break
    case 4:
      mouthType4()
      $('#mouthName').html('Thinking')
      break
  }
}

function mouthType1() {
  $('.cat__mouth').removeClass("cat__mouth_smile");
  $('.cat__mouth').removeClass("cat__mouth_still");
  $('.cat__mouth').removeClass("cat__mouth_thinking");
  $('.cat__mouth_round').css('display', 'block');
  $('.cat__face_line').css('display', 'block');
  $('.cat__tongue').css('display', 'block');
  $('.cat__mouth').css('top', '85px');
  $('.cat__mouth').css('left', '30px');
  $('.cat__line_nose_to_mouth').css('height', '23px');
}

function mouthType2() {
  mouthType1();
  $('.cat__mouth_round').css('display', 'none');
  $('.cat__face_line').css('display', 'none');
  $('.cat__tongue').css('display', 'none');
  $('.cat__mouth').addClass("cat__mouth_smile");
  $('.cat__mouth_smile').css('top', '-110px');
  $('.cat__mouth_smile').css('left', '5px');
  $('.cat__line_nose_to_mouth').css('height', '56px');
}

function mouthType3() {
  mouthType1();
  $('.cat__mouth_round').css('display', 'none');
  $('.cat__face_line').css('display', 'none');
  $('.cat__tongue').css('display', 'none');
  $('.cat__mouth').addClass("cat__mouth_still");
  $('.cat__mouth_still').css('top', '110px');
  $('.cat__mouth_still').css('left', '50px');
  $('.cat__line_nose_to_mouth').css('height', '56px');
}

function mouthType4() {
  mouthType1();
  $('.cat__mouth_round').css('display', 'none');
  $('.cat__face_line').css('display', 'none');
  $('.cat__tongue').css('display', 'none');
  $('.cat__mouth').addClass("cat__mouth_thinking");
  $('.cat__mouth_thinking').css('top', '111px');
  $('.cat__mouth_thinking').css('left', '34px');
  $('.cat__line_nose_to_mouth').css('height', '50px');
}


function changeEarShape(num) {
  $('#dnaearshape').html(num)
  switch (num) {
    case 1:
      earType(0, 0)
      $('#earName').html('"The Actual"')
      break
    case 2:
      earType(200, 160);
      $('#earName').html('Basic')
      break
    case 3:
      earType(180, 180);
      $('#earName').html('Away')
      break
    case 4:
      earType(150, 210);
      $('#earName').html('Far Away')
      break
    case 5:
      earType(220, 140);
      $('#earName').html('Straight')
      break
    case 6:
      earType(240, 120);
      $('#earName').html('Close')
      break
  }
}

function earType(angleRight, angleLeft) {
  $('.cat__ears').css('display', 'block')
  if (angleRight == 0 && angleLeft == 0) {
    $('.cat__ears').css('display', 'none')
  } else {
    $('.cat__ear.left').css('transform', 'scale(1,-1) rotate(' + angleLeft.toString() + 'deg)')
    $('.cat__ear.right').css('transform', 'scale(1,-1) rotate(' + angleRight.toString() + 'deg)')
  }
}

function changeEarColor(color, code) {
  $('.cat__ear_inside').css('background', '#' + color)
  $('#earcolorcode').html('code: ' + code)
  $('#dnaearcolor').html(code)
}

function changeAnimation(num) {
  $('#dnaanimation').html(num)
  switch (num) {
    case 1:
      animateType1()
      $('#animationName').html('Moving Bell')
      break
    case 2:
      animateType2()
      $('#animationName').html('Wave')
      break
    case 3:
      animateType3()
      $('#animationName').html('Dance')
      break
    case 4:
      animateType4()
      $('#animationName').html('Jump!')
      break
  }
}

function resetAnimation() {
  $(".cat__bell").removeClass("movingBell");
  $(".cat__arm").removeClass("movingArm");
  $(".cat__foot").removeClass("movingFoot");
  $(".cat").removeClass("jump");
}

function animateType1() {
  resetAnimation();
  $(".cat__bell").addClass("movingBell");
}

function animateType2() {
  resetAnimation();
  $(".cat__arm.right").addClass("movingArm");
}

function animateType3() {
  resetAnimation();
  $(".cat__arm").addClass("movingArm");
  $(".cat__foot").addClass("movingFoot");
}

function animateType4() {
  resetAnimation();
  $(".cat").addClass("jump");
}



//Random color
// function getColor() {
//   var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor
// }

// function genColors(){
//   var colors = []
//   for(var i = 10; i < 99; i ++){
//     var color = getColor()
//     colors[i] = color
//   }
//   return colors
// }