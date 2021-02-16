const unity = require("../utils/unity");
const unityTen = require("../utils/unityTen");
const ten = require("../utils/ten");
const hundred = require("../utils/hundred");

module.exports = {
  async transform(res, num) {
    let value = await num;
    let valueStr = await String(value);
    let valueLength = await valueStr.length;
    let valueSign = await Math.sign(value);
    let valuePos = (await value) * -1;
    let mil = "mil";
    let neg = await "menos";
    let extArr = await [];

    function negAlg(callback) {
      value = valuePos;
      valueSign = 1;

      if (valueLength == 2) {
        extArr.push(neg + " " + unity[valuePos]);
      }
      if (valueLength == 3) {
        twoAlg();
        let negExt = neg + " " + extArr;
        extArr.pop(0);
        extArr.push(negExt);
      }

      if (valueLength == 4) {
        threeAlg();
        let negExt = neg + " " + extArr;
        extArr.pop(extArr);
        extArr.push(negExt);
      }

      if (valueLength == 5) {
        fourAlg();
        let negExt = neg + " " + extArr;
        extArr.pop(extArr);
        extArr.push(negExt);
      }

      if (valueLength == 6) {
        fiveAlg();
        let negExt = neg + " " + extArr;
        extArr.pop(extArr);
        extArr.push(negExt);
      }
    }

    function oneAlg() {
      let oneExt = unity[value];
      extArr.push(oneExt);
    }

    function twoAlg() {
      if (valueSign == -1) {
        negAlg();
      } else {
        if (value < 20) {
          let tenExt = unityTen[value - 10];
          extArr.push(tenExt);
        } else {
          let valueSplit = value.toString().split("");

          if (valueSplit[1] == 0) {
            extArr.push(ten[valueSplit[0]]);
          } else {
            let twoExt = ten[valueSplit[0]] + " e " + unity[valueSplit[1]];
            extArr.push(twoExt);
          }
        }
      }
    }

    function threeAlg() {
      if (valueSign == -1) {
        negAlg();
      } else {
        if (value == 100) {
          extArr.push("cem");
        }

        let valueSplit = value.toString().split("");

        if (valueSplit[1] == 0 && valueSplit[2] == 0) {
          extArr.push(hundred[valueSplit[0]]);
        } else if (valueSplit[2] == 0) {
          extArr.push(hundred[valueSplit[0]] + " e " + ten[valueSplit[1]]);
        } else if (valueSplit[1] == 0) {
          extArr.push(
            hundred[valueSplit[0]] + " e " + unity[valueSplit[2]]
          );
        } else {
          extArr.push(
            hundred[valueSplit[0]] +
              " e " +
              ten[valueSplit[1]] +
              " e " +
              unity[valueSplit[2]]
          );
        }
      }
    }

    function fourAlg() {
      let valueSplit = value.toString().split("");
      if (valueSign == -1) {
        negAlg();
      } else {
        if (value == 1000) {
          extArr.push(mil);
        } else if (valueSplit[1] == 1 && valueSplit[2] == 0 && valueSplit[3] == 0) {
          extArr.push(unity[valueSplit[0]] + " " + mil + " e cem");
        } else if (valueSplit[2] == 0 && valueSplit[3] == 0) {
          extArr.push(
            unity[valueSplit[0]] + " " + mil + " e " + hundred[valueSplit[1]]
          );
        } else {
          value = valueSplit[1] + valueSplit[2] + valueSplit[3];
          threeAlg();
          let quantAlg = unity[valueSplit[0]] + " " + mil + " " + extArr;
          extArr.pop(extArr);
          extArr.push(quantAlg);
        }
      }
    }

    function fiveAlg() {
      let valueSplit = value.toString().split("");

      if (valueSign == -1) {
        negAlg();
      } else {
        if (
          valueSplit[1] == 0 &&
          valueSplit[2] == 0 &&
          valueSplit[3] == 0 &&
          valueSplit[4] == 0
        ) {
          extArr.push(ten[valueSplit[0]] + " " + mil);
        } else if (valueSplit[2] == 0 && valueSplit[3] == 0 && valueSplit[4] == 0) {
          extArr.push(
            ten[valueSplit[0]] + " e " + unity[valueSplit[1]] + " " + mil
          );
        } else if (valueSplit[2] == 1 && valueSplit[3] == 0 && valueSplit[4] == 0) {
          extArr.push(
            ten[valueSplit[0]] +
              " e " +
              unity[valueSplit[1]] +
              " " +
              mil +
              " e cem"
          );
        } else if (valueSplit[1] == 0) {
          value = valueSplit[2] + valueSplit[3] + valueSplit[4];

          threeAlg();

          let fiveAlg = ten[valueSplit[0]] + " " + mil + " e " + extArr;
          extArr.pop(extArr);
          extArr.push(fiveAlg);
        } else {
          value = valueSplit[2] + valueSplit[3] + valueSplit[4];

          threeAlg();

          let fiveAlgarism =
            ten[valueSplit[0]] +
            " e " +
            unity[valueSplit[1]] +
            " " +
            mil +
            " e " +
            extArr;
          extArr.pop(extArr);
          extArr.push(fiveAlgarism);
        }
      }
    }

    function sixAlg() {
      if (valueSign == -1) {
        negAlg();
      } else {
        extArr.push(
          "Valor fora do intervalo de -99999 e 99999"
        );
      }
    }

    function isNum(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }

    if (isNaN(value)) {
      return res.json({
        extenso:
          "Valor não é um número válido. inserir um valor dentro do intervalo -99999 e 99999"
      });
    } else {
      if (valueLength == 1) {
        oneAlg();
        return res.json({ extenso: extArr[0] });
      }

      if (valueLength == 2) {
        twoAlg();
        return res.json({ extenso: extArr[0] });
      }

      if (valueLength == 3) {
        threeAlg();
        return res.json({ extenso: extArr[0] });
      }
      if (valueLength == 4) {
        fourAlg();
        return res.json({ extenso: extArr[0] });
      }
      if (valueLength == 5) {
        fiveAlg();
        return res.json({ extenso: extArr[0] });
      }
      if (valueLength == 6) {
        sixAlg();
        return res.json({ extenso: extArr[0] });
      }
      if (valueLength > 6) {
        return res.json({
          extenso:
            "Valor fora do intervalo de -99999 e 99999 "
        });
      }
    }
  },
};
