export const metadata = {
  title: "The Sophia Foundation",
  description: "DIPG awareness, family support, and impact tracking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Inter, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#FFF8F0",
          color: "#1F2937",
        }}
      >
        {children}
      </body>
    </html>
  );
}
