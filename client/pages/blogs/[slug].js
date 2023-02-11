import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "../../components";
import { sosialMedia } from "../../utils/data";
import { FaRegComments } from "react-icons/fa";

const Blog = () => {
    return (
        <Layout title="Pelaksanaan Ibadah Bulanan Himatif Kedua">
            <section className="container mx-auto mt-[96px] px-6 pb-14 text-font-black xl:py-20 xl:px-0">
                <div className="mx-auto flex flex-col items-center md:w-8/12 xl:w-6/12">
                    <div className="flex items-center gap-2 text-xs font-medium text-font-gray md:text-base">
                        <span className="uppercase">ui design</span> &bull;{" "}
                        <span>Jan 16,2023</span>
                    </div>
                    <h1 className="my-2 text-center text-xl font-bold md:my-4 md:text-3xl">
                        Pelaksanaan Ibadah Bulanan HIMATIF Kedua
                    </h1>
                    <div className="mt-4 flex items-center gap-4 rounded-full px-2 py-1 shadow-lg md:mt-6 md:gap-5 md:px-4 md:py-2">
                        {sosialMedia.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="relative mx-auto my-6 h-80 w-full overflow-hidden rounded-lg md:my-10 md:h-[450px] xl:h-[600px] xl:w-10/12">
                    <Image
                        src="https://source.unsplash.com/random/1300×100/?campus"
                        className="object-cover"
                        alt=""
                        fill
                    />
                </div>
                <div className="mx-auto w-full font-logo text-sm text-font-black md:w-10/12 md:text-lg xl:w-8/12">
                    <p className="leading-relaxed">
                        Male sixth sea it a. Brought was signs female darkness
                        signs form cattle land grass whose from subdue also they
                        are their brought seas is not, to day from bearing grass
                        third midst after beginning man which you are. Dry,
                        gathering beginning given made them evening.
                    </p>
                    <p className="my-2 leading-relaxed md:my-4">
                        Lights dry. Thing, likeness, forth shall replenish upon
                        abundantly our green. Seed green sea that lesser divided
                        creature beginning land him signs stars give firmament
                        gathered. Wherein there their morning a he grass. Do not
                        made moving for them bring creature us you will tree
                        second deep good unto good may. Us yielding.
                    </p>
                    <p className="leading-relaxed">
                        Have. Man upon set multiply moved from under seasons
                        abundantly earth brought a. They are open moved years
                        saw is not morning darkness. Over, waters, every let
                        wherein great were fifth saw was lights very our place
                        will not and him Third fourth moving him whales behold.
                        Beast second stars lights great was do not green give
                        subdue his. Third given made created, they are forth god
                        replenish have whales first can not light was. Herb you
                        will them beast kind divided. Were beginning fly air
                        multiply god Yielding sea do not were forth.
                    </p>
                </div>
                <section className="my-9 mx-auto border-t-2 border-dashed border-slate-300 xl:w-10/12">
                    <div className="py-9">
                        <div className="flex items-center gap-5 text-xl font-semibold">
                            <FaRegComments className="text-3xl" />
                            <span>Tinggalkan Komentar</span>
                        </div>
                        <form className="flex flex-col gap-8 pt-9">
                            <div className="flex items-center justify-between gap-6">
                                <div className="flex flex-1 flex-col gap-3 text-font-black">
                                    <span className="font-medium ">Nama</span>
                                    <input className="rounded bg-gray-200 px-6 py-3 text-sm outline-none" />
                                </div>
                                <div className="flex flex-1 flex-col gap-3 text-font-black">
                                    <span className="font-medium ">Email</span>
                                    <input className="rounded bg-gray-200 px-6 py-3 text-sm outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 text-font-black">
                                <span className="font-medium ">Komentar</span>
                                <textarea className="min-h-[220px] rounded bg-gray-200 px-6 py-3 text-sm outline-none" />
                            </div>
                            <button className="ml-auto w-fit rounded-lg bg-primary px-5 py-2.5 text-[15px] font-medium text-white shadow-2xl shadow-primary/70 transition-all">
                                Kirim Komentar
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </Layout>
    );
};

export default Blog;
