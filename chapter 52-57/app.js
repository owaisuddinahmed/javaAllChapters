var images = [
    "./modal_images/1.jpg",
    "./modal_images/2.jpg",
    "./modal_images/3.jpg",
    "./modal_images/5.jpg",
    "./modal_images/6.jpg",
    "./modal_images/8.jpg",
    "./modal_images/9.jpg",
    "./modal_images/10.jpg",
    "./modal_images/11.jpg",
    "./modal_images/12.jpg",
    "./modal_images/13.jpg",
    "./modal_images/15.jpg",
    "./modal_images/4.png",
    "./modal_images/7.png",
    "./modal_images/14.png",
  ];

  function showImages() {
    var div = document.getElementById("image_gallery");
    for (var i = 0; i < images.length; i++) {
      var image = document.createElement("img");
      image.setAttribute("src", images[i]);
      image.setAttribute("class", "image_formating");
      image.setAttribute("id", "image");
      image.setAttribute("width", "300");
      image.setAttribute("height", "200");
      image.setAttribute("onclick", "openModal(this)");
      div.append(image);
    }
  }
  function openModal(e) {
    var modalImage = document.getElementById("modalImage");
    var modal = document.getElementById("modal");
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
    modal.style.display = "block";
    modalImage.src = e.src;
  }
  function onClosedImagModal(e) {
    var modalImage = document.getElementById("modalImage");
    var modal = document.getElementById("modal");
    modal.classList.add("modal-close");
    modal.classList.remove("modal-open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }