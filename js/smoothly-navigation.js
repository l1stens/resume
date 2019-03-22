!function () {
  var view = document.querySelector('nav.menu')
    var controller = {
      view: null,
      aTags: null,
      init: function (view) {
        this.view = view
        this.initAnimation()
        this.bindEvents()
      },
      initAnimation: function () {
        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }

        requestAnimationFrame(animate)
      },
      scrollToElement: function() {
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
      },
      bindEvents: function () {
        let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
        for (let i = 0; i < aTags.length; i++) {
          aTags[i].onclick = (event) => {
            event.preventDefault()
            this.scrollToElement()
          }
        }
      },
    }
  controller.init(view)
}.call()