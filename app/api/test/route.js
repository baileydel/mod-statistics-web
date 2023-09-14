import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch(`http://76.144.100.202:6969/r`);
    const respoonse = await response.json();

    return NextResponse.json(respoonse);

}


