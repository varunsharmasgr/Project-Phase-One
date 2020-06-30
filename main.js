// Storing references
var ul = document.getElementById('ul');
var ulNotAdded = document.getElementById('notadded');
var text = document.getElementById('Your order');
var button =document.getElementsByClassName('addBtn');
//
// Adding food Item
        button.onclick = addElement; // Creating an eventhandler for button
            function addElement(){
                let ul = document.getElementById('ul'); //  Storing the unordered list
                
                let li = document.getElementsByTagName('li');// Storing the list items
                let newLi = document.createElement('li');  // Creating a new list to store newli
                
                let label=document.createElement('label');// Creating label element
                label.innerText = text.value; // Label to get value
                
                let  deleteButton = document.createElement('button');// Creating delete button
                deleteButton.innerText = 'delete';// Text of delete button 
                deleteButton.setAttribute('class', 'deleteButton');// Creating Inner HTML 
                function deleteTask(){
                        var removeList = this.parentElement;//  Creating functionality for delete button i.e. Button pressed will vanish element
                        ul.removeChild(removeList)
                }
                
                // Creating checkbox
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = '1';
                checkbox.name ='checkbox1';

                var checkIt = function(e){// Creating functionality when user checks checkbox 
			checkbox = document.querySelector("input[name = checkbox1]");// Selecting the checkbox 
		if(checkbox.checked){
			var enteredText = this.parentElement;
			enteredText.style.textDecoration = 'line-through';// Styling text 
                        ul.appendChild(enteredText); // Creating the text as a child in an unordered list
			var removeList = function(){ // Creating the functionality that removes the Item from the list when delete button is presed
			var removeItem = this.parentElement;
                        ul.removeChild(removeItem);
                  
                        
		}
		deleteButton.addEventListener('click', deleteTask);// Creating an event handler for delete button


		}
		else
		{
			var enteredText = this.parentElement;
			enteredText.style.textDecoration = 'none';
                        ul.removeChild(enteredText);
                        ul.appendChild(newLi);

                }
                }
                checkbox.addEventListener('change', checkIt); // Event handler for checkbox

                deleteButton.addEventListener('click', deleteTask);
                ul.appendChild(newLi);
                text.value = "";
               
                 newLi.appendChild(checkbox);
                 newLi.appendChild(label);
                 newLi.appendChild(deleteButton);
            }
            var checkedItems = document.getElementsByTagName('li');