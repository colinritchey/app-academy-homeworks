function my_each(array, cb){
  let i = 0;

  while (i < array.length){
    cb(array[i]);
    i++;
  }
}

my_each([1,2,3], (el) => console.log(el * 2));
