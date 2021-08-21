import { useState } from "react";
import MainHeader from "./MainHeader";
import MoviesPage from "./MoviesPage";
import ChannelsPage from "./ChannelsPage";

const PagesTab = {
  MOVIES: 0,
  CHANNELS: 1,
};

const Main = () => {
  const [showPage, setShowPage] = useState(PagesTab.MOVIES);

  return (
    <div className="main">
      <div className="main-headers">
        <MainHeader
          title="Фильмы"
          isActive={showPage === PagesTab.MOVIES}
          onClick={() => {
            setShowPage(PagesTab.MOVIES);
          }}
        />
        <MainHeader
          title="Телеканалы"
          isActive={showPage === PagesTab.CHANNELS}
          onClick={() => {
            setShowPage(PagesTab.CHANNELS);
          }}
        />
      </div>
      {showPage === PagesTab.MOVIES && <MoviesPage />}
      {showPage === PagesTab.CHANNELS && <ChannelsPage />}
    </div>
  );
};

export default Main;
