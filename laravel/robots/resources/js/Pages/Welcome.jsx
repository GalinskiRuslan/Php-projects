import Dropdown from "@/Components/Dropdown";
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import ItemCArd from "@/Components/ItemCArd";
import manipulator from "../../assets/img/манипулятор1.png";
import mobRobot from "../../assets/img/Rectangle 55.png";
import manipulator2 from "../../assets/img/манипулятор-transformed 1.png";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Robots" />
            {auth.user ? (
                <AuthenticatedLayout></AuthenticatedLayout>
            ) : (
                <GuestLayout></GuestLayout>
            )}
            <section className="first-section">
                <div className="container">
                    <div style={{ paddingTop: "150px", maxWidth: "40%" }}>
                        <p className="text-title">
                            Робототехника для подростков
                        </p>
                        <p>
                            Практический курс для подростков от 14 лет.
                            Научитесь проектировать, собирать и программировать
                            настоящих роботов, применять машинное обучение и
                            искусственный интеллект.
                        </p>
                        <button className="btn-red">Записаться</button>
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="container">
                    <div className="card-cont">
                        <ItemCArd
                            url={manipulator}
                            cardTitle="Robot - Manipulator "
                            subtitle="24 урока | 2 месяца"
                            cardList={[
                                "3D проектирование в SolidWorks ",
                                "Печать на 3D принтере ",
                                "Программирование Arduino",
                                "Печать на 3D принтере ",
                                "Разбор сенсоров и моторов ",
                                "Проектируем робот-манипулятор",
                                "Кинематика",
                                "Обратная кинематика ",
                                "Сборка робота, тесты и калибровка",
                            ]}
                            cardButton="Записаться"
                        />
                        <ItemCArd
                            url={mobRobot}
                            cardTitle="Mobile Robot "
                            subtitle="24 урока | 2 месяца"
                            cardList={[
                                "3D проектирование в SolidWorks ",
                                "Печать на 3D принтере ",
                                "Программирование Arduino",
                                "Печать на 3D принтере ",
                                "Разбор сенсоров и моторов ",
                                "Проектируем робот-манипулятор",
                                "Кинематика",
                                "Обратная кинематика ",
                                "Сборка робота, тесты и калибровка",
                            ]}
                            cardButton="Записаться"
                        />
                        <ItemCArd
                            url={manipulator2}
                            cardTitle="Robot - Manipulator "
                            subtitle="24 урока | 2 месяца"
                            cardList={[
                                "3D проектирование в SolidWorks ",
                                "Печать на 3D принтере ",
                                "Программирование Arduino",
                                "Печать на 3D принтере ",
                                "Разбор сенсоров и моторов ",
                                "Проектируем робот-манипулятор",
                                "Кинематика",
                                "Обратная кинематика ",
                                "Сборка робота, тесты и калибровка",
                            ]}
                            cardButton="Записаться"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div>
                        <h3>Приобретенные навыки</h3>
                    </div>
                    <div>
                        <div>
                            <svg
                                className="microcontrsvg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="160"
                                height="160"
                                viewBox="0 0 160 160"
                                fill="none"
                            >
                                <rect
                                    className="backrect"
                                    x="20"
                                    y="20"
                                    width="110"
                                    height="110"
                                    rx="20"
                                    fill="url(#paint0_radial_191_116)"
                                />
                                <rect
                                    className="backrect2"
                                    x="20.5"
                                    y="20.5"
                                    width="109"
                                    height="109"
                                    rx="19.5"
                                    stroke="white"
                                    stroke-opacity="0.6"
                                />
                                <g filter="url(#filter0_b_191_116)">
                                    <rect
                                        className="frontrect"
                                        x="30"
                                        y="30"
                                        width="110"
                                        height="110"
                                        rx="20"
                                        fill="url(#paint1_linear_191_116)"
                                    />
                                    <rect
                                        className="frontrect2"
                                        x="30.5"
                                        y="30.5"
                                        width="109"
                                        height="109"
                                        rx="19.5"
                                        stroke="url(#paint2_linear_191_116)"
                                    />
                                </g>
                                <rect
                                    className="innerimg"
                                    x="61.2134"
                                    y="64"
                                    width="10"
                                    height="30"
                                    rx="2"
                                    transform="rotate(45 61.2134 64)"
                                    fill="white"
                                />
                                <rect
                                    className="innerimg2"
                                    x="100"
                                    y="80"
                                    width="10"
                                    height="30"
                                    rx="2"
                                    transform="rotate(90 100 80)"
                                    fill="white"
                                />
                                <rect
                                    className="innerimg3"
                                    x="68.2847"
                                    y="99.3552"
                                    width="10"
                                    height="30"
                                    rx="2"
                                    transform="rotate(135 68.2847 99.3552)"
                                    fill="white"
                                />
                                <rect
                                    className="innerimg4"
                                    x="109.071"
                                    y="106.426"
                                    width="10"
                                    height="30"
                                    rx="2"
                                    transform="rotate(-135 109.071 106.426)"
                                    fill="white"
                                />
                                <rect
                                    className="innerimg5"
                                    x="102"
                                    y="71.071"
                                    width="10"
                                    height="30"
                                    rx="2"
                                    transform="rotate(-45 102 71.071)"
                                    fill="white"
                                />
                                <defs>
                                    <filter
                                        id="filter0_b_191_116"
                                        x="18"
                                        y="18"
                                        width="134"
                                        height="134"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="6"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_191_116"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_191_116"
                                            result="shape"
                                        />
                                    </filter>
                                    <radialGradient
                                        id="paint0_radial_191_116"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(20 20) rotate(45) scale(155.563)"
                                    >
                                        <stop stop-color="#27AEA6" />
                                        <stop offset="1" stop-color="#60DD95" />
                                    </radialGradient>
                                    <linearGradient
                                        id="paint1_linear_191_116"
                                        x1="85"
                                        y1="30"
                                        x2="85"
                                        y2="140"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            stop-color="#EEEEEE"
                                            stop-opacity="0.7"
                                        />
                                        <stop
                                            offset="1"
                                            stop-color="#EEEEEE"
                                            stop-opacity="0.3"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_191_116"
                                        x1="85"
                                        y1="30"
                                        x2="85"
                                        y2="140"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" />
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="secsvg">
                            <svg
                                className="secondsvg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="160"
                                height="160"
                                viewBox="0 0 160 160"
                                fill="none"
                            >
                                <path
                                    d="M71.4286 22C71.4286 20.8954 72.324 20 73.4286 20H86.5714C87.676 20 88.5714 20.8954 88.5714 22V27.5901C88.5714 28.567 89.2782 29.3967 90.2358 29.5901C96.8384 30.9235 102.983 33.5216 108.405 37.1208C109.219 37.6609 110.305 37.5736 110.995 36.8831L114.951 32.9269C115.732 32.1459 116.999 32.1459 117.78 32.9269L127.073 42.2203C127.854 43.0014 127.854 44.2677 127.073 45.0488L123.117 49.0049C122.426 49.6955 122.339 50.7815 122.879 51.5951C126.478 57.0174 129.077 63.1616 130.41 69.7642C130.603 70.7218 131.433 71.4286 132.41 71.4286H138C139.105 71.4286 140 72.324 140 73.4286V86.5714C140 87.676 139.105 88.5714 138 88.5714H132.41C131.433 88.5714 130.603 89.2782 130.41 90.2358C129.077 96.8383 126.478 102.983 122.879 108.405C122.339 109.218 122.427 110.304 123.117 110.995L127.073 114.951C127.854 115.732 127.854 116.999 127.073 117.78L117.78 127.073C116.999 127.854 115.732 127.854 114.951 127.073L110.995 123.117C110.305 122.426 109.219 122.339 108.405 122.879C102.983 126.478 96.8385 129.076 90.2358 130.41C89.2782 130.603 88.5714 131.433 88.5714 132.41V138C88.5714 139.105 87.676 140 86.5714 140H73.4286C72.324 140 71.4286 139.105 71.4286 138V132.41C71.4286 131.433 70.7218 130.603 69.7642 130.41C63.1616 129.077 57.0174 126.478 51.5951 122.879C50.7815 122.339 49.6955 122.426 49.005 123.117L45.0488 127.073C44.2678 127.854 43.0015 127.854 42.2204 127.073L32.927 117.78C32.146 116.999 32.146 115.732 32.927 114.951L36.8831 110.995C37.5737 110.305 37.6609 109.219 37.1208 108.405C33.5216 102.983 30.9235 96.8384 29.5901 90.2358C29.3967 89.2782 28.567 88.5714 27.5901 88.5714H22C20.8954 88.5714 20 87.676 20 86.5714V73.4286C20 72.324 20.8954 71.4286 22 71.4286H27.5901C28.567 71.4286 29.3967 70.7218 29.5901 69.7642C30.9235 63.1615 33.5217 57.0172 37.1208 51.5949C37.6609 50.7812 37.5737 49.6953 36.8831 49.0047L32.927 45.0486C32.146 44.2676 32.146 43.0013 32.927 42.2202L42.2205 32.9268C43.0015 32.1458 44.2678 32.1458 45.0489 32.9268L49.005 36.8829C49.6956 37.5735 50.7815 37.6607 51.5952 37.1207C57.0174 33.5216 63.1617 30.9235 69.7642 29.5901C70.7218 29.3967 71.4286 28.567 71.4286 27.5901V22Z"
                                    fill="url(#paint0_radial_191_3)"
                                />
                                <rect
                                    x="40.5"
                                    y="40.5"
                                    width="79"
                                    height="79"
                                    rx="39.5"
                                    fill="url(#paint1_linear_191_3)"
                                    stroke="url(#paint2_linear_191_3)"
                                />
                                <rect
                                    x="90"
                                    y="70"
                                    width="20"
                                    height="20"
                                    rx="10"
                                    transform="rotate(90 90 70)"
                                    fill="white"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_191_3"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(20 20) rotate(45) scale(169.706)"
                                    >
                                        <stop stop-color="#65519E" />
                                        <stop offset="1" stop-color="#CE8FFF" />
                                    </radialGradient>
                                    <linearGradient
                                        id="paint1_linear_191_3"
                                        x1="80"
                                        y1="40"
                                        x2="80"
                                        y2="120"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            stop-color="#EEEEEE"
                                            stop-opacity="0.7"
                                        />
                                        <stop
                                            offset="1"
                                            stop-color="#EEEEEE"
                                            stop-opacity="0.3"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_191_3"
                                        x1="80"
                                        y1="40"
                                        x2="80"
                                        y2="120"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" />
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg
                                className="whiteSVG"
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="42"
                                viewBox="0 0 60 42"
                                fill="none"
                            >
                                <path
                                    d="M0 21.3878C0 13.7337 2.86646 6.74905 7.58445 1.44884C8.31889 0.623763 9.59078 0.638421 10.3654 1.42593L14.5728 5.70349C15.3474 6.49093 15.3281 7.75135 14.6215 8.60025C11.7357 12.0669 10 16.5246 10 21.3878C10 26.1915 11.6935 30.5996 14.5161 34.0477C15.2158 34.9025 15.2247 36.163 14.4436 36.9441L10.201 41.1867C9.41991 41.9678 8.148 41.972 7.42038 41.1409C2.80009 35.8638 0 28.9528 0 21.3878Z"
                                    fill="white"
                                />
                                <path
                                    d="M49.6347 41.3496C50.4093 42.1371 51.6812 42.1518 52.4156 41.3267C57.1336 36.0265 60 29.0419 60 21.3878C60 13.8228 57.1999 6.91176 52.5796 1.63463C51.852 0.803578 50.58 0.807759 49.799 1.58881L45.5563 5.83145C44.7753 6.6125 44.7841 7.87308 45.4838 8.7278C48.3064 12.1759 50 16.5841 50 21.3878C50 26.2509 48.2643 30.7087 45.3786 34.1753C44.6719 35.0242 44.6527 36.2846 45.4272 37.0721L49.6347 41.3496Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
