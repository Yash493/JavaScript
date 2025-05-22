const tinderUser=new Object(); // this is singleton object

const tinderUser2={}; // this is non-singelton obj
 tinderUser2.id="1234";
 tinderUser2.name="Yash";
 tinderUser2.isLoggedIn=false;

 //console.log(tinderUser2)


 // object inside another object

 const regularUser={
    email:"yashgaikwad493@gmail.com",
    fullname:{
        firtname:"yash",
        lastname:"gaikwad"
    }
 }


// console.log(regularUser.fullname.firtname)


 // to combine objects -- use Assign;

 const obej= {1:"a", 2:"b"};
 const obej2={3:"c", 4:"d"};

 const obej3= Object.assign({},obej,obej2)
 console.log(obej3)


 // we can also use spread operator

 const obej4={...obej,...obej3};
 console.log(obej4)



 // when values come from databaes it comes as array of object



 const users=[
    {
        id:1,
        email:"yashgaikwad$"
    },
    {
        id:1,
        email:"yashgaikwad$"
    },
   { id:1,
        email:"yashgaikwad$"
   }
 ]


 console.log(users[1].email);


 console.log(tinderUser2);

 // so if we want its values or keys together we can get it in th form of array using this
 // object.keys or object.values(objectname);

 console.log(Object.keys(tinderUser2));
 console.log(Object.values(tinderUser2))


 // convert key value in arrays form

 console.log(Object.entries(tinderUser2));



 //object destructring

 const course={
    coursename: "Javascript",
    price: "9999",
    courseInstructor: "Yash"

 }

 //course.courseInstructor;

 // here is  destructruing;

 const {courseInstructor}=course;
 console.log(courseInstructor)

 // we can make that value small also

 
 const {courseInstructor : instructor}=course;
 console.log(instructor)