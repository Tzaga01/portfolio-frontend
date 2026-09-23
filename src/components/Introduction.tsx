

export default function Introduction() {
    return(
        <section id="home" className="flex items-center gap-6 text-center">
            <img src="src/assets/happy.png" alt="My profilepicture" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg" />
            <div>
                <h1 className="text-4xl font-bold mb-2">Hello, my name is Imran</h1>
                <p className="text-lg max-w-md text-neutral-200">I am a Software Engineer</p>
            </div>
        </section>
    )
}

