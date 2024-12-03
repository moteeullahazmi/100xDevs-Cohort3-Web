interface Book{
    readonly title: string;
    readonly author: string;
             year: number
}

const book :Readonly<Book> = {
    title: "Blockchain",
    author : "Moteeullah Azmi",
    year: 2025
}

console.log(book)