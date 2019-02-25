/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let result = [];
    let tmp = [];
    let path = '';

    for (let key in obj) {
        if(typeof obj[key] === 'object'){
            path += key + '.';
            tmp.push(find(obj[key], value));

            if(tmp.length<=1){
                path += tmp;
                result.push(path);
                path = '';
                tmp = [];
            } else {
                tmp.forEach(key => {
                    path += key;
                    result.push(path);
                })
            }
        } else if(obj[key] === value){
            path += key;
            result.push(path);
            path = '';
        }
    }

    result = result.filter(elem => {
        return elem.charAt(elem.length-1) !== '.' && elem;
    });

    if(result.length === 0) return null;

    return result.length === 1 ? result[0] : result;
}