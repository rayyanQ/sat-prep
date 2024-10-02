type OptionsType = {
  "A": string,
  "B": string,
  "C": string,
  "D": string
}

const MCQInput = ({options}: {options: OptionsType}) => {
  return (
    <ol className="w-full space-y-3">
      <MCQOption title="A" value={options['A']} />
      <MCQOption title="B" value={options['B']} />
      <MCQOption title="C" value={options['C']} />
      <MCQOption title="D" value={options['D']} />
    </ol>
  );
}

const MCQOption = ({title, value}: {title: string, value: string}) => {
  return (
    <li className="w-full h-12 px-4 flex flex-row justify-start items-center rounded border border-neutral-950 hover:border-primary cursor-pointer">
      <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
        {title}
      </span>
      {value}
    </li>
  );
}

export { MCQInput };