import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    reset()
  }

  return (
    <div className="min-h-[70vh] bg-[#f8f3e8] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl">

        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">Get in Touch</p>
          <h1 className="mt-2 font-display text-4xl text-[#7A1F2B] sm:text-5xl">Contact Us</h1>
        </div>

        <div className="rounded-2xl border border-[#e7dac4] bg-white p-8 shadow-sm sm:p-10">
          {submitted ? (
            <div className="py-10 text-center">
              <h3 className="font-display text-2xl text-[#7A1F2B]">Message Sent!</h3>
              <p className="mt-2 text-sm text-[#3D3D3D]/70">
                Thanks for reaching out. We will get back to you as soon as we can.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-[#7A1F2B] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3D3D3D]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    className="mt-1.5 w-full rounded-lg border border-[#e7dac4] bg-[#faf7f2] px-3 py-2.5 text-sm text-[#3D3D3D] placeholder:text-[#3D3D3D]/40 focus:border-[#7A1F2B] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/15"
                    placeholder="Jane Smith"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3D3D3D]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    className="mt-1.5 w-full rounded-lg border border-[#e7dac4] bg-[#faf7f2] px-3 py-2.5 text-sm text-[#3D3D3D] placeholder:text-[#3D3D3D]/40 focus:border-[#7A1F2B] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/15"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#3D3D3D]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="mt-1.5 w-full rounded-lg border border-[#e7dac4] bg-[#faf7f2] px-3 py-2.5 text-sm text-[#3D3D3D] placeholder:text-[#3D3D3D]/40 focus:border-[#7A1F2B] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/15"
                  placeholder="League registration, rental inquiry, etc."
                />
                {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3D3D3D]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="mt-1.5 w-full rounded-lg border border-[#e7dac4] bg-[#faf7f2] px-3 py-2.5 text-sm text-[#3D3D3D] placeholder:text-[#3D3D3D]/40 focus:border-[#7A1F2B] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/15"
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#7A1F2B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5A1620] disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 text-sm text-[#3D3D3D]/70 sm:flex-row sm:justify-center sm:gap-8">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#C8A24A]" />
            <a href="tel:+12044610009" className="hover:text-[#7A1F2B]">(204) 461-0009</a>
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#C8A24A]" />
            41 E PR 323, Argyle, MB R0C 0B0
          </span>
        </div>

      </div>
    </div>
  )
}
