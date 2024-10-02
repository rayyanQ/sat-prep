import { Input } from '@/components/ui/input';

const SPRInput = () => {
  return (
    <div className="flex flex-row justify-start items-center space-x-2">
      <Input type="text" placeholder="Correct answer" className="rounded border border-neutral-950" />
      <p>+/-</p>
      <Input type="text" placeholder="Allowed error" className="rounded border border-neutral-950" />
    </div>
  );
}

export { SPRInput };