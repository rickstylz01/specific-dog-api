'use strict';

function getDogImage() {
  fetch(createdUrl())
    .then(response => response.json())
    .then(responseJson => displayToDom(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function createdUrl() {
  let specificDogBreed = $('#specificDog').val();
  return `https://dog.ceo/api/${specificDogBreed}/images/random`;
}

function imageHtmlString(urlString) {
  return `<img src="${urlString}" class="img-results">`
}

function replaceImage(urlString) {
  $('#img-results').replaceWith(imageHtmlString(urlString));
}

function displayToDom(responseJson) {
 console.log(responseJson);
 //get the img url from the json message key
 let imageUrl = responseJson.message;
 $('#img-results').replaceImage
 //remove the hidden class
  $('.results').removeClass('hidden');
}



// function removeDisplayedImages() {
//   $('.image-container').remove();
// }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // removeDisplayedImages();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})