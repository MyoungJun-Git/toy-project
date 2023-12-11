import { IBanner } from "../../interface/IBanner.ts";

const BannerView = ({ bannerClass, bannerData }: IBanner) => {
  return (
    <div
      className={bannerClass.bannerClassName}
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${bannerData.posterPath}` +
          ")",
      }}
    >
      <div className={bannerClass.bannerInfoClassName}>
        <h1>{bannerData.title}</h1>
        <p>{bannerData.overview}</p>
      </div>
    </div>
  );
};

export default BannerView;
