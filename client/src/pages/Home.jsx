import HostelFeatures from "./HostelFeatures";
import AdminSection from "./AdminSection";
import UserReview from "./UserReview";
import Question from "./Question";
import Landing from "../components/Landing";
// import Search from "../components/Search";
import PropertyToShowUser from "./PropertyToShowUser";
import { useSelector } from "react-redux";
import MaintenancePage from "./Maintinance";
export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {/* <Landing />
      <Search />
      <HostelFeatures />
      <PropertyToShowUser />
      <UserReview />
      <Question />
<<<<<<< HEAD
      {currentUser && <AdminSection />}
      {/* <MaintenancePage /> */}
=======
      {currentUser && <AdminSection />} */}
      <MaintenancePage />
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
    </>
  );
}
