document.querySelector("li.courses").addEventListener("click", function () {
  document.querySelector("div.courses").classList.toggle('noDisplay');
  console.log('clicked!');

  if (!document.querySelector("div.howitworks").classList.contains('noDisplay')) {
    document.querySelector("div.howitworks").classList.toggle('noDisplay');
  }

});

document.querySelector("li.howitworks").addEventListener("click", function () {
  document.querySelector("div.howitworks").classList.toggle('noDisplay');

  if (!document.querySelector("div.courses").classList.contains('noDisplay')) {
    document.querySelector("div.courses").classList.toggle('noDisplay');
  }
  console.log('clicked! 2');
});
