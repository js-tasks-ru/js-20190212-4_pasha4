/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    let result = 1;

    if(n<1 || n%1!==0) return;
    
    for(let i = 0; i<n; i++){
        result *= m;
    }

    return result;
}