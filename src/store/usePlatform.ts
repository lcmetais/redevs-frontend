import { create } from 'zustand'

type PlatformStore = {
  showMobileUserDropdown: boolean
  setToggleMobileUserDropdown: () => void
  showMoreOptionsMobileDropdown: boolean
  setShowMoreOptionsMobileDropdown: () => void
  showSidebar: boolean
  setShowSidebar: () => void
}

export const usePlatform = create<PlatformStore>((set) => ({
  showMobileUserDropdown: false,
  showSidebar: false,
  showMoreOptionsMobileDropdown: false,
  setToggleMobileUserDropdown: () =>
    set(({ showMobileUserDropdown }) => ({
      showMobileUserDropdown: !showMobileUserDropdown
    })),
  setShowSidebar: () =>
    set(({ showSidebar }) => ({ showSidebar: !showSidebar })),
  setShowMoreOptionsMobileDropdown: () =>
    set(({ showMoreOptionsMobileDropdown }) => ({
      showMoreOptionsMobileDropdown: !showMoreOptionsMobileDropdown
    }))
}))
