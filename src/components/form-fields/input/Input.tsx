'use client';

import { cn } from '@/utils';
import { InputProps } from './InputProps';
import { FormFieldParent } from '../form-filed-parent';

export const Input = (props: InputProps) => {
    const { label, error, icon, ...rest } = props;

    return (
        <FormFieldParent label={label} error={error}>
            {icon && icon}

            <input
                className={cn(
                    'flex-[2] border-none outline-none text-xs text-grey-900 font-medium lg:text-sm text-right bg-transparent',
                    'placeholder:text-[0.625rem] placeholder:text-grey-700 placeholder:font-semibold lg:placeholder:text-sm',
                )}
                {...rest}
            />
        </FormFieldParent>
    );
};
