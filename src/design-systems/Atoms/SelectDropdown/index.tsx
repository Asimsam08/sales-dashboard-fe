
import React, { useState, useMemo, useEffect } from 'react';
import { CustomSelectProps } from './interface';
import { ArrowIcon } from '../Icons';


const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  defaultValue,
  placeholder = 'new',
}) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(undefined);

  const handleSelect = (value: string | number) => {
    const newSelectedValue = options.find(option=> option.value == value)
    setSelectedValue(newSelectedValue?.label);
    onSelect(value);
    setIsOpen(false); 
  };




  return (
    <div className="relative w-[100px] h-[36px]">
      <div className="border rounded border-solid border-[#DCDFE4] flex justify-center gap-2 items-center p-2 border border-solid bg-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-[#666] text-sm">
          {/* {selectedValue ? options.find(option => option.value === selectedValue)?.label : defaultValue} */}
          {selectedValue? selectedValue: defaultValue}

        </span>
        <span className="custom-select-arrow">{isOpen ? <ArrowIcon className='rotate-180' /> : <ArrowIcon className='rotate-0' />}</span>
      </div>

      {isOpen && (
        <ul className="shadow-lg absolute top-100 left-0 w-full m-0 p-0 bg-white border border-solid border-[#DCDFE4] z-10">
          {options.map(option => (
            <li
              key={option.value}
              className="p-2 flex justify-center text-sm text-[#667085] hover:text-white text-medium custor-pointer hover:bg-greenTheme active:bg-[#d0d0d0]"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

