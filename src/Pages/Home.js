//import react component
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import ImageContent from "../Components/ImageContent/ImageContent";
import VideoContent from "../Components/VideoContent/VideoContent";
import EventList from "../Components/EventList/EventList";
import FAQ from "../Components/FAQ/FAQ";

const Home = () => {
  return (
    <>
    <HeroBanner />
    <ImageContent />
    <VideoContent />
    <EventList />
    <FAQ />
    </>
  );
};

export default Home;