import { BaseIcon } from '@point-hub/papp'

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseIcon: typeof BaseIcon
  }
} 
