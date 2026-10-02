import Head from "next/head";
import Link from "next/link";
import { SmallPage, dTitle } from "@components/main";

export default () => {
    return (<>
        <Head>
            <title>{`${dTitle} - 简单快速的申请免费 TLS/SSL 证书`}</title>
            <meta name="keywords" content="Certple,免费SSL证书,SSL,证书,免费证书,单域名证书,多域名证书,通配符证书,SSL证书申请,TLS证书,https证书,DV证书" />
        </Head>
        <SmallPage>
            <div className="mb-5">
                <p className="fs-12 color-9">原名 ZSEncrypt</p>
                <h1 className="display-5" style={{ fontWeight: "900" }}>Certple</h1>
            </div>
            <div className="mb-3">
                <p className="mb-3">Certple 的目的是提供一个简单快速申请有效 TLS/SSL 证书的开源客户端，快速为您的站点提供 TLS/SSL 加密层(HTTPS)，而不是 ACME 自动化。</p>
                <p>支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> !</p>
            </div>
            <div className="mb-4">
                <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=113646394934724&bvid=BV1KRBuYrEjo&cid=27326941466&p=1"
                    allowfullscreen="false"
                    style={{
                        width: "100%",
                        height: "20rem",
                        border: "1px solid #000"
                    }}
                />
            </div>
            <div className="mb-4">
                <h2 className="fw-light mb-3" id="开始">开始</h2>
                <p>为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 Certple 。</p>
            </div>
            <div className="mb-5">
                <form action="/" method="get">
                    <div>
                        <p>输入您的域名，不要带 http(s):// 或 www 。</p>
                        <input name="domain" className="form-control q-form" placeholder="example.org" required />
                    </div>
                    <div className="mt-2 mb-1">

                        <input type="radio" name="type" id="q-private1" value="1" className="d-none" defaultChecked />
                        <label htmlFor="q-private1" className="label-radio">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers-fill" viewBox="0 0 16 16">
                                <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882z" />
                                <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0z" />
                            </svg><span className="ms-2">通配符(泛域名)证书<span className="fs-12 ms-2">域覆盖更广</span></span>
                        </label>

                        <input type="radio" name="type" id="q-private0" value="0" className="d-none" />
                        <label htmlFor="q-private0" className="label-radio">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers-half" viewBox="0 0 16 16">
                                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                            </svg><span className="ms-2">单域名证书<span className="fs-12 ms-2">申请更快速</span></span>
                        </label>

                    </div>
                    <div>
                        <button type="submit" className="btn q-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg><span className="ms-2">开始！</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">准备好一切</h2>
                <p className="dl">1. 您需要有对 <qd>域名权威 DNS 服务器</qd> 的访问权限 或 <qd>文件控制</qd> 权限。因为 CA 需要验证您对域名的所有权，这是必须的。</p>
                <p className="dl">2. 一个 <qd>电子邮箱</qd> 来接收域名过期邮件。</p>
            </div>
            <div className="mb-5">
                <h4 className="fw-light mb-3">您可能想了解</h4>
                <Link href="/docs/#极速续期">极速续期</Link>
                <span> | </span>
                <Link href="/docs/#域名格式示例">域名输入格式示例</Link>
                <span> | </span>
                <Link href="/manage/">证书管理</Link>
                <span> | </span>
                <a href="https://zeoseven.com/#about" target="_blank">关于 ZeoSeven</a>
            </div>
            <hr className="my-5 mx-0 p-0" />
            <div className="mb-5">
                <h2 className="fw-light mb-3">免费</h2>
                <p>Certple 从不提供商业证书，只提供简单的 Let's Encrypt DV 证书。</p>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">简单而快速</h2>
                <p className="mb-3">只需使用 DNS 方式 或 文件方式 验证域名所有权并提供一个电子邮箱获取域名过期邮件即可。 ACME 账户私钥、证书私钥 等都将自动生成、记忆和处理。</p>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">安全</h2>
                <p>一切数据通过本地的 localStorage 存储，不会上传到 ZeoSeven 的服务器，可通过 <Link href="/settings/">设置</Link> 查阅。</p>
            </div>
        </SmallPage>
    </>)
};