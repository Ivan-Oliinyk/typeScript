// make myRepeat

class myString extends String {
  repeatMy(num: number): string {
      if (num < 0 && !isFinite(num)) {
          throw new Error('Error')
      }

      let res = ''

      while(num > 0) {
          res += this
          num--
      }

      return res
  }
}

const str: string = new myString('Hey ').repeatMy(5)
// console.log(str)


/////////////////////////////////myIndex\\\\\\\
class myIndexOf extends String {
  indexOf(str: string, pos: number = 0): number {
    if(pos < 0 || typeof pos !== "number") {
      pos = 0
    }
    
    if (pos > this.length) {
      return -1
    }

    for (let i = pos; i < this.length; i++) {
      if(this.slice(i, str.length + i) === str) {
        return i
      }
    }

    return -1
  }
}

const index: myIndexOf = new myIndexOf('poly12o3doly')
// console.log(index.indexOf('ly'))
// console.log(index.indexOf('123'))
console.log(index.indexOf('o', 2))

////////////////myfilter //////////////////////////////





