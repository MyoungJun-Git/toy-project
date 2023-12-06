import BannerView from "./BannerView";

const Banner = ({ movieData }: any) => {
  const bannerClass = {
    bannerClassName: "banner",
    bannerInfoClassName: "banner-info",
  };

  return (
    <BannerView
      bannerClass={bannerClass}
      bannerData={{
        posterPath: movieData[3]?.poster_path,
        title: movieData[3]?.title,
        overview: movieData[3]?.overview,
      }}
    />
  );
};

export default Banner;
