import Bundlr from "@bundlr-network/client"
import { NextRequest, NextResponse } from "next/server"



export async function POST(req: NextRequest) {
    const data = await req.json()
    const bundlr = new Bundlr("http://node1.bundlr.network", "matic", process.env.BNDLR_KEY)
    await bundlr.ready()
    const tx = await bundlr.upload(JSON.stringify(data), {
      tags: [{ name: 'Content-Type', value: 'application/json' }],
    })
  
    return NextResponse.json({ url: `https://arweave.net/${tx.id}` })
}