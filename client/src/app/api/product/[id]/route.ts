import { type NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const POST = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ result: 'error', data: '"id" param is requried' }, { status: 400 });
  }

  revalidatePath('/');
  revalidatePath(`/product/${id}`);
  revalidatePath('/products/[currentPage]', 'page');
  revalidatePath('/categories/[slug]/[currentPage]', 'page');
  revalidatePath('/collections/[slug]/[currentPage]', 'page');

  return NextResponse.json({ result: 'success', data: `Product ${id} revalidated` });
};
