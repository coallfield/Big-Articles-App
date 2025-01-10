import { FC, ReactNode } from "react"
import { Link, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children: ReactNode
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children, className, theme = AppLinkTheme.PRIMARY, to} = props
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}