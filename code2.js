function calculateLibrary()
{
// enter amount of books
    var bookAmount =prompt("How many books are you returning?");
    bookAmount = parseFloat(bookAmount);
//enter amount of dvd
    var dvdAmount = prompt("How many DVDs are you returning?");
    dvdAmount = parseFloat(dvdAmount);
//enter amount of days for book
    var bookDays = parseFloat(bookDays);

//enter amount of days for dvd
    var dvdDays = parseFloat(dvdDays);

//multiply number of books by number of days and 0.25
    var bookCost = bookDays*0.25 +bookAmount;
    bookCost=bookCost.toFixed(2);
//have two digits
//multiply number of dvds by number of days and 0.5
    var dvdCost = dvdDays*0.5 +dvdAmount;
    dvdCost = dvdCost.toFixed(2);
//have two digits
//display total charge for dvds
    alert("you owe $"+dvdCost +"for the DVDs");
//display total charge for books
    alert("You owe $" + bookCost + "for the books");
}

