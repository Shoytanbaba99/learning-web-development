import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="bg-[#0d0d0d] text-[#B9989F] antialiased min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
