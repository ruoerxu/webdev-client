import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <h3>Ruoer Xu</h3>
      <br />
      <h3>
        “Do what you love, and you’ll never work a day in your life.” –
        Confucius
      </h3>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
                <li>
          <a
          href="https://github.com/ruoerxu/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noreferrer">
            Ruoer Xu GitHub CS 5610-02
          </a>
        </li>
      </ul>
    </div>
  );
}
