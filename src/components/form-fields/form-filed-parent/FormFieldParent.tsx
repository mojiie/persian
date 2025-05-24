import { cn } from '@/utils';
import { FormFieldParentProps } from './FormFieldParentProps';

export const FormFieldParent = (props: FormFieldParentProps) => {
    const { error, label, children } = props;

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-xs font-medium text-black-500 lg:text-sm lg:font-semibold mb-2">
                    {label}
                </label>
            )}

            <div
                className={cn(
                    'min-h-10 bg-white-200 rounded-lg border border-grey-100 flex items-center ',
                    'justify-between gap-2 p-2 overflow-hidden lg:rounded-2xl',
                )}
            >
                {children}
            </div>

            {error && (
                <p className="text-xs font-medium text-red-400 lg:font-semibold lg:text-sm">
                    {error}
                </p>
            )}
        </div>
    );
};
