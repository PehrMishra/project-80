name_of_the_student_array=[];

function submit(){
    var displayStudent_array=[];
    for(var h=1;h<5;h++){
        var name_of_student=document.getElementById("name_of_the_student_"+h).value;
        console.log(name_of_student);
        name_of_the_student_array.push(name_of_student);
    }

    console.log(name_of_the_student_array);

   var length_array=name_of_the_student_array.length;
   console.log(length_array);

   for(var k=0;k<length_array;k++){
    displayStudent_array.push("<h4>NAME- "+name_of_the_student_array[k]+"</h4>");
    console.log(displayStudent_array);
   }
   console.log(displayStudent_array);
   document.getElementById("display_name_with_commas").innerHTML=displayStudent_array;

   var no_comma=displayStudent_array.join(" ");
   console.log(no_comma);
   document.getElementById("display_name_without_commas").innerHTML=no_comma;

   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
   
}



function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var displayStudent_array_sort=[];

    var length_array_sort=name_of_the_student_array.length;
    console.log(length_array_sort);

    for(var k=0;k<length_array_sort;k++){
        displayStudent_array_sort.push("<h4>NAME- "+name_of_the_student_array[k]+"</h4>");
        console.log(displayStudent_array_sort);
       }

       var no_comma_sort=displayStudent_array_sort.join(" ");
       console.log(no_comma_sort);
       document.getElementById("display_name_without_commas").innerHTML=no_comma_sort;   

       
}