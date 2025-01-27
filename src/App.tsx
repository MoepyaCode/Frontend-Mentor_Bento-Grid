import { illustrations } from "@app-assets"

function App() {

  return (
    <main className="font-sans bg-[#F6F5F6] min-h-screen grid place-items-center px-4 py-6">

      <section className="w-full h-full grid grid-cols-1 grid-rows-[auto] gap-8">

        {/* Grid Section 1 */}
        <section className="grid gap-8">
          <div className="bg-purple-500 flex flex-col items-center justify-center gap-6 rounded-[10px] text-center px-8 p-10">
            <p className="text-white font-medium text-[46px] leading-[42px] tracking-[-4%]">
              Social Media <span className="text-yellow-500">10x</span> <span className="italic">Faster</span> with AI
            </p>

            <div className="grid place-items-center gap-2">
              <img className="object-contain max-h-[32px]" src={illustrations.fiveStars} alt="five stars" />
              <p className="text-white">Over 4,000 5-star reviews</p>
            </div>
          </div>

          <div className="bg-white p-4 flex flex-col justify-center items-center gap-4 rounded-[10px]">
            <img className="object-contain max-h-[65px] rounded-full" src={illustrations.multiplePlatforms} alt="multiple platforms" />
            <p className="font-medium text-[26px] leading-[24px] tracking-[-6%]">Manage multiple accounts and platforms.</p>
          </div>

          <div className="bg-yellow-500 max-h-[194.5px] overflow-hidden px-4 pt-4 flex flex-col items-start gap-4 rounded-[10px] ">
            <p className="font-medium text-[26px] leading-[24px] tracking-[-6%]">Maintain a consistent posting schedule.</p>
            <img className="object-contain max-h-[157px]" src={illustrations.consistentSchedule} alt="consistent schedule" />
          </div>

          <div className="bg-purple-100 px-4 py-8 flex flex-col justify-center items-center gap-6 rounded-[10px] text-center">
            <p className="font-medium text-[26px] leading-[24px] tracking-[-6%]">Schedule to social media.</p>
            <img className="object-contain max-h-[273px]" src={illustrations.schedulePosts} alt="schedule posts" />
            <p className="text-[18px] leading-[20px] mx-4">Optimize post timings to publish content at the perfect time for your audience.</p>
          </div>
        </section>

        {/* Grid Section 2 */}
        <section className="grid gap-8">
          <div className="grid place-items-center gap-10 p-6 bg-purple-500 rounded-[10px] text-center">
            <img className="object-contain max-h-[200px]" src={illustrations.growFollowers} alt="grow followers" />
            <p className="text-white font-medium text-[32px] leading-[28px] tracking-[-6%]">Grow followers with non-stop content.</p>
          </div>

          <div className="p-6 flex flex-col items-start gap-6">
            <div className="grid gap-[15px]">
              <p className="font-medium text-[46px] leading-[42px] tracking-[-4%]">{'>'}56% </p>
              <p className="text-[18px] leading-[20px]">faster audience growth</p>
            </div>
            <img className="object-contain max-h-[67px]" src={illustrations.audienceGrowth} alt="audience growth" />
          </div>
        </section>

        {/* Grid Section 3 */}
        <section className="grid gap-8">
          <div className="bg-yellow-100 p-8 flex flex-col items-start gap-6 rounded-[10px]">
            <p className="font-medium text-[32px] leading-[28px] tracking-[-6%]">Create and schedule content <span className="italic text-purple-500">quicker.</span></p>
            <img className="object-contain max-h-[90px]" src={illustrations.createPost} alt="create post" />
          </div>

          <div className="bg-yellow-500 grid gap-6 p-6 rounded-[10px]">
            <p className="font-medium text-[32px] leading-[28px] tracking-[-6%]">Write your content using AI.</p>
            <img className="object-contain max-h-[222.5px]" src={illustrations.aiContent} alt="create post" />
          </div>
        </section>

      </section>

    </main>
  )
}

export default App