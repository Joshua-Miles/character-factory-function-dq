# Character Discussion Question

### Setup
* `cd` into `backend` and run `rails s`
* Using finder or another terminal, open `index.html` in Chrome

### Questions
Discuss your answers to the following questions as a group

Open `createCharacter.js`
* Review lines `5-82`. What is this section of the code doing? How does it work? (discuss briefly)
* What type of variable does `createCharacter` return?
* Run `let joe = createCharacter('red', '300px', '300px')` in your chrome console. Use the console to inspect `joe`
* How could you make `joe` walk left?

Open `index.js`
* Review lines `3-11`. . What is this section of the code doing? How does it work? (discuss briefly)
* What type of variable does `after` return? Invoke `after` in the console to inspect it's return value.

Open `api.js`
* Review lines `1-7`. What is this section of the code doing? How does it work? (discuss briefly)
* What type of variable does `getCharacterData` return? Invoke `getCharacterData` in the console to inspect it's return value.
* What type of variable does `getCharacterData` **resolve** with? Run 
```javascript
getCharacterData().then(function(result){
    console.log(result)
}) 
```
OR
```javascript
await getCharacterData()
```
to inspect what the function resolves with

Open `index.js`
* Review lines `15-18`. What is this section of the code doing? How does it work? (discuss briefly)
* In chrome, try using the arrow keys to move `link` around
* **Why does `link` move with the arrow keys but not `steven`?** Refer to `index.js` and `createCharacter.js` to find out.
* Is it possible to create multiple characters that all move in unison with the arrow keys? (try it from the console!)
* If you refresh the page, does `link` stay in the same place? **Why or why not?**