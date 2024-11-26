"use client"

import { modalController } from "@/lib/features/Modal/modalSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hook"
import clsx from "clsx"
import { useEffect } from "react"
import { usePathname } from 'next/navigation' // Sayfa yolunu izlemek için kullanıyoruz

// Modal bileşeni
export default function Modal() {
    const dispatch = useAppDispatch()
    const modalStatus = useAppSelector(state => state.modalSlice.isOpen)
    const controlModal = () => {
        dispatch(modalController())
    }

    // Sayfa yolunu almak için usePathname kullanıyoruz
    const pathname = usePathname()

    useEffect(() => {
        // Sayfa değiştiğinde modalı kapat
        if (modalStatus) {
            dispatch(modalController()) // Modalı kapat
        }
    }, [pathname]) // pathname bağımlılığını ekledik

    return (
        <div className={clsx("invisible absolute inset-0 z-10 bg-black/60 backdrop-blur-sm w-full h-full overflow-hidden opacity-0 transition-all", {
            "!visible opacity-100": modalStatus === true,
        })}>
            <section className="w-full h-full flex items-center justify-center">
                <div className="z-20 w-[520px] h-[260px] bg-secondary border border-third/10 rounded-lg flex flex-col gap-8 p-6 shadow-xl shadow-black/10">
                    <p className="text-justify text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim fuga aliquid repellendus. Quaerat molestiae sed quos est eaque placeat quam vero, harum repellendus commodi illo tenetur minus repudiandae deserunt laborum. Necessitatibus, nesciunt laudantium minus distinctio modi sequi suscipit sunt.</p>
                    <button
                        onClick={controlModal}
                        className="w-fit self-center px-4 py-1 bg-primary border border-third/40 font-medium text-secondary rounded-md shadow-xl shadow-black/20 transition-all duration-300 hover:text-primary hover:border-third/80"
                    >
                        Modal Kapat
                    </button>
                </div>
            </section>
        </div>
    )
}
