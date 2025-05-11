export function SortCharacters(characterList) {
    return characterList.sort((lft, rht) => rht.health - lft.health);
}