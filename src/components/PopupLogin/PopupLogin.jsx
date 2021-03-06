import React from "react";
import Styles from "./PopupLogin.module.css";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {googleProvider, auth} from "../../firebase/firebase";
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";



const PopupLogin = ({setPopupLogin}) => {

    const navigate = useNavigate();
    
    const popupCLick = (e) => {
        e.stopPropagation();
        console.log("sdfsdf fsdf");
    }
    

    const handleClickButtonLoginWithGG = () => {
        signInWithPopup(auth, googleProvider)
            .then(data => {
                navigate("/");
            })
            .catch(e => {
                console.log(e);
            }) 
    }
    return (
        <>
         <div className={Styles.main} onClick={() => setPopupLogin(false)}>
              <div className={Styles.box_popup}>
                    <div className={Styles.tap5__box_left} onClick={(e) =>popupCLick(e) }>

                        <div className={Styles.tab5__box_logo}>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
                            </svg>
                        </div>
                        <div className={Styles.tab5__box_title}>
                            <h2>Ch??o m???ng b???n ?????n v???i<br />Pinterest</h2>
                            <p>T??m nh???ng ?? t?????ng m???i ????? th???</p>
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>Email</p>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>M???t kh???u</p>
                            <input type="text" placeholder="T???o m???t kh???u" />
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>Tu???i</p>
                            <input type="text" placeholder="Tu???i" />
                        </div>
                        <div className={Styles.tab5__box_button}>
                            <button>
                                Ti???p t???c
                            </button>
                        </div>
                        <p className={Styles.tab5__or}>Ho???c</p>
                        <div className={Styles.tab5__box_button}>
                            <button className={Styles.tab5__btn_fb}>
                                <FaFacebook className={Styles.tab5__icons} />
                                <p>Ti???p t???c v???i v???i Facebook</p>
                            </button>
                        </div>
                        <div className={Styles.tab5__box_button}>
                            <button className={Styles.tab5__btn_gg} onClick={handleClickButtonLoginWithGG}>
                                <FcGoogle className={Styles.tab5__icons} />
                                <p>Ti???p t???c v???i v???i Google</p>
                            </button>
                        </div>
                        <div className={Styles.tab5__box_fotter}>
                            <p>B???ng c??ch ti???p t???c, b???n ???? ?????ng ?? v???i<br />
                                <span>??i???u kho???n d???ch v???</span> c???a Pinterest v?? x??c nh???n<br />
                                r???ng b???n ???? ?????c <span>Ch??nh s??ch quy???n ri??ng t??</span> c???a<br />
                                ch??ng t??i
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupLogin;