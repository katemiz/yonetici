document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0,
  )

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target
      const $target = document.getElementById(target)

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  })
})



// SWEET ALERT FUNCTONS
function swalConfirm(type, binaid, id) {
  let msg, cbutton, title

  switch (type) {
    case 'kalem':
      msg = 'Bu işlem geri alınamaz.!'
      cbutton = 'Sil'
      title = 'Bu kalemi silmek mi istiyorrsunuz?'
      break

    case 'image':
      msg = "You won't be able to revert this!"
      cbutton = 'Delete'
      title = 'Delete Image?'
      break

    case 'audio':
      msg = "You won't be able to revert this!"
      cbutton = 'Delete'
      title = 'Delete Audio?'
      break

    case 'video':
      msg = "You won't be able to revert this!"
      cbutton = 'Delete'
      title = 'Delete Video?'
      break

    case 'document':
      msg = "You won't be able to revert this!"
      cbutton = 'Delete'
      title = 'Delete Doc?'
      break

    case 'dosya':
      action = 'deleteDosya'
      msg = "You won't be able to revert this!"
      cbutton = 'Delete'
      title = 'Delete File?'
      break

    default:
      break
  }

  Swal.fire({
    title: title,
    text: msg,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: cbutton,
  }).then((result) => {
    if (result.isConfirmed) {
      window.livewire.emit('delete', type, binaid, id)
    } else {
      return false
    }
  })
}

// TAB SWITCHER
function changeType(type) {
  let tabs = ['alacak', 'fatura', 'gider']

  tabs.forEach((el) => {
    console.log(el)

    document.getElementById(el).classList.remove('is-active')
    document.getElementById(type).classList.add('is-active')
  })
}


