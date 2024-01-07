export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-[80%] mx-auto h-fit flex-col pt-24 relative">
            {children}
        </div>
    );
}