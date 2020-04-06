const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// Initiate the Item count and the Unchecked count
let itemCount = 0
let uncheckedCount = 0

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


// Add a new Todo item
function newTodo() {

	// Store the user input text in the todo variable
  const todo = prompt("Enter a new ToDo: ")

  // If user does not enter a Todo item or clicks cancel then display alert
  if (todo === "" || todo === null) {
  	alert("Must enter a ToDo item!")

  } else {
  	// Increment Item count and Unchecked count by 1
  	itemCount += 1
  	uncheckedCount += 1

  	// Create a list item
  	const listItem = document.createElement('li')
  	listItem.setAttribute('class', 'todo-container')

  	// Create a span and fill it with the user input text
  	const listText = document.createElement('span')
  	listText.textContent = todo
  	listText.setAttribute('class', 'todo-text')

  	// Create the checkbox
  	const checkBox = document.createElement('input')
  	checkBox.type = 'checkbox'
  	checkBox.setAttribute('class', 'todo-checkbox')

  	// Create delete button
  	const delButton = document.createElement('button')
  	delButton.textContent = 'Delete'
  	delButton.setAttribute('class', 'todo-delete')

  	// Append the todo text, the checkbox, and the delete button to the list item
  	listItem.appendChild(listText)
  	listItem.appendChild(delButton)
  	listItem.appendChild(checkBox)

  	// Append the list item to the list
  	list.appendChild(listItem)

  	// Display the current Item count and Unchecked count
  	updateCounters()


  	// Function for deleting a Todo item
  	delButton.onclick = function() {

  		// Remove the list item from the list
  		list.removeChild(listItem)

  		// Subtract 1 from Item count
  		itemCount -= 1

  		// If the checkbox for the deleted item is not checked, subtract 1 from the Unchecked counter, else do nothing.
  		if (checkBox.checked) {
  			uncheckedCount = uncheckedCount
  		} else {
  			uncheckedCount -= 1
  		}
  		updateCounters()
  	}


  	// Function for updated the Unchecked counter
  	checkBox.onclick = function() {

  		// If the checkbox is checked then subtract 1 from Unchecked counter, else increment the Unchecked counter by 1
  		if (checkBox.checked) {
  			uncheckedCount -= 1
  		} else {
  			uncheckedCount += 1
  		}
  		updateCounters()
  	}
 	}
}


// Function for updating total Item count and Unchecked items
function updateCounters() {
	itemCountSpan.innerHTML = itemCount
	uncheckedCountSpan.innerHTML = uncheckedCount
}
