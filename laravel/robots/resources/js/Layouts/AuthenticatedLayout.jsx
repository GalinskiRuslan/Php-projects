import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="header-guest">
                <div className="header-guest__wrapper1">
                    <Link href="/" className="header-guest__logo">
                        <ApplicationLogo />
                    </Link>
                    <nav>
                        <ul className="header-guest__ul">
                            <li>
                                <Link href="#">Каталог</Link>
                            </li>
                            <li>
                                <Link href="#">Услуги</Link>
                            </li>
                            <li>
                                <Link href="#">Школа</Link>
                            </li>
                            <li>
                                <Link href="#">Сервис</Link>
                            </li>
                            <li>
                                <Link href="#">Поддержка</Link>
                            </li>
                            <li>
                                <Link href="#">Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-guest__wrapper">
                    <div>
                        <Dropdown>
                            <Dropdown.Trigger>RUS</Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link>RUS</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M26.5333 27.9667L17.7667 19.2C17.1 19.7778 16.3227 20.2278 15.4347 20.55C14.5467 20.8722 13.6018 21.0333 12.6 21.0333C10.1964 21.0333 8.16217 20.2 6.4973 18.5333C4.83243 16.8667 4 14.8556 4 12.5C4 10.1444 4.83333 8.13333 6.5 6.46667C8.16667 4.8 10.1833 3.96667 12.55 3.96667C14.9167 3.96667 16.9278 4.8 18.5833 6.46667C20.2389 8.13333 21.0667 10.1461 21.0667 12.505C21.0667 13.4572 20.9111 14.3778 20.6 15.2667C20.2889 16.1556 19.8222 16.9889 19.2 17.7667L28 26.5L26.5333 27.9667ZM12.5667 19.0333C14.3722 19.0333 15.9069 18.3944 17.1708 17.1167C18.4347 15.8389 19.0667 14.3 19.0667 12.5C19.0667 10.7 18.4347 9.16111 17.1708 7.88333C15.9069 6.60556 14.3722 5.96667 12.5667 5.96667C10.7426 5.96667 9.19213 6.60556 7.91527 7.88333C6.63842 9.16111 6 10.7 6 12.5C6 14.3 6.63842 15.8389 7.91527 17.1167C9.19213 18.3944 10.7426 19.0333 12.5667 19.0333Z"
                                fill="#212121"
                            />
                        </svg>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M8.03093 23.0564C9.16426 22.2154 10.3989 21.5513 11.7348 21.0641C13.0707 20.577 14.4924 20.3334 16.0001 20.3334C17.5078 20.3334 18.9296 20.577 20.2655 21.0641C21.6014 21.5513 22.836 22.2154 23.9693 23.0564C24.7984 22.1453 25.4552 21.0906 25.9399 19.8923C26.4245 18.694 26.6668 17.3966 26.6668 16C26.6668 13.0444 25.6279 10.5278 23.5501 8.45C21.4724 6.37222 18.9557 5.33333 16.0001 5.33333C13.0446 5.33333 10.5279 6.37222 8.45013 8.45C6.37235 10.5278 5.33346 13.0444 5.33346 16C5.33346 17.3966 5.57577 18.694 6.0604 19.8923C6.54502 21.0906 7.20186 22.1453 8.03093 23.0564ZM16.0005 17C14.7832 17 13.7566 16.5822 12.9207 15.7465C12.0848 14.9109 11.6668 13.8844 11.6668 12.6671C11.6668 11.4497 12.0846 10.4231 12.9203 9.5872C13.7559 8.75131 14.7824 8.33337 15.9997 8.33337C17.2171 8.33337 18.2437 8.75118 19.0796 9.5868C19.9155 10.4224 20.3334 11.4489 20.3334 12.6663C20.3334 13.8836 19.9156 14.9102 19.08 15.7461C18.2444 16.582 17.2179 17 16.0005 17ZM16.0001 28.6666C14.2412 28.6666 12.5912 28.3359 11.0502 27.6743C9.50914 27.0128 8.16854 26.1119 7.02836 24.9718C5.88821 23.8316 4.98736 22.491 4.32583 20.95C3.66427 19.409 3.3335 17.759 3.3335 16C3.3335 14.241 3.66427 12.591 4.32583 11.05C4.98736 9.50901 5.88821 8.16841 7.02836 7.02823C8.16854 5.88808 9.50914 4.98723 11.0502 4.3257C12.5912 3.66414 14.2412 3.33337 16.0001 3.33337C17.7591 3.33337 19.4091 3.66414 20.9501 4.3257C22.4911 4.98723 23.8317 5.88808 24.9719 7.02823C26.1121 8.16841 27.0129 9.50901 27.6744 11.05C28.336 12.591 28.6668 14.241 28.6668 16C28.6668 17.759 28.336 19.409 27.6744 20.95C27.0129 22.491 26.1121 23.8316 24.9719 24.9718C23.8317 26.1119 22.4911 27.0128 20.9501 27.6743C19.4091 28.3359 17.7591 28.6666 16.0001 28.6666ZM16.0001 26.6667C17.2036 26.6667 18.3638 26.4731 19.4809 26.0859C20.598 25.6987 21.5899 25.1573 22.4566 24.4615C21.5899 23.7914 20.6108 23.2692 19.5194 22.8949C18.4279 22.5205 17.2548 22.3333 16.0001 22.3333C14.7454 22.3333 13.5702 22.5183 12.4745 22.8884C11.3787 23.2585 10.4018 23.7829 9.5437 24.4615C10.4104 25.1573 11.4023 25.6987 12.5194 26.0859C13.6365 26.4731 14.7967 26.6667 16.0001 26.6667ZM16.0001 15C16.6634 15 17.2181 14.777 17.6643 14.3308C18.1104 13.8846 18.3335 13.3299 18.3335 12.6667C18.3335 12.0034 18.1104 11.4487 17.6643 11.0025C17.2181 10.5564 16.6634 10.3333 16.0001 10.3333C15.3369 10.3333 14.7822 10.5564 14.336 11.0025C13.8898 11.4487 13.6668 12.0034 13.6668 12.6667C13.6668 13.3299 13.8898 13.8846 14.336 14.3308C14.7822 14.777 15.3369 15 16.0001 15Z"
                                        fill="#212121"
                                    />
                                </svg>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Профиль
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                >
                                    Выйти
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M9.55979 29.3C8.89784 29.3 8.33353 29.0643 7.86686 28.5929C7.4002 28.1215 7.16686 27.5549 7.16686 26.8929C7.16686 26.231 7.40255 25.6667 7.87393 25.2C8.34533 24.7333 8.91199 24.5 9.57393 24.5C10.2359 24.5 10.8002 24.7357 11.2669 25.2071C11.7335 25.6785 11.9669 26.2451 11.9669 26.9071C11.9669 27.569 11.7312 28.1333 11.2598 28.6C10.7884 29.0667 10.2217 29.3 9.55979 29.3ZM22.8931 29.3C22.2312 29.3 21.6669 29.0643 21.2002 28.5929C20.7335 28.1215 20.5002 27.5549 20.5002 26.8929C20.5002 26.231 20.7359 25.6667 21.2073 25.2C21.6787 24.7333 22.2453 24.5 22.9073 24.5C23.5692 24.5 24.1335 24.7357 24.6002 25.2071C25.0669 25.6785 25.3002 26.2451 25.3002 26.9071C25.3002 27.569 25.0645 28.1333 24.5931 28.6C24.1217 29.0667 23.5551 29.3 22.8931 29.3ZM7.83353 7.3L11.5002 14.9H21.1002L25.2669 7.3H7.83353ZM6.83353 5.3H26.4693C26.9796 5.3 27.3679 5.53333 27.6342 6C27.9004 6.46667 27.9002 6.93333 27.6335 7.4L23.1335 15.5C22.8891 15.9222 22.5718 16.2611 22.1816 16.5167C21.7913 16.7722 21.3642 16.9 20.9002 16.9H10.8002L8.93353 20.3667H25.3002V22.3667H9.23353C8.30019 22.3667 7.62797 22.0556 7.21686 21.4333C6.80575 20.8111 6.81131 20.1111 7.23353 19.3333L9.36686 15.4L4.3002 4.66667H1.7002V2.66667H5.6002L6.83353 5.3Z"
                                fill="#212121"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <main className="guest-main">{children}</main>
        </>
    );
}
