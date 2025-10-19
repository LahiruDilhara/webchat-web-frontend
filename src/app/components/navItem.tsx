type NavItemProps = {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const NavItem = ({ label, icon, onClick }: NavItemProps) => {
    return (
        <div className=" flex flex-row items-center gap-sm px-md  rounded cursor-pointer bg-primary p-sm hover:bg-primary-hover active:bg-nav-item-active bg-nav-item text-on-nav-item" onClick={onClick}>
            {icon && <>{icon}</>}
            <h1 className="text-caption">{label}</h1>
        </div>
    );
}

export default NavItem;