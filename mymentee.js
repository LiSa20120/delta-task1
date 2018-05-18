var mentees=[["Name",100000000,"Department",5,"Comments"]];
var no-mentees=0;


function startTask(){
    for(var i=0; i<20; i++){
        mentees.push(["Name",100000000,"Department",5,"Comments"]);
    }
    getMentees();
    displayMentees();
}


function getMentees(){

}


function displayMentees(){
   var parent=document.getElementById("details");
   var child=document.createElement("h1");
   var str=document.createTextNode("Mentee list");
 
        child.appendChild(str);
        child.setAttribute("class","header");
        child.setAttribute("id","mainhead");
        parent.appendChild(child);

        for(var i=0; i<no-mentees; ++i)
        {
            var child=document.createElement("div");
            var child1=document.createElement("p");
            
            
            var str1=document.createTextNode("Name:"+ mentees[i][0]);
            var child2=document.createElement("br");
                
                 child1.appendChild(str1);
                 child1.appendChild(child2);

            str1=document.createTextNode("Roll no.:"+ mentees[i][1]);
            child2=document.createElement("br");
               
                 child1.appendChild(str1);
                 child1.appendChild(child2);

            str1=document.createTextNode("Department:"+ mentees[i][2]);
            child2=document.createElement("br");

                 child1.appendChild(str1);
                 child1.appendChild(child2);

            str1=document.createTextNode("Ratings:"+ mentees[i][3]);
            child2=document.createElement("br");
     
                 child1.appendChild(str1);
                 child1.appendChild(child2);


            str1=document.createTextNode("Comments:"+ mentees[i][4]);
            child2=document.createElement("br");  

                 child1.appendChild(str1);
                 child1.appendChild(child2);

            child1.setAttribute("id","Mentee"+i);
            child.appendChild(child1);
                  if(mentees[i][3]>=4)
                      child.setAttribute("style","background-color:#00ff00");
                  else if(mentees[i][3]>2)
                     child.setAttribute("style","background-color:#fea305");
                  else
                     child.setAttribute("style","background-color:#2eae1b");

            parent.appendChild(child);

        }
        var button = document.getElementById('edit');
        button.setAttribute("class","button");
        button = document.getElementById('sort');
        button.setAttribute("class","button");
        button = document.getElementById('delete');
        button.setAttribute("class","button");
        button = document.getElementById('add');
        button.setAttribute("class","button");
}



function addMentee(index){

     clearscreen();
     var parent=document.getElementById("details");
     var child=document.createElement("form");
     var head1=document.createElement("head");
     if(index=-1)
       {
        var str1=document.createTextNode("Add New Mentee");
       }
         
        head1.appendChild(str1);
        child.appendChild(head1);


     


        //Name
        var text1=document.createElement("p");
        var break1=document.createElement("br");
        var str1=document.createTextNode("Name:");
        var input1=document.createElement("input");

        input1.setAttribute("type","text");
        input1.setAttribute("size","50");
        input1.setAttribute("id","name");
        input1.setAttribute("style","color: #000000;margin : 10px 20px 10px 20px;padding : 10px 20px 10px 20px;font-size: 15px;background: rgba(255,255,255,1);border: 1px black;border-radius: 2px;")
        

                   str1.appendChild(input1);
                   text1.appendChild(break1);
                   text1.appendChild(str);
                   child.appendChild(text1);

        //Rollno
        var text2=document.createElement("p");
        var break2=document.createElement("br");
        var str2=document.createTextNode("Roll no.:");
        var input2=document.createElement("input");

        input2.setAttribute("type","number");
        input2.setAttribute("size","50");
        input2.setAttribute("id","number");
        input2.setAttribute("style","color: #000000;margin : 10px 20px 10px 20px;padding : 10px 20px 10px 20px;font-size: 15px;background: rgba(255,255,255,1);border: 1px black;border-radius: 2px;")
        

                   str2.appendChild(input2);
                   text2.appendChild(break2);
                   text2.appendChild(str2);
                   child.appendChild(text2);                   

        //Department   
        var text3=document.createElement("p");
        var break3=document.createElement("br");
        var str3=document.createTextNode("Department:");
        var input3=document.createElement("input");

        input3.setAttribute("type","text");
        input3.setAttribute("size","50");
        input3.setAttribute("id","department");
        input3.setAttribute("style","color: #000000;margin : 10px 20px 10px 20px;padding : 10px 20px 10px 20px;font-size: 15px;background: rgba(255,255,255,1);border: 1px black;border-radius: 2px;")
        

                   str3.appendChild(input3);
                   text3.appendChild(break3);
                   text3.appendChild(str3);
                   child.appendChild(text3);

        //Ratings
        var text4=document.createElement("p");
        var break4=document.createElement("br");
        var str4=document.createTextNode("Ratings:");
        var input4=document.createElement("input");

        
        input4.setAttribute("type","number");
        input4.setAttribute("size","50");
        input4.setAttribute("id","ratings");
        input4.setAttribute("min","0");
        input4.setAttribute("max","5");
        input4.setAttribute("style","color: #000000;margin : 10px 20px 10px 20px;padding : 10px 20px 10px 20px;font-size: 15px;background: rgba(255,255,255,1);border: 1px black;border-radius: 2px;")
        

                   str4.appendChild(input4);
                   text4.appendChild(break4);
                   text4.appendChild(str4);
                   child.appendChild(text4);


        //Comments
        var text5=document.createElement("p");
        var break5=document.createElement("br");
        var str5=document.createTextNode("Comments:");
        var textarea=document.createElement("textarea");
                   
        textarea.setAttribute("type","number");
        textarea.setAttribute("id","comments");
        textaraea.setAttribute("rows","5");
        textarea.setAttribute("columns","50");
        textarea.setAttribute("style","color: #000000;margin : 10px 20px 10px 20px;padding : 10px 20px 10px 20px;font-size: 15px;background: rgba(255,255,255,1);border: 1px black;border-radius: 2px;")
        
                   str5.appendChild(textarea);
                   text5.appendChild(break5);
                   text5.appendChild(str);
                   child.appendChild(text5);


        //submit button
        var button = document.createElement('input');
        var submit = document.createElement('button');
        var str6 = document.createTextNode('Submit');
        var text6 = document.createElement('p');

        submit.setAttribute("onclick","storeMentee()");
        submit.setAttribute("style","max-width: 200px;  margin:auto;  text-align: center;  background-color: rgbs(255,255,255,1);  border-radius: 8px;  padding : 20px 40px 20px 40px;  font-size: 20px;  color: #000000;");
        submit.appendChild(str6);
        text6.appendChild(button);
        text6.appendChild(submit);
        form.appendChild(text6);
        form.setAttribute("id","form")
     parent.appendChild(child);


     var button = document.getElementById('modify');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('sort');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('remove');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('addnew');
     button.setAttribute("class","disabledbutton");
     
}

function clearscreen()
{
  var parent = document.getElementById('details');
  var child1 = document.getElementById('mainhead');
  parent.removeChild(child1);
  for( i = 0 ; i < no_men; ++i)
  {
    var child = document.getElementById('mentee' + i);
    parent.removeChild(child);
  }
}

function storeMentee(){
    var name = document.getElementById('name').value;
    var rollno = document.getElementById('rollno').value;
    var dept = document.getElementById('dept').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;


    mentees[no-mentees][0]=name;
    mentees[no-mentees][1]=rollno;
    mentees[no-mentees][2]=dept;
    mentees[no-mentees][3]=rating;
    mentees[no-mentees][4]=comments;

    next();
    displayMentees();
}


function next(){
  var parent = document.getElementById('details');
  var child = document.getElementById('form');
  parent.removeChild(child);
  child = document.getElementById('mainhead');
  parent.removeChild(child);
}


function editMentee(){
     var button = document.getElementById('modify');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('sort');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('remove');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('addnew');
     button.setAttribute("class","disabledbutton"); 

     for ( i = 0; i < no_men; ++i)
     {
        var str = "mentee" + i;
        var k = i;
        if(str === event.currentTarget.id)
        { 
          clearscreen(); 
          addnewmentee(i);
        }
     }
}

function deleteMentee(){
     var button = document.getElementById('modify');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('sort');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('remove');
     button.setAttribute("class","disabledbutton");
     button = document.getElementById('addnew');
     button.setAttribute("class","disabledbutton");

     
     for ( i = 0; i < no_men; ++i)
     {
       var str = "mentee" + i;
       var k = i;
       if(str === event.currentTarget.id)
     {
        var delNode= k;
        for( k = delNode + 1; k < no_men; ++k)
        {
          var j;
          for( j = 0; j < 5; ++j)
          {
            mentees[k-1][j] = mentees[k][j];
          }
        }
        delNode = -1;
        clearscreen();
        --no-mentees;
        dispMentees();
      }
}

function sortMentees()
{

  for(i = no-mentees - 1; i > 0; --i)
  {
    var j;
    for( j = no-mentees - 1 ; j > (no-mentees - i -1) ; --j)
    {
      if(parseInt(mentees[j][3]) > parseInt(mentees[j-1][3]))
      {
        var temp0 = mentees[j][0];
        var temp1 = mentees[j][1];
        var temp2 = mentees[j][2];
        var temp3 = mentees[j][3];
        var temp4 = mentees[j][4];
        mentees[j][0] = mentees[j-1][0];
        mentees[j][1] = mentees[j-1][1];
        mentees[j][2] = mentees[j-1][2];
        mentees[j][3] = mentees[j-1][3];
        mentees[j][4] = mentees[j-1][4];
        mentees[j-1][0] = temp0;
        mentees[j-1][1] = temp1;
        mentees[j-1][2] = temp2;
        mentees[j-1][3] = temp3;
        mentees[j-1][4] = temp4;
      }
    }
  }
  clearscreen();
  dispmentees();
}