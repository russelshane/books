import Image from "next/image";
import Dropdown from "../components/ui/Select";
import { Book } from "../components/Book";

async function fetchBooks() {
  const res = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wY8TJo4KmsfejwQtJWnufValB0WZdwjI"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const books = await fetchBooks();

  return (
    <main className="bg-backdrop min-h-screen">
      <header className="flex justify-center p-4 bg-white items-center w-full flex-col">
        <Image
          width={100}
          height={10}
          src="/books-app-logo.svg"
          alt="books"
          className="max-w-32 pt-2 cursor-pointer hover:opacity-60"
        />
        <Dropdown />
      </header>

      <section className="max-w-5xl flex flex-col gap-2 mx-auto p-6 mt-4">
        <h2 className="text-lg font-bold text-obsidian cursor-default">
          Books
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {books.results.books.map((val: any, index: any) => (
            <Book
              key={index}
              title={val.title}
              description={val.description}
              author={val.author}
              imageUrl={val.book_image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
