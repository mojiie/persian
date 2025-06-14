'use client';

import { useState } from 'react';
import { FAQItemProps } from './FAQItemProps';

export const useFAQ = () => {
    const faqs: FAQItemProps[] = [
        {
            question: 'مراحل طراحی وب سایت چیست؟',
            answer: 'مراحل طراحی وب سایت شامل نیازسنجی و تحلیل مخاطب، طراحی وایرفریم، طراحی گرافیکی رابط کاربری (UI)، پیاده‌سازی کدنویسی (Front-end و Back-end)، تست و بررسی عملکرد، و در نهایت انتشار و پشتیبانی سایت است.',
        },
        {
            question: 'چرا طراحی وب سایت مهم است؟',
            answer: 'طراحی وب‌سایت نقش مهمی در ایجاد اولین برداشت کاربران، افزایش اعتبار برند، بهبود تجربه کاربری (UX) و در نهایت افزایش نرخ تبدیل دارد. طراحی خوب می‌تواند باعث افزایش ماندگاری کاربران در سایت شود.',
        },
        {
            question: 'چگونه یک وب سایت را بهینه کنیم؟',
            answer: 'برای بهینه‌سازی وب‌سایت، باید به سرعت بارگذاری صفحات، سئوی فنی (SEO)، بهینه‌سازی تصاویر، طراحی واکنش‌گرا (Responsive)، تجربه کاربری (UX) و دسترسی‌پذیری توجه کرد. همچنین استفاده از ابزارهایی مانند Google PageSpeed و Core Web Vitals بسیار مؤثر است.',
        },
        {
            question: 'راهکارهای جذب ترافیک وب سایت چیست؟',
            answer: 'برخی از راهکارهای جذب ترافیک شامل: تولید محتوای ارزشمند و سئو شده، استفاده از شبکه‌های اجتماعی، تبلیغات گوگل (Google Ads)، بازاریابی ایمیلی، همکاری با اینفلوئنسرها و ایجاد لینک‌سازی هدفمند است.',
        },
        {
            question: 'چطور ارزیابی امنیت وب سایت انجام دهیم؟',
            answer: 'برای ارزیابی امنیت وب‌سایت باید از ابزارهای تست نفوذ، بررسی آسیب‌پذیری‌ها (مانند SQL Injection و XSS)، استفاده از HTTPS، بروزرسانی مداوم نرم‌افزارها و CMS، و محدود کردن دسترسی‌ها استفاده کرد. همچنین می‌توان از فایروال‌های تحت وب و راهکارهای امنیتی مانند WAF بهره برد.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return { faqs, openIndex, toggleAccordion };
};
