
import Navbar from "../components/Navbar.tsx";
import Introduction from "../components/Introduction.tsx";
import ProjectCarousel from "../components/ProjectCarousel.tsx";

function Home() {

  return (
    <>
        <Navbar />
        <main className="flex flex-col items-center justify-center bg-neutral-700 text-white min-h-screen">
            <Introduction />
            <ProjectCarousel
                projects={[
                    { id: "1", title: "Project One", description: "...", image: "/img1.jpg", link: "https://..." },
                    { id: "2", title: "Project Two", description: "...", image: "/img2.jpg" },
                    { id: "3", title: "Project One", description: "...", image: "/img1.jpg", link: "https://..." },
                    { id: "4", title: "Project Two", description: "...", image: "/img2.jpg" },
                    { id: "5", title: "Project Two", description: "...", image: "/img2.jpg" },
                ]}
            />
        </main>
    </>
  )
}

export default Home
