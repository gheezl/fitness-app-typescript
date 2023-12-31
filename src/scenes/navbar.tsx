import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.png"

import Link from "@/components/Link/Link";

import { SelectedPage } from "@/enums/enums";

const NavBar = (props: {}) => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

    const flexBetween = "flex items-center justify-between";

    return (
        <nav>
            <div className={flexBetween + "fixed top-0 z-30 w-full py-6"}>
                <div className={flexBetween + "mx-auto w-5/6"}>
                    <div className={flexBetween + "w-full gap-16"}>
                        <img alt="logo" src={Logo} />
                        <div className={flexBetween + "w-full"}>
                            <div className={flexBetween + "gap-8 text-sm"}>
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={flexBetween + "gap-8"}>
                                <p>Sign In</p>
                                <button>Become a Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;