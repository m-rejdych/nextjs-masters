import { type NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const POST = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ result: 'error', data: '"id" param is requried' }, { status: 400 });
  }

  revalidatePath('/');
  revalidatePath(`/product/${id}`);
  revalidateTag('products');

  return NextResponse.json({ result: 'success', data: `Product ${id} revalidated` });
};
