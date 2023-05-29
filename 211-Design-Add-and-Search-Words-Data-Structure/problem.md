## 211. Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- void addWord(word) Adds word to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.


##### Example 1:

> Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
> Output
[null,null,null,null,false,true,true,true]
> Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

###### Contraints:

- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters.
- `word` in `search` consist of `'.'` or lowercase English letters.
- There will be at most `2` dots in `word` for `search` queries.
- At most `104` calls will be made to `addWord` and `search`.

## Solution

The algorithm defines an interface `TrieNode` that represents a node in a trie data structure. It can have properties of type `TrieNode` or a boolean value.

The algorithm defines a class `WordDictionary` that implements a word dictionary using a trie data structure.

The `WordDictionary` class has a `tree` property, which represents the root of the trie and is initially an empty object.

The `addWord` method is used to add a word to the dictionary. It takes a `word` as input and iterates over each character of the word. Inside the loop, the algorithm checks if the current character `char` is already a property of the current node `curNode`. If it doesn't exist, a new empty object is created at `curNode[char]`, representing a new node in the trie.

The algorithm then updates the `curNode` reference to point to the newly created node.

After iterating through all the characters of the word, the algorithm sets the `isEnd` property of the current node to `true`, indicating that the word ends at that node.

The `dfs` (depth-first search) method is a helper function used to perform a depth-first search on the trie to search for a word. It takes three parameters: the `word` to search, the current `trie` node, and the current `index` of the word being processed.

In the `dfs` function, the algorithm first checks if the length of the `word` is equal to the current `index`. If it is, it checks if the `isEnd` property of the current trie node is `true`, indicating that a word ends at that node. If isEnd is `true`, the algorithm returns `true`; otherwise, it returns `false`.

If the length of the `word` is not equal to the current `index`, the algorithm retrieves the character `char` at the current `index`.

If `char` is a dot (`"."`) character, the algorithm performs a depth-first search for each child node of the current trie node. It recursively calls `dfs` for each child node and the next `index` (index + 1). If any of the recursive calls return `true`, it means a match was found, and the algorithm returns `true`.

If `char` is not a dot (`"."`) character, the algorithm checks if the current trie node has a child node corresponding to the character `char`. If it does, it recursively calls `dfs` for that child node and the next `index` (index + 1).

If no match is found in the trie for the current character, the algorithm returns `false`.

The `search` method of the `WordDictionary` class is a wrapper function that calls `dfs` with the initial parameters (`word`, `this.tree`, and `0`).

The `search` method returns `true` if a match is found for the word in the trie and `false` otherwise.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
/**
 * Trie Prefix Tree
 * Time is O(n) | Space O(n)
 * https://leetcode.com/problems/design-add-and-search-words-data-structure
 *
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
```
