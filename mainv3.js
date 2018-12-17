'use strict';
//results
let newRes = `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7Ugvj_oGSLukZOIlYGGLcSi_ZXGX8gxrB6QW_0VAm5SkJrO_qt22PrmQnBX84nP7AxCO3u1nyv3Dr/pubhtml?widget=true&amp;headers=false"></iframe>`;
let twoBackRes = `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTuApJhuv5RkVIW_LgiALXyA5BrzrfUKCUVEAntQbZx2g_l5OxIkjSoQuzfuD7I07ye4_-tVxav18y/pubhtml?widget=true&amp;headers=false"></iframe>`;
//Wods <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkD-gg76tuwluRa8Qcu4S34_uu3UOVSx-zj8zziMAyXzalHg/viewform?embedded=true" width="640" height="1424" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
let newWod = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwQikYRStry4dOcCNO_lmU-7MHpsQqwyakTqZ_dd7aDeHZzg/viewform?embedded=true" width="640" height="1110" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`;
let oneBack = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIPY4lyO7EnIpbMmFIV_HgPEio-C9MwosUPcdDGKtfNJXETg/viewform?embedded=true" width="640" height="1356" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`;
let twoBack = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd4eWc2JCQpX8fG67rCwK_WNXOCCMvfZk0cYSY-Z0be9knRFQ/viewform?embedded=true" width="640" height="1330" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`;

$(document).ready(function(){
 $('#content').html(`${newWod}`);
 $('#resultsMenu').click(function() { //Results toggle
  hideDivs();
  $('#results').show();
  $('#results').html(`${newRes}`);
 })
 $('#wodMenu').click(function() { //New wod toggle
  hideDivs();
  $('#content').show();
  $('#content').html(`${newWod}`);
 })
 $('#dropbtn').click(function() { //drop button toggle (small screens)
  $('#myDropdown').toggle();
 })
 $('#aboutMenu').click(function(){ //About toggle
  hideDivs();
  $('#information').toggle();
 })
 $('#blogMenu').click(function(){ //Blog toggle
  hideDivs();
  $('#blog').toggle();
 })
 $('#preWodMenu').click(function() { //Previous toggle
  hideDivs();
  $('#content').hide();
  $('#oneBack').html(`${oneBack}${newRes}`);
  $('#oneBack').toggle();
 })
 $('#twoBackMenu').click(function(){
  hideDivs();
  $('#twoBack').html(`${twoBack}${twoBackRes}`); 
  $('#twoBack').toggle();
 })
 //this closes the menu when anywhere (except iframe for some reason) is clicked.
 //Does not remove menu items on full screen.
 $(window).click(function(e) {
  if($(window).width() < 435){
   if(e.target.id != 'dropbtn'){
    $('#myDropdown').hide();
    console.table(e.target);
  }
 }
 })
});
//hides all divs.
//add all divs here.
//if large screen the wod remains. 
function hideDivs(){
 $('#results').hide();
 $('#information').hide();
 $('#content').hide();
 $('#blog').hide();
 $('#oneBack').hide();
 $('#twoBack').hide();
//  if($(window).width() > 1100) {
//   $('#content').show();
//  }
};

