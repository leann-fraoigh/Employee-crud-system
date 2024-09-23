import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';


interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  type: 'phone' | 'date';
  name: string;
}

export const TextMaskInput = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskInput(props, ref) {
    const { onChange, type, ...other } = props;
    const mask = type === 'phone' ? '+7 (000) 000-0000' : '00.00.0000';
    return (
      <IMaskInput
        {...other}
        mask={mask}
        inputRef={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);