import "./globals.css";

export const metadata = {
  title: "Ko Kawaguchi Poetry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
