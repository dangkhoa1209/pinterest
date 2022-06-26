import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Styles from "./Login.module.css";
import { FiChevronDown } from "react-icons/fi";
const Image = lazy(() => import("../../components/Image/Image"));

const countTap = 5;

const Login = () => {

    const main = useRef(false);
    const titleChange = useRef(false);
    const iconScrollDown = useRef(false);
    const [bannerTapActive, setBannerTapActive] = useState(0);


    useEffect(() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });
        slidesBanner();
        const interval = setInterval(slidesBanner, 5000);

        window.addEventListener('scroll', eventScroll);
        return () => {
            window.removeEventListener('scroll', eventScroll);
            clearInterval(interval);
        }

    }, []);

    var scrollY = 0;
    var preScrollY = 0;
    var scrollDown = false;
    const eventScroll = () => {
        let height = window.innerHeight;
        // console.log("height: ", height);
        let y = window.scrollY;
        if (y > preScrollY) {
            // console.log("kéo xuống");
            if (!scrollDown) {
                scrollDown = true;
                scrollY = y;
            }

            if (y >= scrollY + height / 1.5) {
                // console.log("xuống");
                scrollY = y;
                let top = main.current.style.top;
                top = top.replace("vh", "");
                top = Number(top);
                console.log(top);
                if (top > -100 * (countTap - 1)) {
                    scrollY = (Math.abs(top) / 100 + 1) * height;
                    console.log((Math.abs(top) / 100 + 1) * height);
                    window.scrollTo({ top: scrollY, behavior: 'smooth' });
                    main.current.style.top = top - 100 + 'vh';
                }
            }
        } else {
            if (scrollDown) {
                scrollDown = false;
                scrollY = y;
            }
            if (y <= scrollY - height / 1.5) {
                console.log("lên");
                scrollY = y;
                let top = main.current.style.top;
                top = top.replace("vh", "");
                top = Number(top);
                console.log(top);
                if (top < 0) {
                    window.scrollBy(0, 100)

                    scrollY = (Math.abs(top) / 100 - 1) * height;
                    window.scrollTo({ top: scrollY, behavior: 'smooth' });
                    main.current.style.top = top + 100 + 'vh';
                }

            }
        }
        preScrollY = y;
    }

    var active = 0;
    const slidesBanner = () => {
        active += 1;
        setBannerTapActive(active);

        if (active === 1) {
            titleChange.current.style.color = "rgb(190, 128, 10)";
            iconScrollDown.current.style.backgroundColor = "rgb(190, 128, 10)";
            titleChange.current.innerText = "ý tưởng bữa tối";
        }
        if (active === 2) {
            titleChange.current.style.color = "rgb(85, 130, 112)";
            iconScrollDown.current.style.backgroundColor = "rgb(85, 130, 112)";
            titleChange.current.innerText = "ý tưởng trang ý nhà cửa";
        }
        if (active === 3) {
            titleChange.current.style.color = "rgb(0, 104, 205)";
            iconScrollDown.current.style.backgroundColor = "rgb(0, 104, 205)";
            titleChange.current.innerText = "trang phục mới";
        }
        if (active === 4) {
            titleChange.current.style.color = "rgb(55, 112, 77)";
            iconScrollDown.current.style.backgroundColor = "rgb(55, 112, 77)";
            titleChange.current.innerText = "ý tưởng trồng cây";
            active = 0;
        }




    }

    // useEffect(() => {
    //     let height = window.innerHeight;
    //     window.scrollTo({ top: 0});
    //     window.scrollTo({ top: 2* height,behavior: 'smooth'});
    // }, []);

    const handbleClickScrolldown = () => {
        let height = window.innerHeight;
        window.scrollTo({ top: 0 });
        window.scrollTo({ top: height, behavior: 'smooth' });
    }
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.box_main} ref={main}>
                    <div className={`${Styles.tap} ${Styles.tap1}`}>
                        <div className={Styles.tap1__box_tap1}>

                            <div className={Styles.tap1__header}>
                                <div className={Styles.tap1__logo_title}>
                                    <div className={Styles.tap1__logo}>
                                        <svg xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
                                        </svg>
                                    </div>
                                    <div className={Styles.tap1__title}>
                                        <h3>pinterest</h3>
                                    </div>
                                </div>
                                <div className={Styles.tap1__option_button}>
                                    <div className={Styles.tap1__option}>
                                        <p>giới thiệu</p>
                                        <p>danh nghiệp</p>
                                        <p>blog</p>
                                    </div>
                                    <div className={Styles.tap1__button}>
                                        <button className={Styles.tap1__btn_login}>đăng nhập</button>
                                        <button className={Styles.tap1__btn_register}>đăng ký</button>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.tab1__banner}>
                                <div className={Styles.tab1__box_banner}>
                                    <h3 className={Styles.tab1__title}>Xem ý tưởng tiếp theo</h3>
                                    <h3 className={Styles.tab1__title_change} ref={titleChange}>...</h3>
                                    <div className={Styles.tab1__ideas_scroller}>
                                        <ul>
                                            <li>
                                                <div className={`${Styles.tab1__dot} ${bannerTapActive === 1 && Styles.tab1__dot_active}`} style={{ "--color": "rgb(190, 128, 10)" }}></div>
                                            </li>
                                            <li>
                                                <div className={`${Styles.tab1__dot} ${bannerTapActive === 2 && Styles.tab1__dot_active}`} style={{ "--color": "rgb(85, 130, 112)" }}></div>
                                            </li>
                                            <li>
                                                <div className={`${Styles.tab1__dot} ${bannerTapActive === 3 && Styles.tab1__dot_active}`} style={{ "--color": "rgb(0, 104, 205)" }}></div>
                                            </li>
                                            <li>
                                                <div className={`${Styles.tab1__dot} ${bannerTapActive === 4 && Styles.tab1__dot_active}`} style={{ "--color": "rgb(55, 112, 77)" }}></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className={Styles.tab1__slides_product}>
                                {bannerTapActive === 1 &&
                                    <div className={Styles.tab1__box_slides_product}>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 1 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi1.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi2.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi3.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi4.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>} >
                                                <div className={Styles.tab1__item} style={{ "--rows": 5 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi5.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 2 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi6.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi7.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi8.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi9.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 3 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi10.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi11.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi12.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi13.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum0}`} style={{ "--i": -1.5, "--colums": 4 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi14.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi15.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi16.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi17.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 5 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi18.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi19.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi20.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi21.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 6 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi22.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi23.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi24.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi25.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 7 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 1 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi26.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 2 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi27.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 3 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi28.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 4 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi29.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item} style={{ "--rows": 5 }}>
                                                    <Image className={Styles.tab1__colum_image} src={require("../../assets/images/buatoi30.jpeg")} ></Image>
                                                </div>
                                            </Suspense>
                                        </div>

                                    </div>
                                }
                                {bannerTapActive === 2 &&
                                    <div className={Styles.tab1__box_slides_product}>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 1 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua1.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua2.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua3.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua4.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua5.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 2 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua6.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua7.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua8.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua9.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 3 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua10.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua11.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua12.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua13.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum0}`} style={{ "--i": -1.5, "--colums": 4 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua14.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua15.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua16.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua17.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 5 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua18.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua19.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua20.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua21.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 6 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua22.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua23.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua24.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua25.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 7 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua26.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua27.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua28.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua29.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/nhacua30.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>

                                    </div>
                                }
                                {bannerTapActive === 3 &&
                                    <div className={Styles.tab1__box_slides_product}>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 1 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc1.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc2.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc3.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc4.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc5.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 2 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc6.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc7.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc8.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc9.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 3 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc10.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc11.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc12.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc13.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum0}`} style={{ "--i": -1.5, "--colums": 4 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc14.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc15.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc16.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc17.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 5 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc18.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc19.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc20.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc21.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 6 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc22.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc23.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc24.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc25.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 7 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc26.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc27.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc28.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc29.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/trangphuc30.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>

                                    </div>
                                }
                                {bannerTapActive === 4 &&
                                    <div className={Styles.tab1__box_slides_product}>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 1 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong1.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong2.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong3.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong4.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong5.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 2 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong6.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong7.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong8.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong9.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 3 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong10.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong11.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong12.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong13.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum0}`} style={{ "--i": -1.5, "--colums": 4 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong14.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong15.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong16.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong17.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum1}`} style={{ "--i": 0, "--colums": 5 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong18.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong19.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong20.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong21.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum2}`} style={{ "--i": 1, "--colums": 6 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong22.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong23.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong24.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong25.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <div className={`${Styles.tab1__colum} ${Styles.tab1__colum3}`} style={{ "--i": 2, "--colums": 7 }}>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong26.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong27.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong28.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong29.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                            <Suspense fallback={<div className={Styles.tab1__item}></div>}>
                                                <div className={Styles.tab1__item}>
                                                    <Image src={require("../../assets/images/caytrong30.jpeg")}></Image>
                                                </div>
                                            </Suspense>
                                        </div>

                                    </div>
                                }
                                <div className={Styles.tab1__layer}></div>
                                <div className={Styles.tab1__footer}>
                                    <p onClick={handbleClickScrolldown}>
                                        Đây là cách thức hoạt động
                                        <FiChevronDown className={Styles.icon}></FiChevronDown>
                                    </p>
                                </div>
                            </div>

                            <div className={Styles.tab1__btn_scroll_down} ref={iconScrollDown} onClick={handbleClickScrolldown}>
                                <p>
                                    <FiChevronDown className={Styles.tab1__icon_scroll_down}></FiChevronDown>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className={`${Styles.tap} ${Styles.tap2}`}>
                        <div className={Styles.tap2__box_tap2}>
                            <div className={Styles.tap2__left}>
                                <div className={`${Styles.tap2_image} ${Styles.tap2_image1}`}>
                                    <img src={require("../../assets/images/buatoi1.jpeg")} alt="" />
                                </div>
                                <div className={`${Styles.tap2_image} ${Styles.tap2_image2}`}>
                                    <img src={require("../../assets/images/buatoi2.jpeg")} alt="" />
                                </div>
                                <div className={`${Styles.tap2_image} ${Styles.tap2_image3}`}>
                                    <img src={require("../../assets/images/buatoi3.jpeg")} alt="" />
                                </div>
                                <div className={`${Styles.tap2_image} ${Styles.tap2_image4}`}>
                                    <img src={require("../../assets/images/buatoi4.jpeg")} alt="" />
                                </div>
                                <div className={`${Styles.tap2_inpput}`}>
                                    <p>Bữa tối với món gà dễ làm</p>
                                </div>
                            </div>
                            <div className={Styles.tap2__right}>
                                <div className={Styles.tap2__box_right}>
                                    <h1>Tìm kiếm ý tưởng</h1>
                                    <p>Bạn muốn thử điều gì tiếp theo? Hãy<br />nghĩ về ý tưởng bạn yêu thích—như<br />"bữa tối với món gà dễ làm"—và<br />xem bạn tìm thấy gì.</p>
                                    <p className={Styles.button}>
                                        Khám phá
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.tap} ${Styles.tap3}`}>
                        <div className={Styles.tap3__box_tap3}>
                            <div className={Styles.tap3__left}>
                                <div className={Styles.tap3__box_left}>
                                    <h1>Lưu ý tưởng bạn thích</h1>
                                    <p>Thu thập nội dung bạn yêu thích để<br />bạn có thể quay lại xem sau.</p>
                                    <p className={Styles.button}>
                                        Khám phá
                                    </p>
                                </div>
                            </div>
                            <div className={Styles.tap3__right}>
                                <div className={Styles.tab3__box_right}>
                                    <div className={`${Styles.tab3__box_image} ${Styles.tab3__box_image1}`}>
                                        <img src={require("../../assets/images/buatoi1.jpeg")} alt="" />
                                        <p>Dương sỉ<br />trang trí</p>
                                    </div>
                                    <div className={`${Styles.tab3__box_image} ${Styles.tab3__box_image2}`}>
                                        <img src={require("../../assets/images/buatoi2.jpeg")} alt="" />
                                        <p>Dương sỉ trang trí</p>
                                    </div>
                                    <div className={`${Styles.tab3__box_image} ${Styles.tab3__box_image3}`}>
                                        <img src={require("../../assets/images/buatoi3.jpeg")} alt="" />
                                        <p>Dương sỉ trang trí</p>
                                    </div>
                                    <div className={`${Styles.tab3__box_image} ${Styles.tab3__box_image4}`}>
                                        <img src={require("../../assets/images/buatoi4.jpeg")} alt="" />
                                        <p>Dương sỉ trang trí</p>
                                    </div>
                                    <div className={`${Styles.tab3__box_image} ${Styles.tab3__box_image5}`}>
                                        <img src={require("../../assets/images/buatoi5.jpeg")} alt="" />
                                        <p>Dương sỉ trang trí</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.tap} ${Styles.tap4}`}>
                        <div className={Styles.tap4__box_tap4}>
                            <div className={Styles.tap4__left}>
                                <div className={Styles.tap4__box_left}>
                                    <img src={require("../../assets/images/bgtap4.png")}></img>
                                </div>
                            </div>
                            <div className={Styles.tap4__right}>
                                <div className={Styles.tap4__box_right}>
                                    <h1>Xem, làm, thử,<br />thực hiện</h1>
                                    <p>Điều tuyệt nhất trên Pinterest là khám<br />phá những nội dung và ý tưởng mới từ<br />mọi người khắp thế giới.</p>
                                    <p className={Styles.button}>
                                        Khám phá
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.tap} ${Styles.tab5}`}>
                        <div className={Styles.tap5__box_tap5}>
                            <div className={Styles.tap5__right}>
                                <div className={Styles.tap5__box_right}>
                                    <p>Đăng ký để<br/>nhận thêm ý<br/> tưởng</p>
                                </div>
                            </div>
                            <div className={Styles.tap5__left}>
                                <div className={Styles.tap5__box_left}>
                                    <div className={Styles.tab5__box_logo}>
                                        <svg xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
                                        </svg>
                                    </div>
                                    <div className={Styles.tab5__box_title}>
                                        <h2>Chào mừng bạn đến với<br/>Pinterest</h2>
                                        <p>Tìm những ý tưởng mới để thử</p>
                                    </div>
                                    <div className={Styles.tab5__box_input}>
                                        <p>Email</p>
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className={Styles.tab5__box_input}>
                                        <p>Mật khẩu</p>
                                        <input type="text" placeholder="Tạo mật khẩu"/>
                                    </div>
                                    <div className={Styles.tab5__box_input}>
                                        <p>Tuổi</p>
                                        <input type="text" placeholder="Tuổi"/>
                                    </div>
                                    <div className={Styles.tab5__box_button}>
                                        <button>
                                            Tiếp tục
                                        </button>
                                    </div>
                                    <p className={Styles.tab5__or}>Hoặc</p>
                                    <div className={Styles.tab5__box_button}>
                                        <button className={Styles.tab5__btn_fb}>
                                            <FaFacebook className={Styles.tab5__icons}/>
                                            <p>Tiếp tục với với Facebook</p>
                                        </button>
                                    </div>
                                    <div className={Styles.tab5__box_button}>
                                        <button className={Styles.tab5__btn_gg}>
                                            <FcGoogle className={Styles.tab5__icons}/>
                                            <p>Tiếp tục với với Facebook</p>
                                        </button>
                                    </div>
                                    <div className={Styles.tab5__box_fotter}>
                                        <p>Bằng cách tiếp tục, bạn đã đồng ý với<br/>
                                        <span>Điều khoản dịch vụ</span> của Pinterest và xác nhận<br/>
                                        rằng bạn đã đọc <span>Chính sách quyền riêng tư</span> của<br/>
                                        chúng tôi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;