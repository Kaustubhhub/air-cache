"use client"
import { string, z } from 'zod'
import React from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: string().min(2).max(50)
})

type FormType = "sign-up" | "sign-in";

const AuthForm = ({ type }: { type: FormType }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='auth-form'>
          <h1 className='form-title'>
            {type === 'sign-in' ? "Sign In" : "Sign Up"}
          </h1>
          {type === "sign-up" &&
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className='shad-form-item'>
                    <FormLabel className='shad-form-label'>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          }
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {/* OTP verification */}
    </>
  )
};

export default AuthForm;
