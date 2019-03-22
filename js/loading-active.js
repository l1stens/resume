!function () {
  var view = document.querySelector('#siteWelcome')
  var controller = function(view) {
    setTimeout(function () {
      view.classList.remove('active')
    }, 500)
  }
  controller(view)
}.call()