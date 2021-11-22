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
console.log(str)


/////////////////////////////////





