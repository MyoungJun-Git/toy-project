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
        posterPath: movieData[0].poster_path,
        title: movieData[0].title,
        overview: movieData[0].overview,
      }}
    />
  );
};

export default Banner;
