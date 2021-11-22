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
console.log(str);
/////////////////////////////////
//# sourceMappingURL=index.js.map