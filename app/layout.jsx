import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: 'Shreyansh Kumar | Portfolio',
  description: 'Shreyansh Kumar portfolio',
}

const RootLayout = ({ children }) => {
  

  return (
    <html lang='en'>
      <head>
        {/* Any other head elements */}
      </head>
      <body>
        <div className=''>
          <div className='' />
        </div>
        <main className=''>
          <Nav/>
          {children}
          {/* <Footer/> */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
