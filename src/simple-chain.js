const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
	this.value.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || position < 1 || position > this.value.length - 1) {
      this.value = [];
      throw new Error;
    } else {
      this.value.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
	this.value.reverse();
    return this;
  },
  finishChain() {
    let temp = this.value.map(e => '( ' + e + ' )').join('~~');
	  this.value = []
	  return temp;
  }
};

module.exports = chainMaker;
