
import { SortCharacters } from '../sort.js';

const dataList = [
    [
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ], 
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    ],
    [
        [
            {name: 'мечник', health: 15},
            {name: 'маг', health: 50},
            {name: 'лучник', health: 100},
        ], 
        [
            {name: 'лучник', health: 100},
            {name: 'маг', health: 50},
            {name: 'мечник', health: 15},
        ]
    ],
    [
        [
            {name: 'мечник', health: 0},
            {name: 'маг', health: 90},
            {name: 'лучник', health: 50},
        ], 
        [
            {name: 'маг', health: 90},
            {name: 'лучник', health: 50},
            {name: 'мечник', health: 0},
        ]
    ],
]

test.each(dataList)('character health', (data, expected) => {
    const result = SortCharacters(data);
    expect(result).toEqual(expected);
});