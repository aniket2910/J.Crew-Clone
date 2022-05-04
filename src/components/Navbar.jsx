import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import { HeartIcon, MainLogo } from "./SvgIcons";

export default function Navbar() {
    <Routes>
        <Route path="/" element></Route>
        <Route path="/men" element></Route>
        <Route path="/women" element></Route>
        <Route path="/kids" element></Route>
        <Route path="/swim" element></Route>
        <Route path="/chasmere" element></Route>
        <Route path="/home" element></Route>
        <Route path="/stories" element></Route>
        <Route path="/sale" element></Route>
    </Routes>;
    return (
        <div className={styles.nav_parent}>
            <div className={styles.nav_logo}>
                <MainLogo />
                <div className={styles.nav_linkWrap}>
                    <Link to="/">
                        <h4>New</h4>
                    </Link>
                    <Link to="/men">
                        <h4>Men</h4>
                    </Link>
                    <Link to="/women">
                        <h4>Women</h4>
                    </Link>
                    <Link to="/kids">
                        <h4>Kids</h4>
                    </Link>
                    <Link to="/swim">
                        <h4>Swim</h4>
                    </Link>
                    <Link to="/chasmere">
                        <h4>Chasmere</h4>
                    </Link>
                    <Link to="/home">
                        <h4>Home</h4>
                    </Link>
                    <Link to="/stories">
                        <h4>Stories</h4>
                    </Link>
                    <Link to="/sale">
                        <h4>Sale</h4>
                    </Link>
                </div>
            </div>

            <div className={styles.nav_end}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        style={{ marginRight: "-25px", zIndex: 2 }}
                        src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_search_d.svg"
                        alt=""
                    />
                    <input
                        type="search"
                        aria-label="Site wide search"
                        className={styles.nav_searchInput}
                        placeholder="Search J.Crew"
                        // value=""
                        data-qaid="navDesktopSearchInput"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        maxLength="50"
                        style={{ height: 36, width: 180 }}
                    ></input>
                </div>
                <div className={styles.nav_logIN}>Sign In</div>
                <div className={styles.nav_icons}>
                    <HeartIcon />
                </div>
                <div className={styles.nav_icons}>
                    {/* <Cart /> */}
                    <img
                        src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_bag_d.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
