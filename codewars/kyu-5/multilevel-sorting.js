function multilevelsort(records, orders) {
  for (let j = 0; j < orders.length; j++) {
    orders[j].direction === "ascending"
      ? (orders[j].direction = 1)
      : (orders[j].direction = -1);
  }
  return records.sort(function(a, b) {
    let i = 0,
      result = 0;
    while (i < orders.length && result === 0) {
      result =
        orders[i].direction *
        (a[orders[i].key].toString() < b[orders[i].key].toString()
          ? -1
          : a[orders[i].key].toString() > b[orders[i].key].toString()
          ? 1
          : 0);
      i++;
    }
    return result;
  });
}
var order = [
  { key: "job", direction: "ascending" },
  { key: "age", direction: "descending" }
];

var records = [
  { name: "christian", age: 40, job: "developer" },
  { name: "andrew", age: 48, job: "developer" },
  { name: "elisabeth", age: 31, job: "floor manager" },
  { name: "oscar", age: 61, job: "floor manager" },
  { name: "gisela", age: 51, job: "area manager" },
  { name: "buffy", age: 27, job: "trainee" },
  { name: "carl", age: 23, job: "trainee" }
];

multilevelsort(records, order);
/* Expected result
[
  {name:"gisela",age:51,job:"area manager"},
  {name:"andrew",age:48,job:"developer"},
  {name:"christian",age:40,job:"developer"},
  {name:"oscar",age:61,job:"floor manager"},
  {name:"elisabeth",age:31,job:"floor manager"},
  {name:"buffy",age:27,job:"trainee"},
  {name:"carl",age:23,job:"trainee"}
] 
*/
