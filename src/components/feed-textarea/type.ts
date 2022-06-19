import type { Dispatch, SetStateAction } from 'react'

export type EditorObject = {
  hashtags: string[] | null
  links: string[] | null
  plaintext: string
}

export type EditorProps = {
  updateEditor: Dispatch<SetStateAction<EditorObject>>
}
