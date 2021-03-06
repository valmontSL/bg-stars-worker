self.onmessage = function(_ref) {
  var _ref$data = _ref.data,
    canvas = _ref$data.canvas,
    height = _ref$data.height,
    width = _ref$data.width;
  t = canvas;

  function e(t) {
    var e = -t,
      a = t;
    return Math.floor(Math.random() * (a - e - 1)) + e;
  }

  function a() {
    (context.fillStyle = "rgb(0,0,0)"), context.fillRect(0, 0, cWidth, cHeight);

    for (var t = 0; t < stars.length; t++) {
      (stars[t].z -= starSpeed),
        stars[t].z <= 1 &&
          (stars[t] = {
            x: e(cWidth),
            y: e(cHeight),
            z: depth
          }),
        (stars[t].protectedx = (stars[t].x * hViewDistance) / stars[t].z),
        (stars[t].protectedy = (stars[t].y * vViewDistance) / stars[t].z),
        (stars[t].protectedx += halfWidth),
        (stars[t].protectedy = halfHeight - stars[t].protectedy);
      var a = Math.floor(255 * (1 - stars[t].z / depth)),
        r = Math.floor(2.5 * (1 - stars[t].z / depth));
      (context.fillStyle = "rgb(" + a + "," + a + "," + a + ")"),
        context.beginPath(),
        context.arc(
          stars[t].protectedx,
          stars[t].protectedy,
          r,
          0,
          2 * Math.PI,
          !0
        ),
        context.closePath(),
        context.fill();
    }
  }

  (context = t.getContext("2d")),
    (stars = new Array(1e3)),
    (starSpeed = 0.2),
    (cWidth = t.width = width),
    (cHeight = t.height = height),
    (halfWidth = cWidth / 2),
    (halfHeight = cHeight / 2),
    (depth = 500),
    (colour = ""),
    (hfov = (30 * Math.PI) / 50),
    (vfov = (30 * Math.PI) / 50),
    (hViewDistance = cWidth / Math.tan(hfov / 1)),
    (vViewDistance = cHeight / Math.tan(vfov / 1)),
    (function() {
      for (var t = 0; t < stars.length; t++) {
        stars[t] = {
          x: e(cWidth),
          y: e(cHeight),
          z: Math.floor(Math.random() * depth)
        };
      }

      setInterval(a, 20);
    })();
};
