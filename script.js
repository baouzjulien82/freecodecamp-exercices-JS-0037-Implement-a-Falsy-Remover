// Version initiale

const bouncer = (array) => {
  let nonFalsyArray = [];
  array.forEach(element => {
    if(element) {
      nonFalsyArray.push(element);
    }
  });
  return nonFalsyArray;
};

console.log(bouncer([7, "ate", "", false, 9]));

// Version améliorée

const bouncer = array => array.filter(Boolean);

console.log(bouncer([7, "ate", "", false, 9]));
