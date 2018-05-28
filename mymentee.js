var rating;


function  menteeColor() {         ///assign color
    var backgroundColor;
    if(rating==1)
             backgroundColor="#ff0000";
    else if(rating==2)
            backgroundColor="#ff6600";
    else if(rating==3)
            backgroundColor="#ffcc00 ";
    else if(rating==4)
            backgroundColor="#ccff33";
    else if(rating==5)
            backgroundColor="#009900";

    return backgroundColor;
  }



function Delete(row)           //fn. to delete a row   
   { 
     var menteeRow=row.parentNode.parentNode;   
     menteeRow.removeChild(row.parentNode);
 
     }

function Edit(row)               //function to edit a row
   {                                      
    var rowTable=row.parentNode;
    var button=document.getElementById("editRow");

    if (rowTable.contentEditable == "true")
     {
        rowTable.contentEditable = "false";
        var cells=rowTable.getElementsByTagName('td');
        rating=cells[3].innerHTML;
        rowTable.style.backgroundColor=menteeColor();
        button.innerHTML = "Edit"; 
     }
    else 
     {
        rowTable.contentEditable = "true";
        button.innerHTML = "Submit";
        rowTable.style.backgroundColor="white";
     }
    }

function add() {                                       
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollno").value;
    var comment=document.getElementById("comment").value;
    rating= document.getElementById("rating").value;
    if(!(rating==1||rating==2||rating==3||rating==4||rating==5))
    {
        alert("Integer value not in the range of [1,5]");
        return;
    }
    var row=document.getElementById("table").insertRow(-1);
    row.class="row";

    //Insert cell for a row
    var cell1=row.insertCell(0); //Name cell
    var cell2=row.insertCell(1); //Rollno. cell
    var cell3=row.insertCell(2); //Comment cell 
    var cell4=row.insertCell(3); //rating cell

    //Create delete button
    var deleteButton=document.createElement("button");
    var text1 = document.createTextNode("Delete");
    deleteButton.appendChild(text1);
    deleteButton.setAttribute("onclick","Delete(this)");
    row.appendChild(deleteButton);

    //Create edit button
    var editButton=document.createElement("button");
    var text2 = document.createTextNode("Edit");
    editButton.appendChild(text2);
    editButton.setAttribute("onclick","Edit(this)");
    editButton.setAttribute("id","editRow")
    row.appendChild(editButton);

    //Set background-color according to rating
    row.style.backgroundColor=menteeColor();

   
    cell1.innerHTML=name;
    cell2.innerHTML=rollNo;
    cell3.innerHTML=comment;
    cell4.innerHTML=rating;

    //Creating collapsible

    
    
        
    } 
 

  function sort()                         //fn. to sort mentees
  {
      /*var row1,row2,temp;   
      var table=document.getElementById("table");            
      var rows = table.getElementsByTagName("tr");
        for (i = 1; i < (rows.length - 1); i++) 
        {
            
            row1 = rows[i].getElementsByTagName("td")[3];
            row2 = rows[i + 1].getElementsByTagName("td")[3];
    

            if (row1 < row2)                //Descending order
             {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                
             }
        
        
 
        }
    }*/
        
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("table");
            switching = true;
            
            while (switching) {
              
              switching = false;
              rows = table.getElementsByTagName("tr");
              
                 for (i = 1; i < (rows.length - 1); i++)
               {
                
                    shouldSwitch = false;
                
                    x = rows[i].getElementsByTagName("td")[3];
                    y = rows[i + 1].getElementsByTagName("td")[3];
                
                    if (Number(x.innerHTML )< Number(y.innerHTML) )
                    {
                  
                         shouldSwitch = true;
                         break;
                    }
              }
              if (shouldSwitch) {
                
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
              }
            }
          }
  
 
 
