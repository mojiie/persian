'use client';

import { cn } from '@/utils';
import { useConsultationForm } from './useConsultationForm';
import { Checkbox, Input, Textarea } from '../form-fields';
import { EmailIcon, PhoneIcon, UserIcon } from '@/assets/icons';

export function ConsultationForm() {
    const { formik, isSubmitting } = useConsultationForm();

    return (
        <div className="container pt-8">
            <div className="flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-black-900 text-lg font-bold text-center lg:text-xl">
                        فرم دریافت مشاوره
                    </h2>
                    <p className="text-black-500 text-sm font-medium text-center leading-6 lg:text-base">
                        برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید ؟ فرم
                        زیر را تکمیل کنید تا مشاوران ما به صورت کاملا رایگان
                        شمارا راهنمایی کنند.
                    </p>
                </div>

                <form
                    onSubmit={formik.handleSubmit}
                    className="w-full bg-white-100 rounded-lg shadow px-4 py-8 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formik.values.name}
                            error={formik.errors.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="نام و نام خانوادگی"
                            label="نام و نام  خانوادگی خود را وارد کنید"
                            icon={
                                <UserIcon className="w-6 h-6 stroke-red-400" />
                            }
                        />

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            error={formik.errors.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            label="آدرس ایمیل خود را وارد کنید"
                            placeholder="email address@mail.comمثلا "
                            icon={
                                <EmailIcon className="w-6 h-6 stroke-red-400" />
                            }
                        />

                        <Input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formik.values.phone}
                            error={formik.errors.phone}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="۰۲۱-۱۲۳۴۵۶۷۸"
                            label="شماره تماس خود را وارد کنید"
                            icon={
                                <PhoneIcon className="w-6 h-6 stroke-red-400" />
                            }
                        />
                    </div>

                    <h3 className="text-black-900 text-sm font-medium text-center lg:font-semibold lg:text-start">
                        نوع سرویس(های) مورد نظر خود را انتخاب کنید.
                    </h3>

                    <div className="grid grid-cols-2 gap-4 lg:grid lg:grid-cols-5">
                        <Checkbox
                            label="طراحی وب سایت"
                            checked={formik.values.webDesign}
                            onChange={(val) =>
                                formik.setFieldValue('webDesign', val)
                            }
                        />

                        <Checkbox
                            label="تولید محتوا"
                            checked={formik.values.contentCreation}
                            onChange={(val) =>
                                formik.setFieldValue('contentCreation', val)
                            }
                        />

                        <Checkbox
                            label="خدمات سئو "
                            checked={formik.values.seo}
                            onChange={(val) => formik.setFieldValue('seo', val)}
                        />

                        <Checkbox
                            label="کمپین‌های بازاریابی"
                            checked={formik.values.marketingCampaigns}
                            onChange={(val) =>
                                formik.setFieldValue('marketingCampaigns', val)
                            }
                        />

                        <div className="col-span-2 lg:col-span-1">
                            <Checkbox
                                label="خدمات اتوماسیون بازاریابی"
                                checked={formik.values.automation}
                                onChange={(val) =>
                                    formik.setFieldValue('automation', val)
                                }
                            />
                        </div>
                    </div>

                    <Textarea
                        id="message"
                        name="message"
                        value={formik.values.message}
                        error={formik.errors.message}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="توضیحات (اختیاری)"
                        label="در مورد درخواست خود برای ما بنویسید."
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            'w-full bg-black-500 text-white-100 rounded-lg text-sm font-bold h-10',
                            'flex items-center justify-center hover:opacity-75 transition-all duration-500',
                            'lg:text-base max-w-96 mx-auto lg:rounded-2xl',
                        )}
                    >
                        {isSubmitting ? 'در حال ارسال...' : 'ثبت درخواست'}
                    </button>
                </form>
            </div>
        </div>
    );
}
