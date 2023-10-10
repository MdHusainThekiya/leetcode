var TrieNode = function () {
  this.childNodes = {};
  this.isLast = false;
}

var Trie = function () {

  this.nodes = new TrieNode();

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

  let wordNode = {};
  let childNodes = this.nodes.childNodes

  for (const iterator of word) {
    if (!childNodes[iterator]) {
      childNodes[iterator] = new TrieNode();
      wordNode = childNodes[iterator]
    }
    wordNode = childNodes[iterator];
    childNodes = childNodes[iterator].childNodes;
  }

  wordNode.isLast = true;


};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

  let wordNode = {};
  let childNodes = this.nodes.childNodes

  for (const iterator of word) {
    if (!childNodes[iterator]) {
      return false;
    }
    wordNode = childNodes[iterator]
    childNodes = childNodes[iterator].childNodes;
  }

  if (!wordNode.isLast) {
    return false;
  }

  return true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

  let childNodes = this.nodes.childNodes

  for (const iterator of prefix) {
    if (!childNodes[iterator]) {
      return false;
    }
    childNodes = childNodes[iterator].childNodes;
  }

  return true;

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */