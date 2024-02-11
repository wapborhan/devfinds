import Footer from "@/components/footer/Footer";
import ProfileHeader from "@/components/header/ProfileHeader";

const layout = ({ children }) => {
  return (
    <div>
      {/* <ProfileHeader /> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
