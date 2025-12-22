import Navbar from "./Navbar";
import Footer from "./Footer";
import { isNewdFeedpage, isCurrentpage } from "~/services";

const MainLayout = ({ children, pathname }: { children: React.ReactNode, pathname: string }) => {
    const isNewdFeed = isNewdFeedpage(pathname);
    const IsCurrentPage = isCurrentpage(pathname, ["/terms/mobile", "/privacy/mobile"]);
    return (
        <>
            {!isNewdFeed && !IsCurrentPage ? (
                <div className="font-poppins min-h-screen flex flex-col overflow-x-hidden">
                    <div className="fixed w-full h-fit top-0 z-50">
                        <Navbar />
                    </div>
                    <div className="grow pt-20">{children}</div>
                    <div className="mt-auto">
                        <Footer />
                    </div>
                </div>
            ) : (
                <div className="font-inter min-h-screen overflow-x-hidden">
                    <div>{children}</div>
                </div>
            )}
        </>
    );
};

export default MainLayout;
