!function () {
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  setTimeout(function () {
    fundClosestAndRemoveOffset()
  }, 500)

  window.addEventListener('scroll', function () {
    fundClosestAndRemoveOffset()
  })

  let fundClosestAndRemoveOffset = function () {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
      // console.log('offsetTop', specialTags[i].offsetTop)
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    // for(let i = 0; i < specialTags.length; i++){
    //     specialTags[i].classList.remove('active')
    // }
    // specialTags[minIndex].classList.add('active')
    //minIndex 就是离窗口顶部最近的元素。
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    // console.log(id)
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    // console.log(li)
    let allChildren = li.parentNode.children
    for (let i = 0; i < allChildren.length; i++) {
      allChildren[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()