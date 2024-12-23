import MainLayout from "./Components/MainLayout";
import './../../public/css/tailwind-ecommerce.css';

export const metadata = {
  title: "MayBell - Online furniture store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
