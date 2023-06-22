// "use client"
import "@/styles/globals.css";

export const metadata = {
    title: "Todo App",
    description: "Simple Todo App built with NextJS 13",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}