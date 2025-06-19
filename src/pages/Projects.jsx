import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ login }) => {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-8">
            {login && (
                <section className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                        My Projects
                    </h1>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProjectCard
                            image="..." // Base64 image or URL
                            title="DevConnect Dashboard"
                            description="A developer collaboration platform with live chat, task tracking, and project boards."
                            liveLink="https://devconnect.live"
                            codeLink="https://github.com/user/devconnect"
                        />
                        {/* Add more cards if needed */}
                    </div>
                </section>
            )}

            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                    Top Projects
                </h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                        image="..." // Base64 image or URL
                        title="Another Top Project"
                        description="Description of the top project goes here."
                        liveLink="https://project.live"
                        codeLink="https://github.com/user/project"
                    />
                    {/* Add more cards if needed */}
                </div>
            </section>
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                    Recent Projects
                </h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                        image="..." // Base64 image or URL
                        title="Another Top Project"
                        description="Description of the top project goes here."
                        liveLink="https://project.live"
                        codeLink="https://github.com/user/project"
                    />
                    {/* Add more cards if needed */}
                </div>
            </section>
        </div>
    );
};

export default Projects;
