import { useTranslation } from "react-i18next";

type offer_TP = {
  id: number;
  img: string;
  title: string;
  details: string;
};
type OfferCardProps = {
  offerDetails: offer_TP;
};

const OfferCard: React.FC<OfferCardProps> = ({ offerDetails }) => {
  const { t } = useTranslation();

  return (
    <div className="hover:scale-105 transition cursor-pointer aspect-square rounded-3xl overflow-hidden bg-white bg-opacity-70 shadow-xl">
      <div className="h-[60%] rounded-xl shadow-lg">
        <img
          className="w-full h-full bg-center rounded-xl"
          src={offerDetails.img}
          alt={offerDetails.title}
        />
      </div>
      <div className="flex flex-col justify-between px-4 py-2 shadow-inner">
        <div>
          <span className="font-bold text-xl text-Secondary">
            1000 {t("EGP")}
          </span>
          <h3 className="text-2xl font-semibold">{offerDetails.id}</h3>
          <p>{offerDetails.details}</p>
        </div>
        <button className="hover:bg-transparent border border-primary hover:text-primary transition capitalize bg-primary px-8 py-2 mt-5">
          {t("book")}
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
