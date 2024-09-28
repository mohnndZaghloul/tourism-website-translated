import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import cookies from "js-cookie";

const Nav = () => {
  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lang]);

  return (
    <header>
      <nav className="z-50 fixed top-0 w-full bg-gradient-to-b from-emerald-500 to-emerald-400 bg-opacity-50 text-gray-800 py-5">
        <div className="container flex justify-between items-center">
          <div className="text-3xl font-bold uppercase">logo</div>
          <div>
            <ul className="flex justify-between gap-x-8 items-center capitalize text-lg font-semibold">
              <li className="hover:scale-105 transition">
                <a href="#">{t("home")}</a>
              </li>
              <li className="hover:scale-105 transition">
                <a href="#">{t("about")}</a>
              </li>
              <li className="hover:scale-105 transition">
                <a href="#">{t("services")}</a>
              </li>
              <li className="divide-x-2 divide-primary" dir="ltr">
                <button
                  onClick={() => {
                    i18next.changeLanguage("ar");
                  }}
                  className="bg-gray-800 text-white px-4 py-1">
                  Ar
                </button>
                <button
                  onClick={() => {
                    i18next.changeLanguage("en");
                  }}
                  className="bg-gray-800 text-white px-4 py-1">
                  En
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
