// Making the Request:
// We should use the PATCH method.
// We should use /updateBook as the path in our URL.
// We should use JSON.stringify to encode the body and pass a 'Content-Type': 'application/json' header.
// We should include the ID (because it's required) and the title (because it's what we want to change) in the body.
// Handling the Response:
// We should use response.json() to parse the response.
// Once parsed, the response will be the updated book object.

//copied from index.js
async function main() {

    //the fetch request
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    //update book title
    // Place a text input next to each book title.
    let root = document.getElementById("root") //root is from admin.html
    let listItem = document.createElement("li")
    // Give each text input a value: the quantity of the associated book.
    //to create <input> to make a botton
    let qtyInput = document.createElement("input")
    let saveBtn = document.createElement("button")   

    listItem.innerHTML = `<strong>${book.titile}</strong>`
    //can also be changed to this
    // listItem.textContent = book.title
    qtyInput.setAttribute(`value`, `${book.quantity}`) //need to append this
    // Place a submit button next to each text input.
    saveBtn.textContent = "Save"

    saveBtn.addEventListener('click', () => {
        fetch ('http://localhost:3001/updateBook', {
            //add code here, when the button gets clicked
            //we need to capture the quantity
            //we need to call an API endpoint to update the book quantity
            method: "PATCH",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: qtyInput.value
            })
        })


    })



    listItem.append(qtyInput, saveBtn)
    //need to append list items
    root.append(listItem)

}



main()