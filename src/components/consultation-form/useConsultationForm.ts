'use client';

import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { FormValuesProps } from './FormValuesProps';

export function useConsultationForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('نام الزامی است'),
        phone: Yup.string().required('شماره تماس الزامی است'),
        email: Yup.string()
            .email('ایمیل نامعتبر است')
            .required('ایمیل الزامی است'),
    });

    const initialValues: FormValuesProps = {
        name: '',
        email: '',
        phone: '',
        message: '',
        webDesign: false,
        contentCreation: false,
        seo: false,
        marketingCampaigns: false,
        automation: false,
    };

    const formik = useFormik<FormValuesProps>({
        initialValues,
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            if (!formik.isValid) return;

            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log('فرم ارسال شد');
            resetForm();
            setIsSubmitting(false);
            setSubmitting(false);
        },
    });

    return { formik, isSubmitting };
}
