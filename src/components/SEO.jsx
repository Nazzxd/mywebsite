import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Travel Time — Лучшие путешествия",
  description = " Travel Time.",
  keywords = "travel, vacantions, travel time, relax",
  image = "/img/photo1.jpg",
  url = "http://localhost:5174",
}) => {
  return (
    <Helmet>
      
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      
    </Helmet>
  );
};

export default SEO;
