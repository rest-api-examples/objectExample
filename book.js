const book={
    bookArray:[
        {id_book:1, name:"Tietokannat", author:"Mikko Virtanen",isbn:"12345678" },
        {id_book:2, name:"C++", author:"Liisa Virtanen",isbn:"333333333" },
        {id_book:3, name:"JavaScript", author:"Matti Mainio",isbn:"888888888" }
    ],
    getAllBooks(){
        console.log(this.bookArray);
    },
    getOneBook(x){
        console.log(this.bookArray[x]);
    },
    addBook(id, na, au, is){
        this.bookArray.push({id_book:id, name:na, author:au, isbn:is});
    }
}
console.log("kaikki kirjat");
book.getAllBooks();
console.log("toinen kirja");
book.getOneBook(1);
console.log("lisätään kirja")
book.addBook(4,'C kieli','Jussi Jokinen','4444444');
book.getAllBooks();
