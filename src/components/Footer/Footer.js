import { logoUrl } from "../../constants";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-wrapper"]}>
      <div className={`${styles.footer} ${styles["max-width-wrapper"]}`}>
        <div className={styles["footer-header"]}>
          <img src={logoUrl} className={styles.logo} alt={"Zomato Logo"} />
          <div className={styles["button-wrapper"]}>
            <div className={styles["button-county"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="25"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="40"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.371094 18 L 27.773438 18 L 27.773438 23.921875 L 2.371094 23.921875 Z M 2.371094 18 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                  <clipPath id="id2">
                    <path
                      d="M 2.371094 10 L 27.773438 10 L 27.773438 19 L 2.371094 19 Z M 2.371094 10 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                  <clipPath id="id3">
                    <path
                      d="M 2.371094 5.050781 L 27.773438 5.050781 L 27.773438 11 L 2.371094 11 Z M 2.371094 5.050781 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#id1)">
                  <path
                    fill="rgb(7.449341%, 53.329468%, 3.138733%)"
                    d="M 2.375 21.019531 C 2.375 22.625 3.640625 23.921875 5.199219 23.921875 L 24.945312 23.921875 C 26.503906 23.921875 27.769531 22.625 27.769531 21.019531 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 21.019531 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
                <g clipPath="url(#id2)">
                  <path
                    fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                    d="M 2.375 10.859375 L 27.769531 10.859375 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 10.859375 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
                <g clipPath="url(#id3)">
                  <path
                    fill="rgb(100%, 59.999084%, 19.999695%)"
                    d="M 27.769531 10.859375 L 27.769531 7.957031 C 27.769531 6.351562 26.503906 5.050781 24.945312 5.050781 L 5.199219 5.050781 C 3.640625 5.050781 2.375 6.351562 2.375 7.957031 L 2.375 10.859375 Z M 27.769531 10.859375 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
                <path
                  fill="rgb(0%, 0%, 50.19989%)"
                  d="M 17.894531 14.488281 C 17.894531 14.871094 17.820312 15.242188 17.679688 15.597656 C 17.535156 15.953125 17.332031 16.269531 17.066406 16.539062 C 16.804688 16.8125 16.496094 17.023438 16.152344 17.167969 C 15.804688 17.316406 15.445312 17.390625 15.074219 17.390625 C 14.699219 17.390625 14.339844 17.316406 13.992188 17.167969 C 13.648438 17.023438 13.34375 16.8125 13.078125 16.539062 C 12.8125 16.269531 12.609375 15.953125 12.464844 15.597656 C 12.324219 15.242188 12.25 14.871094 12.25 14.488281 C 12.25 14.101562 12.324219 13.730469 12.464844 13.375 C 12.609375 13.019531 12.8125 12.707031 13.078125 12.433594 C 13.34375 12.164062 13.648438 11.953125 13.992188 11.804688 C 14.339844 11.65625 14.699219 11.585938 15.074219 11.585938 C 15.445312 11.585938 15.804688 11.65625 16.152344 11.804688 C 16.496094 11.953125 16.804688 12.164062 17.066406 12.433594 C 17.332031 12.707031 17.535156 13.019531 17.679688 13.375 C 17.820312 13.730469 17.894531 14.101562 17.894531 14.488281 Z M 17.894531 14.488281 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                  d="M 17.1875 14.488281 C 17.1875 14.777344 17.136719 15.054688 17.027344 15.320312 C 16.921875 15.585938 16.765625 15.824219 16.570312 16.027344 C 16.371094 16.230469 16.140625 16.390625 15.882812 16.5 C 15.621094 16.609375 15.351562 16.664062 15.074219 16.664062 C 14.792969 16.664062 14.523438 16.609375 14.261719 16.5 C 14.003906 16.390625 13.773438 16.230469 13.578125 16.027344 C 13.378906 15.824219 13.226562 15.585938 13.117188 15.320312 C 13.011719 15.054688 12.957031 14.777344 12.957031 14.488281 C 12.957031 14.199219 13.011719 13.921875 13.117188 13.65625 C 13.226562 13.386719 13.378906 13.152344 13.578125 12.949219 C 13.773438 12.742188 14.003906 12.585938 14.261719 12.476562 C 14.523438 12.367188 14.792969 12.308594 15.074219 12.308594 C 15.351562 12.308594 15.621094 12.367188 15.882812 12.476562 C 16.140625 12.585938 16.371094 12.742188 16.570312 12.949219 C 16.765625 13.152344 16.921875 13.386719 17.027344 13.65625 C 17.136719 13.921875 17.1875 14.199219 17.1875 14.488281 Z M 17.1875 14.488281 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  fill="rgb(39.99939%, 39.99939%, 70.199585%)"
                  d="M 15.074219 12.308594 L 15.175781 13.953125 L 15.882812 12.476562 L 15.367188 14.035156 L 16.570312 12.949219 L 15.511719 14.183594 L 17.027344 13.65625 L 15.589844 14.382812 L 17.1875 14.488281 L 15.589844 14.59375 L 17.027344 15.320312 L 15.511719 14.789062 L 16.570312 16.027344 L 15.367188 14.941406 L 15.882812 16.5 L 15.175781 15.023438 L 15.074219 16.664062 L 14.96875 15.023438 L 14.261719 16.5 L 14.777344 14.941406 L 13.574219 16.027344 L 14.632812 14.789062 L 13.117188 15.320312 L 14.554688 14.59375 L 12.957031 14.488281 L 14.554688 14.382812 L 13.117188 13.65625 L 14.632812 14.183594 L 13.574219 12.949219 L 14.777344 14.035156 L 14.261719 12.476562 L 14.96875 13.953125 Z M 15.074219 12.308594 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  fill="rgb(0%, 0%, 50.19989%)"
                  d="M 15.777344 14.488281 C 15.777344 14.6875 15.707031 14.859375 15.570312 15 C 15.433594 15.140625 15.265625 15.214844 15.074219 15.214844 C 14.878906 15.214844 14.710938 15.140625 14.574219 15 C 14.4375 14.859375 14.367188 14.6875 14.367188 14.488281 C 14.367188 14.289062 14.4375 14.117188 14.574219 13.972656 C 14.710938 13.832031 14.878906 13.761719 15.074219 13.761719 C 15.265625 13.761719 15.433594 13.832031 15.570312 13.972656 C 15.707031 14.117188 15.777344 14.289062 15.777344 14.488281 Z M 15.777344 14.488281 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </svg>
              <span>India</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className={`sc-rbbb40-0 iRDDBk ${styles["arrow-toggle"]}`}
              >
                <title>chevron-down</title>
                <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>
            </div>
            <div className={`${styles["button-language"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iwHbVQ"
              >
                <title>language-globe</title>
                <path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"></path>
              </svg>
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className={`sc-rbbb40-0 iRDDBk ${styles["arrow-toggle"]}`}
              >
                <title>chevron-down</title>
                <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${styles["footer-content"]}`}>
          <div className={`${styles["column-content"]} ${styles.about}`}>
            <div className={`${styles["column-header"]}`}>ABOUT ZOMATO</div>
            <div className={`${styles["column-body"]} `}>
              <div>Who We Are</div>
              <div>Blog</div>
              <div>Work With Us</div>
              <div>Investor Relations</div>
              <div>Report Fraud</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className={`${styles["column-content"]} ${styles.zomaverse}`}>
            <div className={`${styles["column-header"]}`}>ZOMAVERSE</div>
            <div className={`${styles["column-body"]}`}>
              <div>Zomato</div>
              <div>Blinkit</div>
              <div>Feeding India</div>
              <div>Hyperpure</div>
              <div>Zomaland</div>
            </div>
          </div>
          <div className={`${styles["column-content"]} ${styles.restaurants}`}>
            <div className={`${styles["column-header"]}`}>FOR RESTAURANTS</div>
            <div className={`${styles["column-body"]}`}>
              <div>Partner With Us</div>
              <div>Apps For You</div>
            </div>
          </div>
          <div className={`${styles["column-content"]} ${styles.enterprises}`}>
            <div className={`${styles["column-header"]}`}>FOR ENTERPRISES</div>
            <div className={`${styles["column-body"]}`}>
              <div>Zomato For Work</div>
            </div>
          </div>
          <div className={`${styles["column-content"]} ${styles.learn}`}>
            <div className={`${styles["column-header"]}`}>LEARN MORE</div>
            <div className={`${styles["column-body"]}`}>
              <div>Privacy</div>
              <div>Security</div>
              <div>Terms</div>
              <div>Sitemap</div>
            </div>
          </div>
          <div className={`${styles["column-content"]} ${styles.social}`}>
            <div className={`${styles["column-header"]}`}>SOCIAL LINKS</div>
            <div className={`${styles["social-body"]}`}>
              <div className={`${styles["social-icons"]}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15.5 15.4375 15.5 11.375 15.5 11.375Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.0625 8.125V8.5L9.6875 8.4375C8.3125 8.25 7.125 7.6875 6.125 6.6875L5.625 6.1875L5.5 6.5625C5.25 7.375 5.375 8.25 5.9375 8.8125C6.25 9.125 6.1875 9.1875 5.6875 9C5.5 8.9375 5.375 8.875 5.3125 8.9375C5.25 9 5.4375 9.6875 5.5625 9.9375C5.75 10.3125 6.1875 10.6875 6.5625 10.875L6.9375 11.0625H6.5C6.0625 11.0625 6.0625 11.0625 6.125 11.25C6.3125 11.75 6.875 12.25 7.5625 12.5L8 12.6875L7.625 12.9375C7 13.3125 6.3125 13.5 5.625 13.5C5.3125 13.5 5 13.5625 5 13.5625C5 13.625 5.9375 14.0625 6.4375 14.25C8.0625 14.75 9.9375 14.5 11.375 13.6875C12.375 13.0625 13.375 11.875 13.875 10.75C14.125 10.125 14.375 9 14.375 8.5C14.375 8.1875 14.4375 8.125 14.8125 7.6875C15.0625 7.4375 15.3125 7.1875 15.3125 7.0625C15.375 6.9375 15.375 6.9375 15 7.0625C14.375 7.3125 14.25 7.25 14.625 6.875C14.875 6.625 15.125 6.1875 15.125 6.0625C15.125 6.0625 15 6.0625 14.875 6.125C14.75 6.1875 14.4375 6.3125 14.1875 6.375L13.8125 6.5L13.5 6.25C13.3125 6.125 13 5.9375 12.875 5.9375C12.5 5.8125 11.9375 5.8125 11.5625 6C10.5625 6.25 10 7.1875 10.0625 8.125Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM15.1875 7.4375C15.0625 7 14.6875 6.625 14.25 6.5C13.4375 6.25 10.1875 6.25 10.1875 6.25C10.1875 6.25 6.9375 6.25 6.125 6.5C5.6875 6.625 5.3125 7 5.1875 7.4375C5 8.25 5 10 5 10C5 10 5 11.75 5.25 12.5625C5.375 13 5.75 13.375 6.1875 13.5C7 13.75 10.25 13.75 10.25 13.75C10.25 13.75 13.5 13.75 14.3125 13.5C14.75 13.375 15.125 13 15.25 12.5625C15.5 11.75 15.5 10 15.5 10C15.5 10 15.4375 8.25 15.1875 7.4375ZM9.25 11.75V8.5L11.875 10.125L9.25 11.75Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
                </svg>
              </div>
              <div className={`${styles["app-icon-wrapper"]}`}>
                <img
                  alt="Apple App Store"
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  className={`${styles["app-icon"]}`}
                />
                <img
                  alt="Google Play Store"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  className={`${styles["app-icon"]}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottom}`}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 ©Souvik Patra and
          team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
