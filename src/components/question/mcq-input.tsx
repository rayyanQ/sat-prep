type OptionsType = {
  "A": string,
  "B": string,
  "C": string,
  "D": string
}

const MCQInput = ({options, selected, handleUpdate}: {options: OptionsType, selected: string, handleUpdate: (newVal: string) => void}) => {

  return (
    <ol className="w-full space-y-3">
      <MCQOption title="A" value={options['A']} selected={selected==="A"} handleClick={handleUpdate} />
      <MCQOption title="B" value={options['B']} selected={selected==="B"} handleClick={handleUpdate} />
      <MCQOption title="C" value={options['C']} selected={selected==="C"} handleClick={handleUpdate} />
      <MCQOption title="D" value={options['D']} selected={selected==="D"} handleClick={handleUpdate} />
    </ol>
  );
}

const MCQOption = (
  {title, value, selected=false, handleClick}:
  {
    title: string,
    value: string,
    selected?: boolean,
    handleClick:(newState: string) => void
  }
) => {
  return (
    <li className={`w-full h-12 px-4 flex flex-row justify-start items-center rounded
      hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-primary cursor-pointer
      ${selected ? `border border-primary bg-primary/10` : `border border-neutral-950`}`}
      onClick={() => handleClick(title)}
    >
      <span className={`flex justify-center items-center border-2 ${selected ? `border-primary text-primary` : `border-neutral-950`} rounded-full size-6 mr-6 font-medium`}>
        {title}
      </span>
      {value}
    </li>
  );
}

export { MCQInput };