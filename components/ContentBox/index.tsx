import { IContent } from "@/types/contentType";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ContentBoxProps {
    data: IContent;
}

export default function ContentBox({ data }: ContentBoxProps) {
    const { push } = useRouter();

    const handleRedirect = (url: string) => {
        push(`${url}`);
    }

    return (
        <div
            onClick={() => handleRedirect(data.url)}
            className="relative min-h-80 w-2/3 mx-auto flex bg-secondary/60 rounded-md overflow-hidden custom-shadow transition-all duration-500 lg:hover:scale-105 cursor-pointer ">
            {/*
            <figure
                className="relative aspect-square w-1/3 flex-shrink-0 bg-gray-400"
            >
                <Image
                alt=""
                className="object-cover"
                src={""}
                /> 
            </figure>
            */}
            <div className="w-full flex flex-col items-start justify-between gap-2 px-6 py-8">
                <section className="flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold text-primary tracking-wide">{data.title}</h2>
                    <p className="font-normal text-lg text-third text-justify leading-7">
                        {data.desc}
                    </p>
                </section>
                <div className="w-fit flex items-center gap-6 py-2 px-3 bg-secondary rounded-full custom-shadow">
                    <span className="text-lg font-semibold text-third">LEVEL :</span>
                    <div className={clsx("min-w-[112px] font-medium text-center border px-0.5 py-1.5 rounded-full text-secondary ", {
                        "border-customGreen bg-customGreen/60": data.degree === 'Basic',
                        "border-customBlue bg-customBlue/60": data.degree === 'Intermediate',
                        "border-customYellow bg-customYellow/60": data.degree === 'Advanced',
                        "border-customRed bg-customRed/30": data.degree === 'Expert',
                    })}>
                        <span className="uppercase text-xs tracking-wide">{data.degree}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
