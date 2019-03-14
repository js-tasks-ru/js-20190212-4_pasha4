'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const ul = document.createElement('UL');

    for(let friend of friends){
        const li = document.createElement('LI');

        li.innerHTML = friend.firstName + ' ' + friend.lastName;
        ul.appendChild(li);
    }

    return ul;
}
