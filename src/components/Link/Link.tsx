import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void
}) => {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")

    return (
        <AnchorLink
            href={lowerCasePage}
            onCLick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;