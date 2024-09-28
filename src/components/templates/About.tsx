import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="container capitalize flex gap-10 py-32">
      <div className="w-1/2 py-10">
        <h1 className="text-6xl text-primary font-bold pb-5">{t("about")}</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          repellat corporis obcaecati nisi mollitia nostrum consectetur
          accusantium reprehenderit deserunt sapiente suscipit quod ullam
          quisquam ducimus, voluptas omnis possimus nesciunt tenetur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur
          nam deserunt eveniet iste voluptatem dolor velit tenetur sed
          reiciendis ipsam, ad modi reprehenderit veritatis ut ea dolorum, rerum
          alias.
        </p>
        <button className="hover:bg-transparent border border-primary hover:text-primary transition capitalize bg-primary px-8 py-2 text-xl mt-5">
          {t("contact")}
        </button>
      </div>
      <div className="w-1/2 rounded-3xl border-4 border-Secondary flex justify-center items-center text-4xl font-bold animate-pulse">
        video
      </div>
    </section>
  );
};

export default About;
