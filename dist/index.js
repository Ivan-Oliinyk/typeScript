"use strict";
// make myRepeat
class myString extends String {
    repeatMy(num) {
        if (num < 0 && !isFinite(num)) {
            throw new Error('Error');
        }
        let res = '';
        while (num > 0) {
            res += this;
            num--;
        }
        return res;
    }
}
const str = new myString('Hey ').repeatMy(5);
// console.log(str)
/////////////////////////////////myIndex\\\\\\\
class myIndexOf extends String {
    indexOf(str, pos = 0) {
        if (pos < 0 || typeof pos !== "number") {
            pos = 0;
        }
        if (pos > this.length) {
            return -1;
        }
        for (let i = pos; i < this.length; i++) {
            if (this.slice(i, str.length + i) === str) {
                return i;
            }
        }
        return -1;
    }
}
const index = new myIndexOf('poly12o3doly');
// console.log(index.indexOf('ly'))
// console.log(index.indexOf('123'))
console.log(index.indexOf('o', 2));
////////////////myfilter //////////////////////////////
//# sourceMappingURL=index.js.map