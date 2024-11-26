"use client"
import { modalController } from "@/lib/features/Modal/modalSlice"
import { useAppDispatch } from "@/lib/hook"


export default function ModalPage() {
    const dispatch = useAppDispatch()
    const controlModal = () => {
        dispatch(modalController())
    }

    return (
        <div className='w-full flex flex-col items-center gap-10'>
            <h1 className='text-3xl text-primary font-bold tracking-wide'>MODAL EXAMPLE</h1>
            <section>
                <button
                    onClick={controlModal}
                    className="px-4 py-2 border-2 border-third/40 text-secondary rounded-md custom-shadow transition-all duration-300 hover:text-primary hover:border-third/80 font-medium"
                >Click to open modal</button>
            </section>
        </div>
    )
}
