import { createFileRoute } from "@tanstack/react-router";
import { BookReader } from "@/components/book/reader";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BookReader />;
}
