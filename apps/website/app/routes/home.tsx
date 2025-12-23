import type { Route } from "./+types/home";
import Screen from "~/components/home-page/screen";

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
    <Screen />
  );
}