import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${styles.auth} ${styles.login_page}`}>
      <div className={styles.auth_container}>
        <div className={styles.image_container}></div>
        <div className={styles.login_container}>
          <div className={styles.login_content}>
            <div className={styles.header}>Welcome back!</div>
            <div className={styles.header_text}>Please enter your details.</div>
            <form className={styles.form_container}>
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

              <input className={styles.login_btn} type="submit" value="Login" />
            </form>
            <div className={styles.or}>OR</div>
            <button className={styles.login_google}>
              <Image
                className={styles.google_logo}
                width={15}
                height={15}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                alt="google"
              />
              LOGIN WITH GOOGLE
            </button>
            <button className={styles.login_linkedin}>
              <Image
                width={15}
                height={15}
                className={styles.linkedin_logo}
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
              />
              LOGIN WITH LINKEDIN
            </button>
            <p className={styles.signup_text}>
              Don&apos;t have an account?{" "}
              <span className={styles.signup_btn}>
                <Link href="/auth/signup">Sign Up!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
