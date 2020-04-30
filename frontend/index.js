let createSteven = async function(){
    let steven = createCharacter('red', '200px', '200px')
    while(true){
        steven.walkRight()
        await after(5)
        steven.walkDown()
        await after(5)
        steven.walkLeft()
        await after(5)
        steven.walkUp()
        await after(5)
    }
}

let createLink = async function () {
    let characterData = await getCharacterData()
    let link = createCharacter('green', characterData.x, characterData.y, true)
}

createSteven()
createLink()