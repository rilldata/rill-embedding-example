import "./globals.css";
import Link from "next/link";
import Logo from "./components/Logo";


const NAV_ITEMS = [
  {
    header: "Views",
    items: [
      { id: "views/simple-iframe", label: "Embed Explore dashboard" }
    ],
  },
  {
    header: "Navigation",
    items: [
      { id: "navigation/navigation-enabled", label: "Embed with navigation" },
      { id: "navigation/pivot-disabled", label: "No pivot embed dashboard" },
    ],
  },
  {
    header: "Row Access Policies",
    items: [
      { id: "accesspolicy/pages/rowaccess", label: "Row access policy enabled dashboard" },
      { id: "accesspolicy/customattributes", label: "Passing custom attributes to metrics view" },
    ]
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Embedding Examples</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="flex flex-col h-screen">
        <header className="bg-gray-100 text-gray-600 p-4 flex items-center space-x-4 border-b border-gray-300 ">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <h1 className="text-xl font-bold">Embedding Examples</h1>
        </header>
        <div className="flex flex-1">
          <nav className="w-64 bg-gray-100 border-r border-gray-300 p-4">
            {NAV_ITEMS.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                <h2 className="text-gray-600 font-semibold mb-2">{group.header}</h2>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.id}`}
                      className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-200 text-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <main className="flex-1 p-6 overflow-y-auto bg-white text-gray-800">{children}</main>
        </div>
      </body>
    </html>
  );
}