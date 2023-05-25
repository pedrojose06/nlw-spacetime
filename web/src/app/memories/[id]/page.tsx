// import { UploadMemoryForm } from '@/components/UploadMemoryForm'

// import { api } from '@/lib/api'
import { UploadMemoryForm } from '@/components/UploadMemoryForm'
import { api } from '@/lib/api'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface IUpdateParams {
  [x: string]: any
}

interface Memory {
  id: string
  content: string
  isPublic: Boolean
  createdAt: 'string'
  coverUrl: string
}

export default async function UploadMemory(params: IUpdateParams) {
  const memoryId = params.params.id

  const token = cookies().get('token')?.value
  const response = await api.get('/memories/' + memoryId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: Memory = response.data

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <UploadMemoryForm memory={memory} />
    </div>
  )
}
