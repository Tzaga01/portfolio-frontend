import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Navbar = () => {

    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'sv' ? 'en' : 'sv';
        i18n.changeLanguage(newLang);
    };

    return(
        <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
            <div className="text-2xl font-bold">
                <a href="/" className="text-white hover:text-gray-300 transition-colors"> Imran Tsaga </a>
            </div>

            <ul className="flex gap-8 m-0 p-0 list-none">
                <li>
                    <NavLink to="/" end className="text-gray-300 hover:text-gray-400 transition-colors">{t('nav.home')}</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="text-gray-300 hover:text-gray-400 transition-colors">{t('nav.about')}</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="text-gray-300 hover:text-gray-400 transition-colors">{t('nav.projects')}</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="text-gray-300 hover:text-gray-400 transition-colors">{t('nav.contact')}</NavLink>
                </li>
                <li>
                    <button onClick={toggleLanguage} className="text-gray-300 hover:text-gray-400 transition-colors">{i18n.language === 'sv' ? 'EN' : 'SV'}</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;