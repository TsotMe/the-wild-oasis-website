import Header from "@/app/_components/Header";
import ReservationProvider from "@/app/_context/ReservationContext";

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wild Oasis ",
  },
  description:
    "Luxurious cabins hotel, located in the heart of the Italian Dolmites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 flex">
          <main className="w-full max-w-7xl mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
