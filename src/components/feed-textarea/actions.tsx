import type { ActionsMediaObject, ActionsProps } from './type'
import React, { FormEvent, useEffect, useState } from 'react'

import * as yup from 'yup'
import { CalendarIcon, ImageIcon } from '@radix-ui/react-icons'
import { Toast } from 'components'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Tooltip,
  useToast,
} from '@chakra-ui/react'

const Component: React.FC<ActionsProps> = function ({ updateEditor }) {
  const [media, updateMedias] = useState<ActionsMediaObject[]>()
  const toast = useToast()

  async function handleImagesOnChange(event: FormEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files || [])

    if (files) {
      const validImageType = ['image/jpeg', 'image/png', 'image/webp']
      const validVideoType = ['video/mp4', 'video/quicktime', 'video/webm', 'image/gif']
      const validFileType = [...validImageType, ...validVideoType]

      const MESSAGES = {
        FILE_TYPE: 'Escolha 1 Gif/Vídeo ou 4 fotos.',
        FILE_IMAGE_SIZE: 'Escolha fotos de até 2mb',
        FILE_VIDEO_SIZE: 'Escolha Gif/Vídeo de até 512mb',
        FILE_IMAGE_QUANTITY: 'Escolha 1 Gif/Vídeo ou 4 fotos.',
        FILE_VIDEO_QUANTITY: 'Escolha 1 Gif/Vídeo ou 4 fotos.',
        ONE_FILE_TYPE: 'Escolha 1 Gif/Vídeo ou 4 fotos.',
      }

      const schema = yup.object({
        file: yup
          .mixed()
          .test(
            'FILE_TYPE',
            MESSAGES['FILE_TYPE'],
            (file) => file && validFileType.includes(file.type)
          )
          .test('FILE_IMAGE_SIZE', MESSAGES['FILE_IMAGE_SIZE'], (file) => {
            if (file) {
              if (validImageType.includes(file.type)) return file.size <= 2097152
              return true
            }
            return false
          })
          .test('FILE_VIDEO_SIZE', MESSAGES['FILE_VIDEO_SIZE'], (file) => {
            if (file) {
              if (validVideoType.includes(file.type)) return file.size <= 536870912
              return true
            }
            return false
          }),
      })

      for (const file of files) {
        try {
          await schema.validate({ file })
        } catch (error: any) {
          return toast({
            render: () => <Toast title={error.errors.at(0)} status="error" />,
          })
        }
      }

      const images = files.filter((file) => validFileType.includes(file.type))
      const videos = files.filter((file) => validVideoType.includes(file.type))

      if (images.length >= 1) {
        if (videos.length >= 1)
          return toast({
            render: () => <Toast title={MESSAGES['ONE_FILE_TYPE']} status="error" />,
          })

        if (images.length > 4)
          return toast({
            render: () => <Toast title={MESSAGES['FILE_IMAGE_QUANTITY']} status="error" />,
          })
      }

      if (videos.length >= 1) {
        if (images.length >= 1)
          return toast({
            render: () => <Toast title={MESSAGES['ONE_FILE_TYPE']} status="error" />,
          })

        if (videos.length > 1)
          return toast({
            render: () => <Toast title={MESSAGES['FILE_VIDEO_QUANTITY']} status="error" />,
          })
      }

      updateMedias(
        files.map((file) => ({
          name: file.name,
          size: file.size / 1024,
          type: file.type,
          tempUrl: URL.createObjectURL(file),
        }))
      )

      updateEditor((prev) => ({
        ...prev,
        files,
      }))
    }
  }

  return (
    <Flex
      flexFlow="row nowrap"
      alignItems="center"
      justifyContent="flex-start"
      pos="relative"
      gap="4px"
    >
      <Tooltip label="Mídia" bg="mauve.1000" color="white" openDelay={600}>
        <FormControl pos="relative">
          <Button
            w="32px"
            h="44px"
            minW="32px"
            p="0"
            m="0"
            pos="relative"
            bg="transparent"
            _hover={{
              bg: 'transparent',
              _before: {
                opacity: 1,
                bg: 'mauve.1000',
              },
            }}
            _active={{
              bg: 'transparent',
              _before: {
                opacity: 1,
                bg: 'mauve.00',
              },
            }}
            _before={{
              content: '""',
              w: '32px',
              h: '32px',
              opacity: 0,
              borderRadius: '9999px',
              pos: 'absolute',
              bg: 'mauve.1000',
            }}
            as={FormLabel}
            aria-label="Adicionar imagens"
            cursor="pointer"
          >
            <Text display="inline-block" pos="relative" color="mauve.200" as="span">
              <ImageIcon width="18px" height="18px" />
            </Text>
          </Button>
          <Input
            w="0"
            h="0"
            pos="absolute"
            top="0"
            left="0"
            userSelect="none"
            pointerEvents="none"
            opacity="0"
            visibility="hidden"
            type="file"
            multiple
            tabIndex={-1}
            accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
            onChange={handleImagesOnChange}
          />
        </FormControl>
      </Tooltip>
      <Tooltip label="Programar" bg="mauve.1000" color="white" openDelay={600}>
        <Button
          w="32px"
          h="44px"
          minW="32px"
          p="0"
          pos="relative"
          bg="transparent"
          _hover={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.1000',
            },
          }}
          _active={{
            bg: 'transparent',
            _before: {
              opacity: 1,
              bg: 'mauve.900',
            },
          }}
          _before={{
            content: '""',
            w: '32px',
            h: '32px',
            opacity: 0,
            borderRadius: '9999px',
            pos: 'absolute',
            bg: 'mauve.1000',
          }}
          aria-label="Programar publicação"
        >
          <Text display="inline-block" pos="relative" color="mauve.200" as="span">
            <CalendarIcon width="18px" height="18px" />
          </Text>
        </Button>
      </Tooltip>
    </Flex>
  )
}

export default Component
