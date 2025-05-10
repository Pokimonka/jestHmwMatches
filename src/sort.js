export function SortCharacters(characterList) {
    return characterList.sort((lft, rht) => {
        return rht["health"] - lft["health"];
    })
}