function showMore() {
  var pics = document.querySelectorAll(".art-item");

  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "block";
  }

  console.log(this);
  this.classList.toggle('hidden');
}
