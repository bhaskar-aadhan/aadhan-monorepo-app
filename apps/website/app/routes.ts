import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // route("creator-hub", "routes/creator-hub.tsx", {
    //     children: [
    //         route("register", "routes/creator-hub-register.tsx")
    //     ]
    // }),
    ...prefix("creator-hub", [
        index("routes/creator-hub.tsx"),
        route("register", "routes/creator-hub-register.tsx")
    ]),
] satisfies RouteConfig;
