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
      {/* <Navbar />
      <Footer /> */}
      Hello
    </div>
  );
}

// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { isNewdFeedpage, isCurrentpage } from "~/services";

// const MainLayout = ({ children, pathname }: { children: React.ReactNode, pathname: string }) => {
//     const isNewdFeed = isNewdFeedpage(pathname);
//     const IsCurrentPage = isCurrentpage(pathname, ["/terms/mobile", "/privacy/mobile"]);
//     return (
//         <>
//             {!isNewdFeed && !IsCurrentPage ? (
//                 <div className="font-poppins min-h-dvh grid grid-cols-1 grid-rows-[1fr_minmax(1fr,270px)] overflow-x-hidden">
//                     <div className="fixed w-full h-fit top-0 z-50">
//                         <Navbar />
//                     </div>
//                     <div className="pt-20 h-full">{children}</div>
//                     <div className="pt-5 h-fit mt-auto">
//                         <Footer />
//                     </div>
//                 </div>
//             ) : (
//                 <div className="font-poppins grid grid-cols-1 overflow-x-hidden">
//                     <div>{children}</div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default MainLayout;
