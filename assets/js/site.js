// write cool JS hwere!!
let categoryList = []

//getCategories()

function getCategories() {

    fetch('https://dummyjson.com/products/category-list')

        .then((response) => {

            if (!response.ok) {
                throw new Error("OK is not OK!!");
            }
            return response.json()
        })
        .then((data) => {
            categoryList = data
            doStuff()
        });
}


function doStuff() {
    console.table(categoryList);
    //  finding stuff in arrays

}


// finding stuff in strings
const myString = "jeg er en meget flot kat, med en hat"