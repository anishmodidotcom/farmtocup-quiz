import "./globals.css";

export const metadata = {
  title: "Farm to Cup | Coffee Quiz",
  description: "Find your next coffee drink with Farm to Cup."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
