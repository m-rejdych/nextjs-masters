import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getOrderById } from '@/api/order';

export const POST = async () => {
  const orderId = cookies().get('orderId')?.value;
  if (!orderId) {
    return NextResponse.json({ result: 'success', data: false }, { status: 200 });
  }

  const order = await getOrderById(orderId);
  if (!order || ['PAID', 'FULFILLED'].includes(order.status)) {
    cookies().delete('orderId');
    return NextResponse.json({ result: 'success', data: true }, { status: 200 });
  }

  return NextResponse.json({ result: 'success', data: false }, { status: 200 });
};
