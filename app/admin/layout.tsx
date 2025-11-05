import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="border-b border-sky-500">Admin layout</header>
      {children}
    </main>
  );
}
