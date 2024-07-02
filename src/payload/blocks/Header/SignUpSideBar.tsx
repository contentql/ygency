'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Fragment, useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { signUp } from '@/components/auth/SignUpForm/actions'

export const signUpFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail is invalid' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
})

export type SignUpFormData = z.infer<typeof signUpFormSchema>

const SignUpSideBar = () => {
  const [isPending, startTransition] = useTransition()
  const [backendSignUpResponse, setBackendSignUpResponse] = useState<any>(null)

  const router = useRouter()

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
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

  const [firstName, lastName, email, password] = watch([
    'firstName',
    'lastName',
    'email',
    'password',
  ])

  useEffect(() => {
    if (backendSignUpResponse) {
      setBackendSignUpResponse(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email, password])

  const onSubmit = async (data: SignUpFormData) => {
    startTransition(async () => {
      const randomNum = Math.floor(Math.random() * (24 - 1 + 1)) + 1
      // const imageUrl = `/images/avatar/avatar_${randomNum}.jpg`
      const result = await signUp({
        ...data,
        // imageUrl,
        redirectTo: '/profile',
      })
      setBackendSignUpResponse(result)
      if (result.success) {
        document
          .querySelector('body')!
          .classList.remove('side-content-visible-signup')
        // router.push('/profile')
      }
    })
  }
  return (
    <Fragment>
      <div className='form-back-drop-signup'></div>
      <section className='hidden-bar-signup'>
        <div className='inner-box-signup text-center'>
          <div className='cross-icon-signup'>
            <span className='fa fa-times' />
          </div>
          <div className='title'>
            <h4>Sign Up</h4>
          </div>
          {/*Appointment Form*/}
          <div className='appointment-form-signup'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group-signup'>
                <input
                  {...register('firstName')}
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  required
                />
                {errors?.firstName && <p>{errors.firstName.message}</p>}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('lastName')}
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  required
                />
                {errors?.lastName && <p>{errors.lastName.message}</p>}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('email')}
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  required
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('password')}
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
                {errors?.password && <p>{errors.password.message}</p>}
              </div>
              <div className='form-group-signup'>
                <button type='submit' className='theme-btn'>
                  {isPending ? 'Creating account...' : 'Sign Up'}
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
export default SignUpSideBar
