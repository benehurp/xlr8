import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type StandardButtonTypes =
   | AnchorHTMLAttributes<HTMLAnchorElement>
   | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
   status?: boolean
} & StandardButtonTypes
