import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const POST = async () => {
  revalidatePath('/');
  revalidatePath('/products/[currentPage]', 'page');
  revalidatePath('/categories/[slug]/[currentPage]', 'page');
  revalidatePath('/collections/[slug]/[currentPage]', 'page');

  return NextResponse.json({ result: 'success', data: 'Products revalidated' });
};
