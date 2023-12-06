export interface IBannerClass {
  bannerClassName: string;
  bannerInfoClassName: string;
}

export interface IBannerData {
  posterPath: string;
  title: string;
  overview: string;
}

export interface IBanner {
  bannerClass: IBannerClass;
  // DATA
  bannerData: IBannerData;
}
