import { NextResponse } from "next/server";
import { initializeDataSource } from "@/app/lib/db/data-server";
import { Lugares } from "@/entities/entities/Lugares";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') || '';
    const db = await initializeDataSource();
    const repo = db.getRepository(Lugares);

    if (!q || q.trim().length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // use ILIKE / LOWER comparison for case-insensitive match
    const term = `%${q}%`;
    const places = await repo.createQueryBuilder('lugar')
      .where('LOWER(lugar.nombre) LIKE LOWER(:term)', { term })
      .limit(10)
      .getMany();

    return NextResponse.json(places, { status: 200 });
  } catch (e) {
    console.error('search error', e);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
