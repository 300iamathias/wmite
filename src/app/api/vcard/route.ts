import { NextResponse } from "next/server"
import { cardConfig } from "@/data/card"

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${cardConfig.vcard.fn}
TEL:${cardConfig.vcard.tel}
EMAIL:${cardConfig.vcard.email}
URL:${cardConfig.vcard.url}
ORG:${cardConfig.vcard.org}
ROLE:${cardConfig.vcard.role}
ADR:;;${cardConfig.vcard.adr}
END:VCARD`

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="wellington-mite.vcf"',
    },
  })
}
