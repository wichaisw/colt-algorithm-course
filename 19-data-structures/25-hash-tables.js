class HashTable {
  constructor(size=17) {
    this.keyMap = new Array(size);
  }
  
  // only work for string
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
      let char = key[i];
      let value = char.charCodeAt(0) - 96; // make it alphabetic length for simplicity
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // TODO check duplication for overwriting
    this.keyMap[index].push([key,value]);

    return index;
  }

  get(key) {
    const index = this._hash(key);
    if(this.keyMap[index]) {
      for(let member of this.keyMap[index]) {
        if(member[0] === key) return member[1];
      }
    }

    return undefined;
  }

  keys() {
    const keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          // push only unique value
          if(!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  values() {
    const valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          // push only unique value
          if(!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}


let ht = new HashTable(17);
ht.set('maroon','#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive','#808000')
ht.set('mediumvioletred','#C71585')
ht.set('plum','#DDA0DD')
ht.set('purple', '#DDA0DD')
ht.set('violet', '#DDA0DD')
console.log(ht.keys());

ht.keys().forEach(function(key) {
  console.log(ht.get(key))
})