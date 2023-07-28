var student = [
  { id: 1, name: "KishoreGanesh k", age: 22, gender: "Male" },
  { id: 2, name: "Sundharii L", age: 21, gender: "Female" },
];


// add new student to list of students
let a = student.push({ id: 3, name: "Agilan T", age: 22, gender: "Male" });
console.log(student);


// delete the Student From the array using id
studentArray();
function studentArray(id) {
  for (i = 0; i < student.length; i++) {
    if (student[i].id === 3) {
      let str = student.splice(i, 2);
      console.log(student);
    }
  }
}


// findStudentByid
findStudentById();
function findStudentById(){
for (i = 0; i < student.length; i++){
    if(student[i].id === 2)
    
    console.log(student[i].name)
}
}

// findStudentsByGender
studentsByGender();
 function studentsByGender(){
    for (i = 0; i < student.length; i++){
        if(student[i].gender = 'Male')
        console.log(student[i].name)
    }
 }