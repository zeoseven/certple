import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dTitle, ImageFix } from '@components/main';

import "bootstrap/dist/css/bootstrap.min.css";
import '@components/styles/main.css';

import ICON_IMG from "@components/images/icon.png";
import packageData from "../package.json";



export default function ({ Component, pageProps }) {

    const router = useRouter();



    useEffect(() => {

        if (window.location.hostname == "certple.zeoseven.com") {
            const script = document.createElement("script");
            script.src = "https://cores-pub.zeoseven.com/main.js";
            script.defer = true;
            document.body.appendChild(script);
        };

        window.innerWidth < mdBreakpoint && setNavbarDisplay("d-none");

        import("bootstrap");

    }, []);



    const NavbarItem = ({ children, to, href }) => {
        if (to) {
            const path = router.pathname;
            let isActive = "";
            isActive = path == to ? "active" : "";
            return <Link className={`item ${isActive}`} href={to}>{children}</Link>
        } else {
            return <a href={href} target='_blank' className="item">{children}</a>
        };
    };



    const [navbarDisplay, setNavbarDisplay] = useState("");
    const mdBreakpoint = 768;

    const NavbarBtn_true = () => (<>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z" />
        </svg>
    </>);

    const NavbarBtn_false = () => (<>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
        <span className="ms-3">关闭边栏</span>
    </>);



    useEffect(() => {
        window.innerWidth < mdBreakpoint && setNavbarDisplay("d-none");
    }, [router.pathname]);



    useEffect(() => {

        const navbarBtn = document.querySelector(".navbar-btn");

        const handleClick = () => {
            setNavbarDisplay(prev => prev === "" ? "d-none" : "");
        };

        const handleResize = () => {
            if (window.innerWidth < mdBreakpoint) {
                setNavbarDisplay("d-none");
            };
        };

        if (navbarBtn) {
            navbarBtn.addEventListener("click", handleClick);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (navbarBtn) {
                navbarBtn.removeEventListener("click", handleClick);
            };
            window.removeEventListener("resize", handleResize);
        };

    });



    return (<>
        <Head>
            <title>{`${dTitle}`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.85, maximum-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>



        <noscript>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 5,
                backgroundColor: "#ffffff70",
                backdropFilter: "blur(1rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                textAlign: "center"
            }}>
                <div style={{ padding: "0 5vw", fontFamily: "system-ui" }}>
                    <p>Certple 需要 JavaScript 才能正常工作，尝试开启浏览器 JavaScript 后刷新页面。</p>
                </div>
            </div>
        </noscript>



        <div className='navbar-btnDiv'>
            <button className='navbar-btn'>
                {navbarDisplay ? <NavbarBtn_true /> : <NavbarBtn_false />}
            </button>
        </div>



        <div style={{ height: '100vh', width: '100%' }}>
            <div style={{ display: 'flex' }}>

                <nav className={navbarDisplay} id='q-navbar-div'>
                    <div className="q-navbar">
                        <div className="logo-div">
                            <ImageFix src={ICON_IMG} alt="Certple Icon" style={{ width: "100%", height: "auto" }} />
                            <p>{packageData.version}</p>
                        </div>
                        <div style={{ padding: '0 .5rem' }}>
                            <NavbarItem to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
                                </svg>申请证书
                            </NavbarItem>
                            <NavbarItem to="/manage">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm133-160h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Zm-53 560h426-426Z" />
                                </svg>证书管理
                            </NavbarItem>
                            <NavbarItem to="/docs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                                </svg>文档
                            </NavbarItem>
                            <NavbarItem to="/settings">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                                </svg>设置
                            </NavbarItem>
                            <NavbarItem to="/more">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg>关于
                            </NavbarItem>
                            <NavbarItem to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
                                </svg>首页
                            </NavbarItem>
                            <NavbarItem href="https://github.com/zeoseven/certple">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>GitHub
                            </NavbarItem>
                            <NavbarItem href="https://zeoseven.com/sponsors/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                                    <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                                </svg>赞助
                            </NavbarItem>
                        </div>
                    </div>
                </nav>

                <main style={{ flex: "1", overflow: "auto" }}>
                    <div style={{ padding: ".5rem 1rem", minWidth: "320px", minHeight: "100vh" }}>
                        <div style={{ paddingBottom: "10vh" }}>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </main>

            </div>
        </div>
    </>);
};
