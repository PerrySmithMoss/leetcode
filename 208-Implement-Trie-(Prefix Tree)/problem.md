## 208. Implement Trie (Prefix Tree)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string word into the trie.
- `boolean search(String word)` Returns `true` if the string word is in the trie (i.e., was inserted before), and false otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

##### Example 1:

> **Input:**
> ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
> [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
> Output
> [null, null, true, false, true, null, true] > **Output**: [null, null, true, false, true, null, true] > **Explanation:**
> Trie trie = new Trie();
> trie.insert("apple");
> trie.search("apple"); // return True
> trie.search("app"); // return False
> trie.startsWith("app"); // return True
> trie.insert("app");
> trie.search("app"); // return True

##### Example 2:

> **Input:** stones = [1]
> **Output:** 1

###### Contraints:

- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters.
- At most `3 * 104` calls in total will be made to `insert`, `search`, and `startsWith`.

## Solution

In this solution we have a `Trie` class with the property `root`, each `root` will represent a character (part of a word). The `root` that represents the last character in a word will be marked with the boolean property `isEnd`. Our `Trie` class contains three methods, 1. `insert` - for inserting a word into the `Trie` data structure, 2. `search` - used to search the `Trie` for a specific word, 3. `startsWith` - will return `true` if the the `prefix` passed as an argument is contained inside the `Trie`. 

The `insert` method starts with the `root` node of the `Trie` and assigns it to a variable called `curNode`. It then iterates over each character of the word and checks if `curNode` has a child node with the key of that character. If no child node is found with that character we create a new child node with the key as the character. Otherwise, we and update `curNode` to point to it. Once all characters have been processed, we set the `isEnd` property of the final `curNode` to `true` to indicate that the word has been fully inserted into the `Trie`. 

With the `search` method we initialize a variable called `curNode` to reference the `root` node of the `Trie`. Next we loop through each character in the word and check if the current character exists as a property in the `curNode`. If it does not exist, we simply return `false` because the word does not exist in the `Trie`. If it does exist we update `curNode` to reference the child node corresponding to the current character. After the loop completes, we chec if the `isEnd` property is `true` on the final `curNode`. If it is `true`, then the word exists in the `Trie`, so we return `true`. Otherwise, we return `false`.

Last but not least we have the `startsWith` method. Again, we begin by initializing a variable labeled `curNode` to point to the `root` of the `Trie`. Next we iterate over each character of the `prefix`. At each character, it checks if there exists a child node of the current node with that character as it's key. If there isn't, it means that there are no words in the `Trie` that start with the given `prefix`, so the method returns `false`. If there is a child node with the current character as it's key, we update the `curNode` variable to the child node and continue iterating over the prefix. After iterating over all characters in the prefix, if the method has not yet returned, it means that there is at least one word in the `Trie` that starts with the given `prefix`, so it returns `true`.

##### Complexity

- Time O(n)
- Space O(n)

##### Code

```javascript
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
```
