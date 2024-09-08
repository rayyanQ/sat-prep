'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { H4 } from '@/components/ui/heading';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { useState, useEffect } from 'react';

type OptionsType = {
  type: string,
  options: {
    'correct': string,
    'error': string
  } | {
    'A': string,
    'B': string,
    'C': string,
    'D': string,
    'correct': string
  },
}


const CreateOptionsForm = (
  {
    submitted,
    handleSubmit,
  }:
  {
    submitted: boolean,
    handleSubmit: (answer: OptionsType) => void
  }
) => {

  const answerOptions = {
    'A': '',
    'B': '',
    'C': '',
    'D': '',
    'correct': ''
  }
  const answerRange = {
    'correct': '',
    'error': ''
  }
  // Add type to options
  const [options, setOptions] = useState(answerOptions);

  const handleOptionChange = (option: 'A'|'B'|'C'|'D'|'correct', value: string) => {
    answerOptions['A'] = options['A'];
    answerOptions['B'] = options['B'];
    answerOptions['C'] = options['C'];
    answerOptions['D'] = options['D'];
    answerOptions['correct'] = options['correct'];
    answerOptions[option] = value;
    setOptions(answerOptions);
  }

  const [type, setType] = useState<string>('mcq');
  useEffect(() => {
    if (submitted) {
      handleSubmit(
        {
          type,
          options: type==='mcq' ? options : answerRange,
        }
      );
    }
  }, [submitted])

  return (
    <Tabs defaultValue="mcq" className="w-full" onValueChange={(t) => setType(t)}>

      <div className="flex flex-row justify-between items-center space-x-2">
        <H4>Answer</H4>
        <TabsList className="mb-1">
          <TabsTrigger value="mcq">MCQ</TabsTrigger>
          <TabsTrigger value="spr">Custom Response</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="mcq">
        <RadioGroup defaultValue="A" onValueChange={(e) => handleOptionChange('correct', e)}>
          <ol className="w-full space-y-3">
            <li className="w-full h-12 flex flex-row justify-start items-center">
              <div>
                <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                  A
                </span>
              </div>
              <Input name="A" type="text" placeholder="Option A" className="w-full rounded border border-neutral-950"
                onChange={(e) => handleOptionChange('A', e.target.value)}
              />
              <span className="mx-2">
                <RadioGroupItem value="A" id="option-a" />
              </span>
            </li>
            <li className="w-full h-12 flex flex-row justify-start items-center">
              <div>
                <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                  B
                </span>
              </div>
              <Input name="B" type="text" placeholder="Option B" className="w-full rounded border border-neutral-950"
                onChange={(e) => handleOptionChange('B', e.target.value)}
              />
              <span className="mx-2">
                <RadioGroupItem value="B" id="option-b" />
              </span>
            </li>
            <li className="w-full h-12 flex flex-row justify-start items-center">
              <div>
                <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                  C
                </span>
              </div>
              <Input name="C" type="text" placeholder="Option C" className="w-full rounded border border-neutral-950"
                onChange={(e) => handleOptionChange('C', e.target.value)}
              />
              <span className="mx-2">
                <RadioGroupItem value="C" id="option-c" />
              </span>
            </li>
            <li className="w-full h-12 flex flex-row justify-start items-center">
              <div>
                <span className="flex justify-center items-center border-2 border-neutral-950 rounded-full size-6 mr-6 font-medium">
                  D
                </span>
              </div>
              <Input name="D" type="text" placeholder="Option D" className="w-full rounded border border-neutral-950"
                onChange={(e) => handleOptionChange('D', e.target.value)}
              />
              <span className="mx-2">
                <RadioGroupItem value="D" id="option-d" />
              </span>
            </li>
          </ol>
        </RadioGroup>
      </TabsContent>
      <TabsContent value="spr">
        <div className="flex flex-row justify-start items-center space-x-2">
          <Input type="text" placeholder="Correct answer" className="rounded border border-neutral-950" />
          <p>+/-</p>
          <Input type="text" placeholder="Allowed error" className="rounded border border-neutral-950" />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default CreateOptionsForm;