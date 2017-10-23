window.addEventListener('resize', function (event) {

  if (this.resizeUI) {
    clearTimeout(this.resizeUI);
  }

  this.resizeUI = setTimeout(function () {
    Processing.getInstanceById('canvas').resize();
  }, 200);
});