import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Sidebar({ links }) {
    return (
        <div className="sidebar">
            {links.map(link => (
                <a className="sidebar-links" href= "#!" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </a>
            ))}
        </div>
    );
}