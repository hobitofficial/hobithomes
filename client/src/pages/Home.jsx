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
      {currentUser && <AdminSection />} */}
      <MaintenancePage />
    </>
  );
}
