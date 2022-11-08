let array = [1, 2, 3, 4];

function add_arr(arr, value, index) {
    arr[index] = value;
}
add_arr(array, 5, 2);
console.log(array);

let obj = {
    id: 1,
    data: [
        { id: 'a', key: 'valueA' },
        { id: 'b', key: 'valueB' },
        { id: 'c', key: 'valueC' },
    ],
};
let val = { id: 'd', key: 'valueD' };

const obj_add = (obj_name, value) => {
    obj_name.data.push(value);
};
obj_add(obj, val);
console.log(obj);