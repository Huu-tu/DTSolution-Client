import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionData from "./solutionData";

const Solution = () => {
    return (
        <>
            <section id="features" className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <SectionTitle
                        title="Giải pháp tự động hóa"
                        paragraph="Nâng cao hiệu quả công việc, tiết kiệm chi phí và nâng cao chất lượng sản phẩm."
                        center
                    />

                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {solutionData.map((feature) => (
                            <SingleSolution key={feature.id} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solution;
