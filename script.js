/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) =>{
    if(value.profession === "developer")
    {
      console.log(value)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value)=>{
    if(value.profession === "developer")
    {
      console.log(value)
    }
  })
}

function addData() {
  //Write your code here, just console.log
   arr.push({id:4,name:"susan",age:"20",profession:"intern"})

   console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
   arr = arr.filter((value) =>{
     return (value.profession != "admin")
   })

   console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 =[
    {id:10, fname:"priti", hobby:"cooking"},
    {id:11, fname:"ankita", hobby:"dancing"},
    {id:12, fname:"shraddha", hobby:"reading"}
  ]

  let result = arr.concat(arr1)
  console.log(result)
}
