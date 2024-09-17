import Footer from "@/components/Footer";
import Header from "@/components/Header";

function layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default layout;