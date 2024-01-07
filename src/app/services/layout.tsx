export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-fit flex-col pt-24 relative">
            {children}
        </div>
    );
}