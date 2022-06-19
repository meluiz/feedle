import type { EditorProps } from './type'
import React, { useState } from 'react'

import Editor from '@draft-js-plugins/editor'
import { ContentBlock, EditorState } from 'draft-js'
import { Box, Text } from '@chakra-ui/react'

import createHashtagPlugin, { extractHashtagsWithIndices } from '@draft-js-plugins/hashtag'
import createLinkfyPlugin, { extractLinks } from '@draft-js-plugins/linkify'

const hashtagPlugin = createHashtagPlugin({
  hashtagComponent: ({ children }) => (
    <Text display="inline-block" color="blue.300" as="span">
      {children}
    </Text>
  ),
})

const linkfyPlugin = createLinkfyPlugin({
  component: ({ children }) => (
    <Text display="inline-block" color="blue.300" as="span">
      {children}
    </Text>
  ),
})

const plugins = [hashtagPlugin, linkfyPlugin]
const Component: React.FC<EditorProps> = function ({ updateEditor }) {
  const [editorValue, updateEditorValue] = useState(() => EditorState.createEmpty())

  function handleOnChange(editor: EditorState) {
    const plaintext = editor.getCurrentContent().getPlainText()

    const links = extractLinks(plaintext)?.map((link) => link.url) || null
    const hashtags =
      extractHashtagsWithIndices(plaintext).map((hashtag) =>
        hashtag.hashtag.replace('#', '')
      ) || null

    updateEditorValue(editor)
    updateEditor((prev) => ({
      ...prev,
      hashtags: hashtags.length > 1 ? hashtags : null,
      links,
      plaintext,
    }))
  }

  function blockStyle(content: ContentBlock): string {
    const type = content.getType()
    if (type === 'unstyled') return 'DraftEditor-unstyled'

    return 'css-0'
  }

  return (
    <Box w="100%" maxH="512px" py="6px" overflow="auto" pos="relative" fontSize="18px">
      <Editor
        editorState={editorValue}
        onChange={handleOnChange}
        blockStyleFn={blockStyle}
        plugins={plugins}
        spellCheck
        placeholder="Quais são as novidades?"
      />
    </Box>
  )
}

export default Component
