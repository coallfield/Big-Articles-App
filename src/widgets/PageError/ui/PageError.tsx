import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const PageError = () => {
    const { t } = useTranslation("page-error");

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError)}>
            <p>{t("Something went wrong")}</p>
            <Button onClick={reloadPage}>{t("Reload page")}</Button>
        </div>
    );
};
