import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">THE HOPE INTERNATIONAL SCHOOL</h1>
      </main>
      <Footer />
    </div>
  );
}
