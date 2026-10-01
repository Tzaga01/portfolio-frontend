import {useTranslation} from "react-i18next";

export default function Introduction() {

    const {t} = useTranslation();

    return(
        <section id="home" className="flex items-center gap-6 text-center">
            <img src="src/assets/fit.jpg" alt="My profilepicture" className="w-80 h-100 object-cover border-4 border-white shadow-lg" />
            <div>
                <h1 className="text-4xl font-bold mb-2">{t('intro.title')}</h1>
                <p className="text-lg max-w-md text-neutral-200">{t('intro.description')}</p>
            </div>
        </section>
    )
}

