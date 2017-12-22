# Morse Code Tree
Morse code stores letters, numbers and symbols in a tree. The short "bip bip
booop" sounds Morse Code sounds like represent traversing the tree left or
right. It's possible to program Morse Code as a tree and write a method that
accepts a string like "... --- ..." (a classic S.O.S. signal) and uses the
long dashes `-` and short dots `.` to traverse a tree and build a string of
letters.

Here's what the Morse Code tree looks like:

![Morse Code Tree](imgs/morse-code-tree_40.png)

Think of `... --- ...` as traversing the tree

```
root -> left,left,left      stop on S
root -> right,right,right   stop on O
root -> left,left,left`     stop on S
```

You can spell "CAT" with `-.-. .- -`

```
root -> right,left,right,left stops on C
root -> left,right            stops on A
root -> right                 stops on T
```

Build a class using a tree that represents Morse Code. Instead of using `left`
and `right` nodes to represent smaller or larger values use them to represent
short dots and long dash morse code blips.

* A short blip `.` moves left
* A long blip `-` moves right

Add a method to your tree `decode()` that accepts a String like `"... --- ..."`
and returns "SOS" the decoded symbols.

You'll have to manually create the Morse Code symbol tree with the nodes filled
in with the right values within the class once you've created it.

## Features Tasks
* Create a class called `MorseCodeTreeNode` with the following properties
  * `character` - represents the character stored on this node
  * `dot` - represents moving through the tree on a short "dot" noise
  * `dash` - represents moving through the tree on a short "dash" noise
* Create a class called `MorseCodeTree` with these methods
  * a constructor that calls a method that manually builds up the
    structure of the nodes and populates nodes with their corresponding
    characters (refer to the diagram above)
  * an `encode(str)` method that accepts a string and returns a string
    of space-separated more code symboles
      * Ignore any non-alphabetic characters
      * The string should be case-insensitive so:
      * `encode('sos')` returns `"... --- ..."`
      * `encode('SOS')` returns `"... --- ..."`
  * a `decode(str)` method that converts a morse code string into a string of
    alphabetical text.
      * `decode('... --- ...')` returns `"sos"`
  * The class should include additional helper methods to help you
    build up the initial tree structure, and help you do sub-tasks of decoding
    and encoding strings.
    * Prefix these "private" helper methods with an underscore
    * For example, our solution implementation has a method called
      `_buildTree()` that the constructor uses to manually create
      the initial structure of the tree.
* Create tests to make sure the tree encodes and decodes strings properly.
      
