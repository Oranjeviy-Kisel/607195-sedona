var submitter = document.querySelector(".reply__submitter");
var failure = document.querySelector(".failure");
var success = document.querySelector(".success");
var failure__close = failure.querySelector(".failure__close");
var success__close = success.querySelector(".success__close");

submitter.addEventListener("click", function (evt) {
  /*evt.preventDefault();*/
  var key = document.querySelectorAll(`input[required]`);
  var j=0;
  for(var i = 0; i < key.length; i++){
    /*console.log(key[i].validity.patternMismatch +"," + key[i].validity.typeMismatch);*/
    if (key[i].validity.patternMismatch || key[i].validity.typeMismatch || key[i].value == "") {
      j++;
    };
  };
  if (j!==0){
    failure.classList.add("reply__modal--visible");
  } else {
    success.classList.add("reply__modal--visible");
  };
});

failure__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  failure.classList.remove("reply__modal--visible");
});

success__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  success.classList.remove("reply__modal--visible");
});
