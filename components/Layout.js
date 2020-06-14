import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({
  user,
  loading = false,
  children,
  headerClassName,
  footerClassName
}) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <Header user={user} loading={loading} className={headerClassName} />

      <main>
        <div className="bg-white overflow-hidden w-full">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 mx-auto">
            {children}
          </div>
        </div>
      </main>

      <Footer className={footerClassName} />
    </>
  );
}

export default Layout;
