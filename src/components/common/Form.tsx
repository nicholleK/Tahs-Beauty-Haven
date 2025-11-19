'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';
import { FormSubmission } from 'app/api/FormSubmission';

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  containerClass,
}: FormProps) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes && checkboxes.length).fill(false));

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleSendMssg = (e: React.FormEvent) => {
    e.preventDefault();

    // Check required fields
    const requiredFields = ['name', 'lastName', 'email'];
    const missing = requiredFields.filter((field) => !inputValues[field]?.trim());
    if (missing.length > 0) {
      toast.error('Please fill in all the fields.');
      return;
    }

    // Build message
    const finalMessage = `
      Hello! I would like to get in touch regarding: ${radioBtnValue || 'Not specified'}.

      Name: ${inputValues['name']} ${inputValues['lastName']}
      Email: ${inputValues['email']}

      Message:
      ${textareaValues || 'No additional message provided.'}
        `.trim();

    toast.success('Opening WhatsApp');
    window.open(`https://wa.me/27787791860?text=${encodeURIComponent(finalMessage)}`, '_blank');
  };

  return (
    <form id="contactForm" className={twMerge('', containerClass)}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {inputs &&
            inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[name] || ''}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
        </div>
        {/* Radio buttons */}
        {radioBtns && (
          <div className="mx-0 mb-1 sm:mb-3">
            <span className="pb-1 text-xs uppercase tracking-wider">{radioBtns?.label}</span>
            <div className="flex flex-wrap">
              {radioBtns.radios.map(({ label }, index) => (
                <div key={`radio-btn-${index}`} className="mr-4 items-baseline">
                  <input
                    id={label}
                    type="radio"
                    name="reason"
                    value={label}
                    checked={radioBtnValue === label}
                    onChange={changeRadioBtnsHandler}
                    className="cursor-pointer"
                  />
                  <label htmlFor={label} className="ml-2">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Textarea */}
        {textarea && (
          <div className={`mx-0 mb-1 sm:mb-4`}>
            <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              {textarea.label}
            </label>
            <textarea
              id={textarea.name}
              name={textarea.name}
              cols={textarea.cols}
              rows={textarea.rows}
              value={textareaValues}
              onChange={(e) => changeTextareaHandler(e)}
              placeholder={textarea.placeholder}
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            />
          </div>
        )}
        {/* Checkboxes */}
        {checkboxes && (
          <div className="mx-0 mb-1 sm:mb-4">
            {checkboxes.map(({ label }, index) => (
              <div key={`checkbox-${index}`} className="mx-0 my-1 flex items-baseline">
                <input
                  id={label}
                  type="checkbox"
                  name={label}
                  checked={checkedState[index]}
                  onChange={() => changeCheckboxHandler(index)}
                  className="cursor-pointer"
                />
                <label htmlFor={label} className="ml-2">
                  {label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      {btn && (
        <div
          className={`${btnPosition === 'left' ? ' text-white text-left' : btnPosition === 'right' ? ' text-white text-right' : ' text-white text-center'}`}
        >
          <button
            type={'submit'}
            onClick={handleSendMssg}
            // className={twMerge('btn text-white  dark:text-white', 'btn-purple-600', 'sm:mb-0')}
            className="btn bg-[#3B0270]/30 backdrop-blur-md text-black hover:text-white hover:bg-[#58077b] hover:backdrop-blur-md dark:bg-purple-500 dark:text-black sm:mb-0"
          >
            {btn.title}
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
