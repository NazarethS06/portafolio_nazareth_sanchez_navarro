


function Contact() {
    return (
        <div className="bg-surface-container py-32 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-headline text-4xl font-extrabold text-primary mb-6">Get in Touch</h2>
                <p className="text-on-surface-variant mb-10">I’m currently open to new opportunities and collaborations. Feel free to reach out for project inquiries, freelance work, or just to say hello!</p>
                <a className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:opacity-90" href="mailto:example@email.com">
                    <span className="material-symbols-outlined" data-icon="email">email</span>
                    Email Me
                </a>
            </div>
        </div>
    );
}

export default Contact;