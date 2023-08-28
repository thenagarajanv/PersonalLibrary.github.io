let books = [];

let user = [
    {
        "bookName" : 'The Alchemist',
        "author" : 'Coelho',
        "price" : 399,
        "avail" : true,
    },
    {
        "bookName" : 'To Kill a Mockingbird',
        "author" : 'Lee',
        "price" : 299,
        "avail" : true,
    },
    {
        "bookName" : 'Fellowship Ring',
        "author" : 'Tolkien',
        "price" : 199,
        "avail" : true,
    },
    {
        "bookName" : 'Guide to the Galaxy',
        "author" : 'Adams',
        "price" : 299,
        "avail" : false,
    },
    {
        "bookName" : 'The Lord',
        "author" : 'Tolkien',
        "price" : 499,
        "avail" : false,
    }
];


for (let i = 0; i < user.length; i++) {
    if(user[i].avail == false){
        ans = 'No';
    }else{
        ans = 'Yes';
    }
    books.push(`Book Name: ${user[i].bookName}, Author Name: ${user[i].author}, Price: ${user[i].price}, Available : ${ans}`);
}

// Adding Book 
function addBooks(){
    let  bname = document.getElementById('bookName').value;
    let  aname = document.getElementById('authorName').value;
    let  amount = document.getElementById('amount').value;
    let avail = document.getElementById('inputGroupSelect01').value;
    console.log(avail);
    let temp = {
        bname : bname,
        aname : aname,
        amount : amount,
        avail :  avail,
    };
    let ans = avail;
    if(avail == 0){
        ans = 'No';
    }else{
        ans = 'Yes';
    }
    books.push(`Book Name: ${bname}, Author Name: ${aname}, Price: ${amount}, Available: ${ans}`);
    alert('Successfully Stored Book :'+bname+' 👍');
}

// Function to Display funtion
function caller(){
    document.getElementById('needtoput').innerHTML = books.join("<br>");
}

// Function to Add Book At First
function addFirst(){
    let  bname = document.getElementById('bookName').value;
    let  aname = document.getElementById('authorName').value;
    let  amount = document.getElementById('amount').value;
    let avail = document.getElementById('inputGroupSelect01').value;
    let ans = avail;
    if(avail == false){
        ans = 'No';
    }else{
        ans = 'Yes';
    }
    books.unshift(`Book Name: ${bname}, Author Name: ${aname}, Price: ${amount}, Available: ${ans}`);
    alert('Successfully Stored Book : '+bname+' 👍');
}

// Function to remove book
function remove(){
    if(books.length == 0){
        alert('Library is Empty');
    }
    let ans = books.pop();
    alert('😢 Book has been Deleted Successfully\n'+ans);
}

// Function to remove first book
function removeFirst(){
    if(books.length == 0){
        alert('Library is Empty');
    }else{
        let ans = books.shift();
        alert('😢 Book has been Deleted Successfully\n'+ans);
    }
}

// Function to search book
function checkandSearch(){

    let finder = document.getElementById('checkers').value;
    for(let i = 0; i < books.length; i++){
        if(books[i].includes(finder)){
            document.getElementById('search-up').innerHTML = `${finder} Book is available.`;
            console.log(bookNames);
        }
    }
    document.getElementById('search-up').innerHTML = `${finder} Book is not available.`;
}
