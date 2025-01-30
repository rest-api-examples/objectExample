# objectExample

Tutkitaan kuinka JavaScriptissä luodaan olio (object). JavaScriptissä voidaan luoda olio ilman, että ensin tarvitsee luoda luokka.

<ol>
<li>Luo tiedosto nimeltään book.js</li>
<li>Luo tiedostoon object nimeltään <b>book</b> </li>
<li>Kopioi arrayExample:n bookArray book objektin sisään</li>
<li>Lisää objektiin metodit 
    <ul>
    <li>getAllBooks(), joka tulostaa koko bookArrayn konsolille (huom! this-osoitin)</li>
    <li>getOneBook(x), joka tulostaa sille argumenttina(x:n arvo) annetun kirjan tiedot</li>
    <li>addBook(id_book, name, author, isbn), joka lisää sille annetun kirjan bookArrayhin (käytä push metodia)</li>
    </ul>
</li>
<li>Testaa jokaista metodia</li>
</ol>
<hr>
Let's explore how to create an object in JavaScript. In JavaScript, you can create an object without first defining a class.

<ol>
<li>Create a file named <b>book.js</b>.</li>
<li>In the file, create an object named <b>book</b>.</li>
<li>Copy the `bookArray` from <i>arrayExample</i> into the `book` object.</li>
<li>Add the following methods to the object:
    <ul>
    <li><b>getAllBooks()</b> – Prints the entire `bookArray` to the console (note: use the `this` keyword).</li>
    <li><b>getOneBook(x)</b> – Prints the details of the book specified by the argument `x`.</li>
    <li><b>addBook(id_book, name, author, isbn)</b> – Adds the given book to `bookArray` (use the `push` method).</li>
    </ul>
</li>
<li>Test each method.</li>
</ol>
