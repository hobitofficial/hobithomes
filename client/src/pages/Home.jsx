import HostelFeatures from "./HostelFeatures";
import AdminSection from "./AdminSection";
import UserReview from "./UserReview";
import Question from "./Question";
import Landing from "../components/Landing";
import Search from "../components/Search";
import PropertyFeatures from "./PropertyFeatures";
import { useSelector } from "react-redux";
export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Landing />
      {/* <Search /> */}
      <HostelFeatures />
      <PropertyFeatures />
      <UserReview />
      <Question />
      {currentUser && <AdminSection />}
    </>
  );
}
