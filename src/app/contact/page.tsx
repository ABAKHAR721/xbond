'use client'
import { ContactInline } from '@/components/contact-inline'
import { useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage(){
  return (
    <ContactInline />
  )
}
