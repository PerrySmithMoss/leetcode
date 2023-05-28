/**
 * Trie Prefix Tree
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/daily-temperatures
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
interface TrieNode {
  [key: string]: TrieNode | boolean;
}

class WordDictionary {
  tree: TrieNode = {};

  addWord(word: string): void {
    let curNode = this.tree;
    for (let char of word) {
      if (!curNode[char]) {
        curNode[char] = {};
      }
      curNode = curNode[char] as TrieNode;
    }
    curNode.isEnd = true;
  }

  dfs(word: string, trie: TrieNode, index: number): any {
    if (word.length === index) {
      return trie.isEnd ? true : false;
    }

    let char = word[index];

    if (char === ".") {
      for (let key in trie) {
        if (this.dfs(word, trie[key] as TrieNode, index + 1)) return true;
      }
    } else {
      if (trie[char] != null) {
        return this.dfs(word, trie[char] as TrieNode, index + 1);
      }
    }

    return false;
  }

  search(word: string): boolean {
    return this.dfs(word, this.tree, 0);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
