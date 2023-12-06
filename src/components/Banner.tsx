import BannerView from "./BannerView";

const Banner = ({ data }: any) => {
  const bannerClass = {
    bannerClassName: "banner",
    bannerInfoClassName: "banner-info",
  };

  return (
    <BannerView
      bannerClass={bannerClass}
      bannerData={{
        posterPath: data[0].poster_path,
        title: data[0].title,
        overview: data[0].overview,
      }}
    />
  );
};

export default Banner;
