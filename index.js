function deleteTags(str){
    console.log('Напишите функцию deleteTags(str), которая возвращает строку str, очищенную от всех тегов (<br>, <col> <embed>, <hr>, <img> и другие ).'.replace(/(<.*?>)/g, ''));
};
deleteTags();

// const str = 'Напишите функцию deleteTags(str), которая возвращает строку str, очищенную от всех тегов (<br>, <col> <embed>, <hr>, <img> и другие <input>).';
// const regExp = (/(<.*?>)/g);
// const result = str.replace (regExp, '');
// console.log(result);
