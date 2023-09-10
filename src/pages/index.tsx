import Nav from "@/components/UI/Nav";
import { BaseButton } from "@/components/UI/Buttons";

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen bg-home-hero bg-cover bg-center">
        <Nav />
        <div className="mx-auto flex h-5/6 max-w-6xl items-center justify-center gap-16">
          <div className="text-white">
            <h1 className="font-display text-9xl">Unitellas Edge Cloud</h1>
            <p className="text-lg">
              Fully-managed edge cloud services.
              <br />
              Compute, networking, storage and more.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <BaseButton text="Start a Live Demo Today" />
            <BaseButton text="Get a quote" />
          </div>
        </div>
      </main>
    </>
  );
}
