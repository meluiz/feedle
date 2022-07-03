import type { Dispatch, SetStateAction } from 'react'

export type EditorObject = {
  hashtags: string[] | null
  links: string[] | null
  plaintext: string
  files: File[] | null
}

export type EditorProps = {
  updateEditor: Dispatch<SetStateAction<EditorObject>>
}

export type ActionsProps = {
  updateEditor: Dispatch<SetStateAction<EditorObject>>
}

export type ActionsMediaObject = {
  name: string
  size: number
  type: string
  caption?: string
  tempUrl: string
}
