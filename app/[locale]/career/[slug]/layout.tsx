export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-full w-full flex-col items-start justify-start">
        {children}
      </div>
    );
  }
  