'use strict';

function getDogImage() {
  fetch(customUrl())
    .then(response => response.json())
    .then(responseJson => displayToDom(responseJson))
    .catch(error => console.log(error))
}

function displayErrorMessage(error) {
  let errorImageUrl = "images/sorry-cat.jpg";
  $('.img-results').attr('src', errorImageUrl);
  let errorMessage = error.message;
  $('.results').append(generateErrorMessage(errorMessage));
  $('.results').toggle();
}

function customUrl() {
  let specificDog = $('#specificDog').val();
  return `https://dog.ceo/api/breed/${specificDog}/images`;
}

function displayToDom(responseJson) {
  console.log(responseJson);
  if (responseJson.status === "success") {
    let imageUrlArray = responseJson.message;
    let singleImageUrl = imageUrlArray[0];
    $('.img-results').attr('src', singleImageUrl);
    removeErrorMessage();
    $(".results").removeClass('hidden');
  } else {
    displayErrorMessage(responseJson);
  }
}

function generateErrorMessage(errorMessage) {
  return `<b id="error-message">${errorMessage}</b>`
}

function removeErrorMessage() {
  $('#error-message').remove();
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})