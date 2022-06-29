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
                            <h2>Chào mừng bạn đến với<br />Pinterest</h2>
                            <p>Tìm những ý tưởng mới để thử</p>
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>Email</p>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>Mật khẩu</p>
                            <input type="text" placeholder="Tạo mật khẩu" />
                        </div>
                        <div className={Styles.tab5__box_input}>
                            <p>Tuổi</p>
                            <input type="text" placeholder="Tuổi" />
                        </div>
                        <div className={Styles.tab5__box_button}>
                            <button>
                                Tiếp tục
                            </button>
                        </div>
                        <p className={Styles.tab5__or}>Hoặc</p>
                        <div className={Styles.tab5__box_button}>
                            <button className={Styles.tab5__btn_fb}>
                                <FaFacebook className={Styles.tab5__icons} />
                                <p>Tiếp tục với với Facebook</p>
                            </button>
                        </div>
                        <div className={Styles.tab5__box_button}>
                            <button className={Styles.tab5__btn_gg} onClick={handleClickButtonLoginWithGG}>
                                <FcGoogle className={Styles.tab5__icons} />
                                <p>Tiếp tục với với Google</p>
                            </button>
                        </div>
                        <div className={Styles.tab5__box_fotter}>
                            <p>Bằng cách tiếp tục, bạn đã đồng ý với<br />
                                <span>Điều khoản dịch vụ</span> của Pinterest và xác nhận<br />
                                rằng bạn đã đọc <span>Chính sách quyền riêng tư</span> của<br />
                                chúng tôi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupLogin;