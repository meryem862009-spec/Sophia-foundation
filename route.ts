
import { NextRequest } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest){
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const key = process.env.STRIPE_SECRET_KEY
  if(!secret || !key){
    return new Response('Webhook not configured', { status: 200 })
  }
  const body = await req.text()
  const sig = req.headers.get('stripe-signature') || ''

  const stripe = new Stripe(key, { apiVersion: '2024-06-20' })
  let event: Stripe.Event
  try{
    event = stripe.webhooks.constructEvent(body, sig, secret)
  }catch(err: any){
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Handle events here (e.g., record to DB, email, etc.)
  // if(event.type === 'checkout.session.completed'){ ... }

  return new Response('ok', { status: 200 })
}
