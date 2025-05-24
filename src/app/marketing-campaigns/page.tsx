import type { Metadata } from 'next';
import { ConsultationForm, FAQ, Hero, ObstaclesSlider } from '@/components';

export const metadata: Metadata = {
    title: 'کمپین‌های بازاریابی و تبلیغاتی',
};

export default function Ds() {
    return (
        <div className="flex flex-col gap-8">
            <Hero />

            <ObstaclesSlider />

            <ConsultationForm />

            <FAQ />
        </div>
    );
}
