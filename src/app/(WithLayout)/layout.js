import Footer from "@/components/footer/Footer";

const layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;
