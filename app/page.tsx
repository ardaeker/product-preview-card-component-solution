import Author from "@/components/Author";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="bg-cream grid place-content-center">
      <Product />
      <Author />
    </main>
  );
}
