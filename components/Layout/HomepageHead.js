import { motion } from "framer-motion";

import HomepageBackground from "./HomepageBackground";

import style from "./HomepageHead.module.scss";

const HomepageHead = () => {
  return (
    <HomepageBackground>
      <motion.div
        className={style.head_card}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
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
      </motion.div>
    </HomepageBackground>
  );
};

export default HomepageHead;
