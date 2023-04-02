interface TrieNode {
  [key: string]: TrieNode | boolean;
}

class Trie {
  root: TrieNode = {};

  insert(word: string) {
    let curNode = this.root;
    for (let char of word) {
      if (!curNode[char]) {
        curNode[char] = {};
      }
      curNode = curNode[char] as TrieNode;
    }
    curNode.isEnd = true;
  }

  search(word: string) {
    let curNode = this.root;
    for (let char of word) {
      if (!curNode[char]) {
        return false;
      }
      curNode = curNode[char] as TrieNode;
    }
    return curNode.isEnd ? true : false;
  }

  startsWith(prefix: string) {
    let curNode = this.root;
    for (let char of prefix) {
      if (!curNode[char]) {
        return false;
      }
      curNode = curNode[char] as TrieNode;
    }
    return true;
  }
}
