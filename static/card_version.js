window.changeVersion = (card_version) => {
  let vip = localStorage.getItem('vip')

  if (card_version.indexOf('lover') == 0) {
    localStorage.setItem('card_version', card_version)
    location.href = "/card"
    return
  }
  if (!vip) {
    alert('尝试设置为vip')
    localStorage.setItem('vip', '1');
    return
  }


  localStorage.setItem('card_version', card_version)
  location.href = "/card"
}