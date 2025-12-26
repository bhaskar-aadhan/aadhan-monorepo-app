import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("creator-hub", "routes/creator-hub.tsx")
] satisfies RouteConfig;
