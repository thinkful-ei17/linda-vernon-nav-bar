document.querySelector("li.courses").addEventListener("click", function () {
  document.querySelector("nav.courses").classList.toggle('noDisplay');
  console.log('clicked!');

  if (!document.querySelector("nav.howitworks").classList.contains('noDisplay')) {
    document.querySelector("nav.howitworks").classList.toggle('noDisplay');
  }

});

document.querySelector("li.howitworks").addEventListener("click", function () {
  document.querySelector("nav.howitworks").classList.toggle('noDisplay');

  if (!document.querySelector("nav.courses").classList.contains('noDisplay')) {
    document.querySelector("nav.courses").classList.toggle('noDisplay');
  }
  console.log('clicked! 2');
});
