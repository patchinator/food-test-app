import image from "../../components/Assets/header-image.jpg";
import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";

import style from "./HomepageHead.module.css";

const HomepageHead = () => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={style.head_card}>
        <div className={style.wrapper}>
          <div className={style.static_text}>I fancy</div>
          <div className={style.text_box}>
            <ul className={style.dynamic_text}>
              <li>
                <span>dessert</span>
              </li>
              <li>
                <span>jamaican</span>
              </li>
              <li>
                <span>veggie</span>
              </li>
              <li>
                <span>endulging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.head}>
        <Image className={style.image} src={image} alt="" />
      </div>
    </Fragment>
  );
};

export default HomepageHead;
