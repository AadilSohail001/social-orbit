import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Services />
            <WhyChoose />
        </MainLayout>
    );
}