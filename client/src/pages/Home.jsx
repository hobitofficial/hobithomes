import HostelFeatures from "./HostelFeatures";
import AdminSection from "./AdminSection";
import UserReview from "./UserReview";
import Question from "./Question";
import Landing from "../components/Landing";
import Search from "../components/Search";
import PropertyFeatures from "./PropertyFeatures";
export default function Home() {
  return (
    <>
      <Landing />
      <Search />
      <HostelFeatures />
      <PropertyFeatures />
      <UserReview />
      <Question />
      <AdminSection />
    </>
  );
}
