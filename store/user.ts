import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
    name: string | null
}

type UserAction = {
    updateUserName: (name: UserState['name']) => void
}

const useUserStore = create<UserState & UserAction>()(
    persist(
        (set) => ({
            name: null,
            updateUserName: (name: string | null) => set(() => ({ name }))
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useUserStore