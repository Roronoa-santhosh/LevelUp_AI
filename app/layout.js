import "./globals.css";

export const metadata = {
  title: "Levelup",
  description: "AI-powered syllabus analyzer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}