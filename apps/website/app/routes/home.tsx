import type { Route } from "./+types/home";
import type { ApiResponse } from "@repo/types/common";
import { formatDate } from "@repo/utils/date";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.NEWSFEED_API_URL };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
