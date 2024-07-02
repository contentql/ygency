'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Fragment, useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { loginFormSchema } from '@/components/auth/SignInForm'
import { signInWithCredentials } from '@/components/auth/SignInForm/actions'

const SignInSideBar = () => {
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
    console.log('data', data)
    startTransition(() => {
      signInWithCredentials({ ...data, redirectTo: '/' }).then(result => {
        if (!result) return
        if (result.success === true) {
          document
            .querySelector('body')!
            .classList.remove('side-content-visible')
          // router.push('/')
        }
        if ('error' in result) {
          setBackendLoginResponse(result)
        }
      })
    })
  }

  return (
    <Fragment>
      <div className='form-back-drop'></div>
      <section className='hidden-bar'>
        <div className='inner-box text-center'>
          <div className='cross-icon'>
            <span className='fa fa-times' />
          </div>
          <div className='title'>
            <h4>Sign In</h4>
          </div>
          {/*Appointment Form*/}
          <div className='appointment-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group'>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  required
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>
              <div className='form-group'>
                <input
                  {...register('password')}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='password'
                  required
                />
                {errors?.password && <p>{errors.password.message}</p>}
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  className='theme-btn'
                  disabled={isPending}>
                  {isPending ? 'Signing in...' : 'Sign In'}
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          {/* <div className='social-style-one'>
            <a href='#'>
              <i className='fab fa-twitter' />
            </a>
            <a href='#'>
              <i className='fab fa-facebook-f' />
            </a>
            <a href='#'>
              <i className='fab fa-instagram' />
            </a>
            <a href='#'>
              <i className='fab fa-pinterest-p' />
            </a>
          </div> */}
        </div>
      </section>
    </Fragment>
  )
}
export default SignInSideBar
