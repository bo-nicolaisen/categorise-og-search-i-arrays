// write cool JS hwere!!
let categoryList = []
let myCategoryData = [
    {
        name: 'household',
        categories: [],
        KeyWords: ['groceries', 'kitchen', 'furniture']
    },
    {
        name: 'womens',
        categories: [],
        KeyWords: ['woman', 'womens', 'dresses', 'beauty']
    },
    {
        name: 'mens',
        categories: [],
        KeyWords: ['man', 'mens']
    },
    {
        name: 'electronics',
        categories: [],
        KeyWords: ['phone', 'laptop', 'mobile', 'tablets']
    },
    {
        name: 'other',
        categories: [],
        KeyWords: []
    }
]
getCategories()

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
            sortIntocategories()
        });
}





/* function sortIntocategories(myCats) {

    myCats.forEach(myCatName => {
        if (checkCategory(myCatName, myCategoryData[0].KeyWords)) {
            myCategoryData[0].categories.push(myCatName)
        }
        else if (checkCategory(myCatName, myCategoryData[1].KeyWords)) {
            myCategoryData[1].categories.push(myCatName)
        }
        else if (checkCategory(myCatName, myCategoryData[2].KeyWords)) {
            myCategoryData[2].categories.push(myCatName)
        }
        else {
            myCategoryData[3].categories.push(myCatName)
        }
    })

    buildNavBar(myCategoryData)
} */

function sortIntocategories() {

    // looper gennem alle kategori navne
    categoryList.forEach((myCatName) => {

        let foundFlag = false
        myCategoryData.forEach((mycategory, index) => {


            if (!foundFlag && checkCategory(myCatName, myCategoryData[index].KeyWords)) {
                mycategory.categories.push(myCatName)
                foundFlag = true
            }
        })

        if (!foundFlag) {
            myCategoryData[myCategoryData.length - 1].categories.push(myCatName)
        }
    })

    buildNavBar()
}



function checkCategory(myCategory, checkArray) {

    let found = checkArray.some((checkWord) => {
        return myCategory.includes(checkWord)
    })
    return found
}

function buildNavBar() {
    // category nav element
    let myNavElement = document.getElementById('categories')
    let myHTML = ''

    myCategoryData.forEach(myCategoryData => {
        //console.log(myCategoryData)
        // do funky DOM stuff
        catHTML = `<div class="dropdownContainer"><h3 class="dropbtn" onclick=showcat()>${myCategoryData.name}</h3><div class="dropdown-content">`

        myCategoryData.categories.forEach(subCat => {
            catHTML += `<h4 class="catItem" onclick=menuCallback("${subCat}")>${subCat}</h4>`
        });

        catHTML += '</div></div>'

        myHTML += catHTML
    });
    myNavElement.innerHTML = myHTML
}


function menuCallback(myCat) {
    console.log(`du har klikket på kategorien ${myCat}`);
    buildNavBar()
}


/*  
<div class dropDown>
<button class="dropbtn">Dropdown</button>
 <div class="dropdown-content">
   <a href="#">Link 1</a>
   <a href="#">Link 2</a>
   <a href="#">Link 3</a>
 </div>
 div */