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
console.log("==== MY REPEAT ====")
console.log(str)


/////////////////////////////////myIndex\\\\\\\
class myIndexOf extends String {
  indexOf1(str: string, pos: number = 0): number {
    if(pos < 0) {
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
console.log("==== MY INDEXOF ====")
console.log(index.indexOf('ly'))
console.log(index.indexOf('123'))
console.log(index.indexOf1('o', 7))

class MyArray<T> extends Array {
  elements: T[]

  constructor(params: T[]) {
    super()
    this.elements = params
  }

  myFilter(cb: any, thisArg?: MyArray<T>): T[] {
    let res: T[] = []

    for (let i: number = 0; i < this.elements.length; i++) {
      if (cb.call(thisArg, this.elements[i], i, thisArg)) {
        res.push(this.elements[i])
      }
    }

    return res
  }

  myEvery(cb: any, thisArg?: MyArray<T>): boolean {

    for (let i: number = 0; i < this.elements.length; i++) {
      if (!cb.call(thisArg, this.elements[i], i, thisArg)) {
        return false
      }
    }

    return true
  }
}

console.log("==== MY FILTER ====")

const arr: MyArray<number> = new MyArray([1,2,3,4,5,6,7])
console.log(arr.myFilter((el: number) => el % 2))

const arrStr: MyArray<string> = new MyArray(['ss', 'sss', 'ssss', 'ffss'])
console.log(arrStr.myFilter((el: string) => el.length >= 3))

console.log("==== MY EVERY ====")
console.log(arr.myEvery((el: number) => el % 2))
console.log(arr.myEvery((el: number) => el > 0))


////////////////myfilter //////////////////////////////
// class MyFilter<T> extends Array {
//   filter1(cb: any, thisArg?: object): T[] {
//     let res = []
    
//     for(let i: number = 0; i < this.length; i++) {
//       if(cb.call(void 0 || thisArg, this[i], i, this)) {
//         res.push(this[i])
//       }
//     }

//     return res
//   }
// }

// const myFilter = new MyFilter(...[1, 2, 3, 4, 5, 6])
// console.log(myFilter.filter1((el: number) => el % 2))
// console.log(myFilter.filter1((el: number) => !(el % 2)))

// const myFilter1 = new MyFilter(...['sdds', 'sdsd', 'asqq', 's', 'ss'])
// console.log(myFilter1.filter1((el: string) => el % 2))

// const myFilterStr: MyFilter = new MyFilter(...['asd', 's', 'gtrr', 'sdad'])
// console.log(myFilterStr.filter1((el: string) => el.length > 1))

// class MyArray<T> extends Array {
 
//   filter(cb: object, thisArg?: object): T[] {
//       const res: T[] = []
//       for (let i=0; i<this.length; i++) {
//           if (i < this.length) {
//               if (cb.call(thisArg || void 0, this[i], i, this)) {
//                   res.push(this[i])
//               }
//           }
//       }
//       return res
//   }
//   // every(cb: object, thisArg?: object): boolean {
//   //   for (let i = 0; i < this.length; i += 1) {
//   //     if (!cb.call(thisArg || null, this[i], i, this)) {
//   //       return false
//   //     }
//   //   }
//   //   return true
//   // }
// }

// const arr = new MyArray('QWE', 'RTY', 'UIO')
// console.log(arr.filter((item) => item === 'RTY'))

