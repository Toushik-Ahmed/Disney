'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push(`/search/${values.input}`);
    form.reset();
  }

  // Manually trigger search when the icon is clicked
  function handleIconClick() {
    const values = form.getValues();
    if (values.input.trim().length >= 2) {
      router.push(`/search/${values.input}`);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input placeholder="search..." {...field} />
                  <Search
                    className="absolute right-3 top-3 h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={handleIconClick}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchInput;
