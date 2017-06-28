var reg=/^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;//必须为正数且最多为两位小数
console.log(reg.test(0));
console.log(reg.test(-0.12));
console.log(reg.test(0.123));
console.log(reg.test(0.1244));