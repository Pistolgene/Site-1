document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(sidenav);
  var modal = document.querySelectorAll('.modal');
  var instances = M.Modal.init(modal);
  var gallery = document.querySelectorAll('.materialboxed');
  var instances_gallery = M.Materialbox.init(gallery);
});

let users = document.querySelector('.users__flex');
function redrawUsers(obj) {}
document.addEventListener('DOMContentLoaded', function (e) {
  let user = prompt('Enter your Name');
  if (user) {
    localStorage.setItem(user, user);
  }
  for (let i = 0; i < localStorage.length; i++) {
    users.insertAdjacentHTML(
      'beforeend',
      `
      <h4 class='user__name'>${localStorage.key(i)}</h4>
    `
    );
  }
});
