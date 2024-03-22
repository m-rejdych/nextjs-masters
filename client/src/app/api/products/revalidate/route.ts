import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const POST = async () => {
  revalidatePath('/');
  revalidateTag('products');

  return NextResponse.json({ result: 'success', data: 'Products revalidated' });
};
