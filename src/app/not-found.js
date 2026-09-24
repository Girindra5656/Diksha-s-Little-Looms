import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-max py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
        This thread got lost on the loom
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The page you’re looking for isn’t here. Let’s get you back to the sarees.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/collections" className="btn-outline">Browse sarees</Link>
      </div>
    </section>
  );
}
