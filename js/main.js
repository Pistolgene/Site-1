document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(sidenav);
  var modal = document.querySelectorAll('.modal');
  var instances = M.Modal.init(modal);
  var gallery = document.querySelectorAll('.materialboxed');
  var instances_gallery = M.Materialbox.init(gallery);
});
