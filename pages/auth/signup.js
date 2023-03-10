import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Signup.module.css";
import Image from "next/image";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${styles.auth} ${styles.signup_page}`}>
      <div className={styles.auth_container}>
        <div className={styles.image_container}></div>
        <div className={styles.signup_container}>
          <div className={styles.signup_content}>
            <div className={styles.header}>Create your account</div>
            <div className={styles.header_text}>Please enter your details.</div>
            <form className={styles.form_container}>
              <label className={styles.labels} htmlFor="username">
                Username
              </label>
              <br />
              <input
                maxLength={20}
                required
                className={`${styles.username} ${styles.input}`}
                name="username"
                type="text"
              />
              <p className={styles.username_rule}>
                Max. 20 characters are allowed!
              </p>

              <label className={styles.labels} htmlFor="email">
                Email address
              </label>
              <br />
              <input
                required
                className={`${styles.email} ${styles.input}`}
                name="email"
                type="email"
              />
              <br />

              <label className={styles.labels} htmlFor="password">
                Password
              </label>
              <br />
              <div className={styles.password_container}>
                <input
                  required
                  className={`${styles.password} ${styles.input}`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                {!showPassword ? (
                  <i
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={`${styles.show} bi bi-eye`}
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={`${styles.show} bi bi-eye-slash`}
                  ></i>
                )}
              </div>

              <input
                className={styles.signup_btn}
                type="submit"
                value="signup"
              />
            </form>
            <div className={styles.or}>OR</div>
            <button className={styles.signup_google}>
              <Image
                className={styles.google_logo}
                width={15}
                height={15}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                alt="google"
              />
              CONTINUE WITH GOOGLE
            </button>
            <button className={styles.signup_linkedin}>
              <Image
                className={styles.linkedin_logo}
                width={15}
                height={15}
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="google"
              />
              CONTINUE WITH LINKEDIN
            </button>
            <p className={styles.login_text}>
              Already have an account?{" "}
              <span className={styles.login_btn}>
                <Link href="/auth/login">Log In!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
