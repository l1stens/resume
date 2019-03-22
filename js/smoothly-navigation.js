!function () {
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
      event.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (event) {
      event.currentTarget.classList.remove('active')
    }
  }

  let aTags = document.querySelectorAll('nav.menu > ul > li >a')

  function animate (time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }

  requestAnimationFrame(animate);

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
      event.preventDefault()
      // let a = event.currentTarget
      // let href = a.getAttribute('href')
      // let element = document.querySelector(href)
      // let top = element.offsetTop
      let top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop
      // window.scrollTo(0, top - 80)
      // let n = 25
      // let t = 500 / n
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop
      let t = Math.abs((s / 100) * 200)
      if (t > 500) {
        t = 500
      }
      var coords = { y: currentTop }
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start()
    }
  }
}.call()