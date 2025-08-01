import ThemeProvider from "./Context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Nest Js Deshboard",
  description: "Nest Js Deshboard app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
