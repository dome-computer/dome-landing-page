"use client"
import React, { use } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { authClient, novaaDesktopAuthClient } from "@/lib/client";
import { GrGoogle } from "react-icons/gr";
import { handle_get_bURL, handle_set_cookie } from "@/shared/server-functions";

const formSchema = z.object({
  fullname: z.string().min(2, {
    error: "Please provide your fullname",
  }),
  username: z.string().min(2, {
    error: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    error: "Password must be at least 2 characters.",
  }),
  retype_password: z.string().min(2, {
    error: "Passwords does not match",
  }),
  email: z.email({
    error: "Email address is invalid"
  })
})
.refine((data) => data.password === data.retype_password, {
    message: "Passwords don't match",
    path: ["retype_password"], // error will show on confirmPassword field
});


const SignUpComponent = React.memo(({searchParams,}: {searchParams: Promise<{ rs?: string; scope?: string }>}) => {
    // 1. Define your form.
    const search_params = use(searchParams)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            fullname: "",
            password: "",
            email: ""
        },
    })
    const [requesting, set_requesting] = React.useState<boolean>(false)

    // 2. Define a submit handler.
    const onSubmit = React.useCallback(async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values, search_params.rs)
        const { data, error } = await novaaDesktopAuthClient.signUp.email({
                email: values.email, // user email address
                password: values.password, // user password -> min 8 characters by default
                name: values.fullname, // user display name
                callbackURL: !search_params.rs ? "/dashboard" : undefined // A URL to redirect to after the user verifies their email (optional)
        }, {
            onRequest: (ctx) => {
                //show loading
                console.log("requesting", ctx)
                set_requesting(true)
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
                console.log("request success", ctx)
                set_requesting(false)
            },
            onError: (ctx) => {
                // display the error message
                set_requesting(false)
                alert(ctx.error.message);
            },
        });

        console.log("request signup done, data", data)
    }, [])

    const handle_signup_with_google = React.useCallback(async () => {
        const bURL = await handle_get_bURL()
        console.log("bURLbURLbURL", bURL)
        if (search_params.rs && search_params.rs == 'novaa.desktop' && search_params.scope) {
            await handle_set_cookie("nva-lgn-scp", search_params.scope as string)
            const request_signin = await novaaDesktopAuthClient.signIn.social({
                provider: "google", // or any other provider id
            })
        }else{
            const request_signin = await authClient.signIn.social({
                provider: "google", // or any other provider id
            })
        }        
    }, []);
    
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="shadow shadow-lg rounded-[16px] p-4 w-[90%] md:w-[80%] lg:w-[40%] lg:max-w-[700px] max-h-[80vh] space-y-6 flex flex-col">
                <div className="text-3xl font-bold text-neutral-800 text-center px-2 dark:text-neutral-200">Sign Up</div>
                <div className="flex flex-col">
                    <Button onClick={handle_signup_with_google} className="space-x-2 cursor-pointer">
                        <GrGoogle className="w-[18px] h-[18px]" />
                        <span>SignUp with Google</span>
                    </Button>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex hidden flex-col h-full overflow-y-hidden">
                        <div className="overflow-y-auto flex-1 h-[calc(100%-40px)] px-2">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                        <FormDescription className="">
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your username" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="retype_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Retype Your Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Retype Your Password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <Button disabled={requesting} type="submit" className="cursor-pointer">
                                {
                                    requesting ? "Submitting..." : "Submit"
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
  )
})

export default SignUpComponent