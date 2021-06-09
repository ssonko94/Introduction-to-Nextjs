import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/politics">The political News</Link>
        </li>
        <li>
          <Link href="/news/finances">The Financial News</Link>
        </li>
        <li>
          <Link href="/news/sports">The Sports News</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
