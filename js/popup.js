  var link = document.querySelector(".js-open-modal");
  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".modal-feedback-close");
  var overlay = document.querySelector(".modal-overlay");

	link.addEventListener("click", function(event) {
      event.preventDefault();
	  overlay.classList.add("modal-overlay-show");
	  popup.classList.add("modal-feedback-show");
	});
	
    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-feedback-show");
	  overlay.classList.remove("modal-overlay-show");
    });
	
	window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("modal-feedback-show")) {
            popup.classList.remove("modal-feedback-show");
        }
      }
    });


