import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { useState } from "react"
import { LangSwitcher } from "shared/ui/LagnSwitcher/ui/LangSwitcher"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}></LangSwitcher>
            </div>
        </div>
    )
}
