'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let values = [];
    let result = {
        min: Infinity,
        max: -Infinity
    };
    
    str.split(' ').forEach((elem) => {
        values.push(...elem.split(','));
    });
    values = values.filter((elem) => {
        return !isNaN(+parseFloat(elem));
    })
    .map((elem) => {
        return parseFloat(elem);
    });
    
    values.forEach((elem) => {
        if(elem<result.min) result.min = elem;
        if(elem>result.max) result.max = elem;
    })
    
    return result;
}
