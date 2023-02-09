import React from "react";
import { Layout } from "../../components";

const Blog = () => {
    return (
        <Layout title="Pelaksanaan Ibadah Bulanan Himatif Kedua">
            <section className="container mx-auto px-6 pb-14 text-font-black xl:px-0 xl:py-32">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 font-medium ">
                        <span className="uppercase">ui design</span> &bull;{" "}
                        <span>Jan 16,2023</span>
                    </div>
                    <h1 className="my-4 text-3xl font-bold">
                        Pelaksanaan Ibadah Bulanan HIMATIF Kedua
                    </h1>
                </div>
                <div className="mx-auto my-10 w-full md:w-10/12">
                    <img
                        src="https://source.unsplash.com/random/1300×100/?campus"
                        alt=""
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="mx-auto w-full text-xl leading-relaxed md:w-8/12">
                    <p>
                        Male sixth sea it a. Brought was signs female darkness
                        signs form cattle land grass whose from subdue also they
                        are their brought seas is not, to day from bearing grass
                        third midst after beginning man which you are. Dry,
                        gathering beginning given made them evening.
                    </p>
                    <p className="my-4">
                        Lights dry. Thing, likeness, forth shall replenish upon
                        abundantly our green. Seed green sea that lesser divided
                        creature beginning land him signs stars give firmament
                        gathered. Wherein there their morning a he grass. Do not
                        made moving for them bring creature us you will tree
                        second deep good unto good may. Us yielding.
                    </p>
                    <p>
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
            </section>
        </Layout>
    );
};

export default Blog;
