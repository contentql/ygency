'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type ComponentProps, useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { signInWithCredentials } from './actions'

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail is invalid' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
})

const Separator = ({ children }: ComponentProps<'div'>) => (
  <div className='relative isolate my-3 flex items-center justify-center'>
    <p className='bg-white p-2 text-sm font-medium uppercase text-zinc-500 dark:bg-zinc-900'>
      {children}
    </p>
    <hr className='absolute z-[-1] w-full border-0 bg-zinc-200 p-px dark:bg-zinc-600' />
  </div>
)

const SignInForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [backendLoginResponse, setBackendLoginResponse] = useState<Awaited<
    ReturnType<typeof signInWithCredentials>
  > | null>(null)

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form

  const [email, password] = watch(['email', 'password'])

  useEffect(() => {
    if (backendLoginResponse && backendLoginResponse.success === false) {
      setBackendLoginResponse(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password])

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    startTransition(() => {
      signInWithCredentials({ ...data, redirectTo: '/' }).then(result => {
        if (!result) return
        if (result.success === true) {
          router.push('/')
        }
        if ('error' in result) {
          setBackendLoginResponse(result)
        }
      })
    })
  }

  return (
    <div className='flex min-h-screen'>
      <div className='hidden flex-1 items-center justify-center bg-transparent text-black lg:flex'>
        <Image
          src='/images/login-page-illustration.svg'
          width={50}
          height={50}
          className='md:h-96 md:w-96'
          alt='image'
        />
      </div>
      <div className='flex w-full items-center justify-center bg-[#26304e] lg:w-1/2'>
        <div className='w-full max-w-md p-6'>
          {backendLoginResponse && 'error' in backendLoginResponse ? (
            <p color='red'>
              {backendLoginResponse?.error?.code === 'credentials' &&
                'Sign in failed. Check the details you provided are correct.'}
            </p>
          ) : null}
          {backendLoginResponse && backendLoginResponse?.success === true ? (
            <p color='green'>Successfully logged in! Redirecting...</p>
          ) : null}
          <h1 className='mb-6 text-center text-3xl font-semibold text-white'>
            Sign In
          </h1>
          <h1 className='mb-6 text-center text-sm font-semibold text-gray-300'>
            Join to Our Community with all time access and free{' '}
          </h1>
          {/* <div className='mt-4 flex flex-col items-center justify-center lg:flex-row'>
            <div className='mb-2 w-full lg:mb-0 lg:w-1/2'>
              <button
                type='button'
                className='flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-gray-400 p-2 text-sm text-gray-200 transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='w-4'
                  id='google'>
                  <path
                    fill='#fbbb00'
                    d='M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z'></path>
                  <path
                    fill='#518ef8'
                    d='M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z'></path>
                  <path
                    fill='#28b446'
                    d='m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z'></path>
                  <path
                    fill='#f14336'
                    d='m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z'></path>
                </svg>{' '}
                Sign Ip with Google{' '}
              </button>
            </div>
            <div className='ml-0 w-full lg:ml-2 lg:w-1/2'>
              <form className='flex gap-4' action={signInWithGithub}>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center gap-2 rounded-md  border-gray-200 bg-gray-600 p-2 text-sm text-gray-300 transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    id='github'
                    className='w-4'>
                    <path
                      fill='#fff'
                      d='M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z'></path>
                  </svg>{' '}
                  Sign In with Github{' '}
                </button>
              </form>
            </div>
          </div>
          <div className='mt-4 text-center text-sm text-gray-300'>
            <p>or with email</p>
          </div> */}
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300'>
                E-Mail
              </label>
              <input
                {...register('email')}
                type='text'
                id='email'
                name='email'
                placeholder='john.doe@example.com'
                className='mt-1 w-full rounded-md bg-gray-600 p-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1'
              />
              {errors?.email && (
                <p className='p-2 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-300'>
                Password
              </label>
              <input
                {...register('password')}
                type='password'
                id='password'
                name='password'
                placeholder='● ● ● ● ● ● ● ● ●'
                className='mt-1 w-full rounded-md bg-gray-600 p-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1'
              />
              {errors?.password && (
                <p className='p-2 text-sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <p className='text-sm text-gray-700 dark:text-gray-300'>
              Forgot your password?{' '}
              <Link className='underline' href='/reset-password'>
                Reset it.
              </Link>
            </p>
            <div>
              <button
                type='submit'
                className='w-full rounded-md border-[1px] border-indigo-600 bg-indigo-600 p-2 text-white transition-all duration-500 hover:bg-indigo-700  focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-opacity-50'
                disabled={isPending}>
                {isPending ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>
          <div className='mt-4 text-center text-sm text-gray-300'>
            <p>
              Don&apos;t have an account?{' '}
              <Link href='/sign-up' className='text-white hover:underline'>
                SignUp here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
