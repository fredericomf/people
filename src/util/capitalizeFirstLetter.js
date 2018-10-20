/**
 * Deixa a primeira letra de uma string em maiúsculo
 * 
 * @param {texto a ser capitalizado} string 
 */
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;