import css from './Loader.module.css';

export default function Loader() {
    const showLoader = false;

    if (showLoader) {
        return <p className={css.text}>Loading movies, please wait...</p>;
    }
}
