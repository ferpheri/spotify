import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <SideBar />
        {/* center */}
      </main>
      <div>{/* player */}</div>
    </div>
  );
}
