'use client';

import { cn } from '@/utils';
import { CheckIcon } from '@/assets/icons';
import { CheckboxProps } from './CheckboxProps';
import { FormFieldParent } from '../form-filed-parent';

export const Checkbox = (props: CheckboxProps) => {
    const { label, checked, onChange } = props;
    console.log(checked, label);

    return (
        <FormFieldParent>
            <label
                onClick={() => onChange(!checked)}
                className="w-full flex items-center justify-start gap-2 cursor-pointer"
            >
                <span
                    className={cn(
                        'w-6 h-6 rounded flex items-center justify-center',
                        'transition-all duration-300 border-[0.5px] border-gray-200 bg-grey-100',
                    )}
                >
                    <CheckIcon
                        className={cn(
                            'transition-all duration-300 w-6 h-6 mt-[3px] ml-[3px]',
                            checked ? 'stroke-purple-500' : 'stroke-white-100 ',
                        )}
                    />
                </span>

                <span className="flex-[2] text-sm font-semibold text-black-500 lg:font-bold text-start">
                    {label}
                </span>
            </label>
        </FormFieldParent>
    );
};
