'use client'

import MainLayout from "./Components/MainLayout";
import './../../public/css/tailwind-ecommerce.css';
import { Provider } from "react-redux";
import { store } from "./Store/StoreConfig";

// export const metadata = {
//   title: "MayBell - Online furniture store",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <MainLayout>
          {children}
          </MainLayout>
        </Provider>
        
      </body>
    </html>
  );
}
